import { chain, mergeWith, Rule, SchematicContext, SchematicsException, strings, template, Tree, url, apply } from '@angular-devkit/schematics';
import clownface, { AnyPointer } from 'clownface';

import * as N3 from 'n3';
import factory from 'rdf-ext';
import namespace from '@rdfjs/namespace';

import { RrdEntitySchematics } from "./schema";
import { createRdfEntity } from '../create-rdf-entity'

import Serializer from '@rdfjs/serializer-rdfjs'
import { classify, dasherize } from '@angular-devkit/core/src/utils/strings';
import DatasetExt from 'rdf-ext/lib/Dataset';
import { RdfTypeMap } from './datatype-mapping';


const sh = namespace('http://www.w3.org/ns/shacl#')
const rdf = namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#')
const rdfs = namespace('http://www.w3.org/2000/01/rdf-schema#')

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function rdfEntity(options: RrdEntitySchematics): Rule {

  return async (tree: Tree, _context: SchematicContext) => {
    const path = options.path;
    const shapeTurtle = tree.read(path)?.toString();
    if (!shapeTurtle) {
      throw new SchematicsException(`File ${options.path} not found.`);
    }
    const shapeDataset = rdfToDataset(shapeTurtle);
    const nodeShapePtr = clownface({ dataset: shapeDataset }).node(sh.NodeShape).in(rdf`type`);



    const shapes: NodeShape[] = nodeShapePtr.map(nodeShape => {
      const importSet = new Set<string>();

      const entityName = nodeShape.out(rdfs.label).value ?? '';
      const entityComment = nodeShape.out(rdfs.comment).value ?? '';
      const shape: NodeShape = {
        model: options.name,
        name: entityName,
        comment: entityComment,
        modelName: options.name,
        properties: [],
        imports: [],
        tsCode: [],
        iri: nodeShape.value ?? ''
      };

      shape.properties = nodeShape.out(sh.property).map(propertyShape => {
        const path = propertyShape.out(sh.path);
        const name = propertyShape.out(sh`name`).value ?? '';
        const datatype = propertyShape.out(sh.datatype).value ?? 'zero';
        const description = propertyShape.out(sh.description).value ?? '';
        const entity = propertyShape.out(sh.node).out(rdfs.label).value ?? '';
        const cardinalityMax = propertyShape.out(sh.maxCount).value ?? -1;
        const cardinalityMin = propertyShape.out(sh.minCount).value ?? -1;
        let returnsEntity = false;
        let returnJsType = RdfTypeMap.get(datatype) ?? 'string';

        if (entity?.length > 0) {
          importSet.add(entityNameToImport(entity));
          returnsEntity = true;
          returnJsType = `${entity}Entity`;
        }

        return {
          name,
          path,
          description,
          datatype,
          entityName,
          returnJsType,
          returnsArray: cardinalityMax < 1 ? true : false,
          canBeUndefined: cardinalityMin < 1 ? true : false,
          returnsEntity
        }
      })
      shape.imports = [...importSet.values()];
      return shape;
    });


    shapes.forEach(nodeShape => {
      nodeShape.tsCode = nodeShape.properties.map(propertyShape => {
        const tsCode: TypescriptCode = {
          setter: '',
          getter: ''
        };
        tsCode.getter = _createGetter(propertyShape);

        return tsCode;
      })
    })

    // template

    const sourceTemplates = url('./model-files/');  // get hold of our template folders & files
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ...options,    // parametrize our template sources
        ...strings      // apply accepts source and array of rules
      })              // "template" rule processes templates / we pass in options and helper strings / and we get parametrized template source
    ]);
    const rule = mergeWith(sourceParametrizedTemplates);

    const createEntityRules = shapes.map(shape => createRdfEntity(shape));
    const createEntitiesRules = chain(
      [rule, ...createEntityRules]
    );

    const serializer = new Serializer({
      module: 'ts'
    });

    const quadsAsTypescriptModule = serializer.transform(shapeDataset.toArray());
    tree.create(`${dasherize(options.name)}/${dasherize(options.name)}-graph.ts`, quadsAsTypescriptModule)
    return createEntitiesRules(tree, _context) as Promise<Rule>
  };
}

function _createGetter(propertyShape: PropertyShape) {
  let tsDoc = '';
  if(propertyShape.description.length > 0) {
    tsDoc = `\t/**\n\t * ${propertyShape.description}\n\t */\n`
  }
  if (propertyShape.returnsArray) {
    if (propertyShape.returnsEntity) {
      return `${tsDoc}\tpublic get ${propertyShape.name}() : ${propertyShape.returnJsType}[] {
\t\tconst nodes = this._getPropertyValueByName('${propertyShape.name}');
\t\treturn nodes.map(node => {
\t\t\tlet n: NamedNode | BlankNode;
\t\t\tif(node.term.termType === 'NamedNode') {
\t\t\t\tn = $rdf.namedNode(node.value);
\t\t\t} else {
\t\t\t\tn = $rdf.blankNode(node.value);
\t\t\t}
\t\t\treturn new ${propertyShape.returnJsType}(n, this._dataGraph);
\t\t});
\t}`;
    }
    return `${tsDoc}\tpublic get ${propertyShape.name}() : ${propertyShape.returnJsType}[] {
\t\tconst nodes = this._getPropertyValueByName('${propertyShape.name}');
\t\treturn nodes.values.map(value => {
\t\t\tconst literal = $rdf.literal(value, $rdf.namedNode('${propertyShape.datatype}'));
\t\t\treturn fromRdf(literal) as ${propertyShape.returnJsType};
\t\t})
\t}`;
  } else {
    if (propertyShape.returnsEntity) {
      return `${tsDoc}\tpublic get ${propertyShape.name}() : ${propertyShape.returnJsType}${propertyShape.canBeUndefined ? ' | undefined' : '' } {
\t\tconst nodes = this._getPropertyValueByName('${propertyShape.name}');
\t\tif (nodes.value) {
\t\t\treturn new ${propertyShape.returnJsType}(n, this._dataGraph);
\t\t}
\t\t${propertyShape.canBeUndefined ? 'return undefined' : `throw \`Invalid data: ${propertyShape.entityName}.${propertyShape.name} is undefined}\``};
\t}`;
    }
    return `${tsDoc}\tpublic get ${propertyShape.name}() : ${propertyShape.returnJsType}${propertyShape.canBeUndefined ? ' | undefined' : '' } {
\t\tconst node = this._getPropertyValueByName('${propertyShape.name}');
\t\tif(node.value) {
\t\t\tconst literal = fromRdf($rdf.literal(node.value, $rdf.namedNode('${propertyShape.datatype}')));
\t\t\treturn literal as ${propertyShape.returnJsType};
\t\t}
\t\t${propertyShape.canBeUndefined ? 'return undefined' : `throw \`Invalid data: ${propertyShape.entityName}.${propertyShape.name} is undefined}\``};
\t}`;
  }
}


function rdfToDataset(rdfString: string): DatasetExt {
  const parser = new N3.Parser({ factory });
  const quads = parser.parse(rdfString);
  return factory.dataset(quads);
}

function entityNameToImport(entityName: string): string {
  return `import { ${classify(entityName)}Entity } from '../${dasherize(entityName)}-entity/${dasherize(entityName)}.entity'`;
}

export interface NodeShape {
  model: string,
  name: string,
  comment: string,
  iri: string,
  modelName: string,
  properties: PropertyShape[],
  imports: string[];
  tsCode: TypescriptCode[];
}

interface PropertyShape {
  path: AnyPointer,
  name: string,
  description: string,
  datatype: string;
  entityName: string,
  returnJsType: string;
  canBeUndefined: boolean;
  returnsArray: boolean;
  returnsEntity: boolean;
}

export interface TypescriptCode {
  getter: string,
  setter: string
}
