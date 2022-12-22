import { NamedNode, BlankNode } from 'rdf-js';
import $rdf from 'rdf-ext';
import DatasetExt from 'rdf-ext/lib/Dataset';
import clownface, { GraphPointer, MultiPointer } from 'clownface';
import { findNodes } from 'clownface-shacl-path';

import graphQuads from './<%= dasherize(name) %>-graph';

export class <%= classify(name) %> {
    private _dataset = new DatasetExt();
    private static _instance: <%= classify(name) %> | null = null;

    static get instance(): <%= classify(name) %> {
        if (<%= classify(name) %>._instance === null) {
            <%= classify(name) %>._instance = new <%= classify(name) %> ();
        }
        return <%= classify(name) %>._instance;
    }

    private constructor() {
        this._dataset.addAll(graphQuads($rdf));
    }

    get dataset(): DatasetExt {
        return this._dataset;
    }

}

export class <%= classify(name) %>Entity {

    protected _dataNode: NamedNode | BlankNode;
    protected _dataGraph: DatasetExt;
    protected _dataPointer: GraphPointer;

    protected _shapeNode: NamedNode;
    protected _shapeGraph: DatasetExt;
    protected _shapePointer: GraphPointer;

    constructor(shapeNode : NamedNode, node : NamedNode | BlankNode, dataGraph: DatasetExt){
        this._dataGraph = dataGraph;
        this._dataNode = node;
        this._dataPointer = clownface({ dataset: this._dataGraph }).node(this._dataNode);
        this._shapeGraph = <%= classify(name) %>.instance.dataset;
        this._shapeNode = shapeNode;
        this._shapePointer = clownface({ dataset: this._shapeGraph }).node(this._shapeNode);
    }

    public get rdfIdentifier(): NamedNode | BlankNode {
        if(this._dataPointer.term.termType === 'BlankNode') {
            return $rdf.blankNode(this._dataPointer.value)
        }
        return $rdf.namedNode(this._dataPointer.value)
    }
    
    protected _getPropertyValueByName(name: string): MultiPointer {
        const path = this._shapePointer
            .out($rdf.namedNode('http://www.w3.org/ns/shacl#property'))
            .has($rdf.namedNode('http://www.w3.org/ns/shacl#name'), name)
            .out($rdf.namedNode('http://www.w3.org/ns/shacl#path'));
        if (path.values.length < 1) {
            console.error(
                'ShapeInstance#getPropertyValues no path found for',
                name
            );
        }

        return findNodes(this._dataPointer, path);
    }
}