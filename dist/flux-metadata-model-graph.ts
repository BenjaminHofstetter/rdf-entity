/* This file was automatically generated. Do not edit by hand. */

const {
  ns1,
  rdfs,
  sh,
  rdf,
  xsd,
  ns6,
  ns7
} = {
  'ns1': 'https://ld.flux.zazuko.com/shapes/metadata/',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'sh': 'http://www.w3.org/ns/shacl#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'ns6': 'https://flux.described.at/',
  'ns7': 'https://entity.conceptspace.ch/'
}

export default ({ blankNode, literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  const blankNodes: import('rdf-js').BlankNode[] = []
  for (let i = 0; i < 10; i++) {
    blankNodes.push(blankNode())
  }

  return [
    quad(
      namedNode(ns1),
      namedNode(`${rdfs}label`),
      literal(`Entity Shape Graph for Flux Class MetadataShapes`, 'en')
    ),
    quad(
      namedNode(ns1),
      namedNode(`${rdfs}comment`),
      literal(`This shapes graph can be used to create and validate RDF Entities.`, 'en')
    ),
    quad(
      namedNode(ns1),
      namedNode(`${sh}declare`),
      blankNodes[0]
    ),
    quad(
      namedNode(ns1),
      namedNode(`${sh}declare`),
      blankNodes[1]
    ),
    quad(
      namedNode(ns1),
      namedNode(`${sh}declare`),
      blankNodes[2]
    ),
    quad(
      namedNode(ns1),
      namedNode(`${sh}declare`),
      blankNodes[3]
    ),
    quad(
      namedNode(ns1),
      namedNode(`${sh}declare`),
      blankNodes[4]
    ),
    quad(
      namedNode(ns1),
      namedNode(`${sh}declare`),
      blankNodes[5]
    ),
    quad(
      blankNodes[0],
      namedNode(`${sh}prefix`),
      literal(`fluxMatadataShapes`)
    ),
    quad(
      blankNodes[0],
      namedNode(`${sh}namespace`),
      literal(`https://ld.flux.zazuko.com/shapes/metadata/`)
    ),
    quad(
      blankNodes[1],
      namedNode(`${sh}prefix`),
      literal(`sh`)
    ),
    quad(
      blankNodes[1],
      namedNode(`${sh}namespace`),
      literal(`http://www.w3.org/ns/shacl#`)
    ),
    quad(
      blankNodes[2],
      namedNode(`${sh}prefix`),
      literal(`flux`)
    ),
    quad(
      blankNodes[2],
      namedNode(`${sh}namespace`),
      literal(`https://flux.described.at/`)
    ),
    quad(
      blankNodes[3],
      namedNode(`${sh}prefix`),
      literal(`rdfs`)
    ),
    quad(
      blankNodes[3],
      namedNode(`${sh}namespace`),
      literal(`http://www.w3.org/2000/01/rdf-schema#`)
    ),
    quad(
      blankNodes[4],
      namedNode(`${sh}prefix`),
      literal(`rdf`)
    ),
    quad(
      blankNodes[4],
      namedNode(`${sh}namespace`),
      literal(`http://www.w3.org/1999/02/22-rdf-syntax-ns#`)
    ),
    quad(
      blankNodes[5],
      namedNode(`${sh}prefix`),
      literal(`xsd`)
    ),
    quad(
      blankNodes[5],
      namedNode(`${sh}namespace`),
      literal(`http://www.w3.org/2001/XMLSchema#`)
    ),
    quad(
      namedNode(`${ns1}ClassMatadataShape`),
      namedNode(`${rdfs}label`),
      literal(`ClassMatadataShape`)
    ),
    quad(
      namedNode(`${ns1}ClassMatadataShape`),
      namedNode(`${rdfs}comment`),
      literal(`Shacl Shape to identify flux class shapes`)
    ),
    quad(
      namedNode(`${ns1}ClassMatadataShape`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}NodeShape`)
    ),
    quad(
      namedNode(`${ns1}ClassMatadataShape`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`)
    ),
    quad(
      namedNode(`${ns1}ClassMatadataShape`),
      namedNode(`${sh}targetClass`),
      namedNode(`${ns1}ClassMatadataShape`)
    ),
    quad(
      namedNode(`${ns1}ClassMatadataShape`),
      namedNode(`${sh}property`),
      namedNode(`${ns1}TargetNodeProperty`)
    ),
    quad(
      namedNode(`${ns1}ClassMatadataShape`),
      namedNode(`${sh}property`),
      namedNode(`${ns1}IconProperty`)
    ),
    quad(
      namedNode(`${ns1}ClassMatadataShape`),
      namedNode(`${sh}property`),
      namedNode(`${ns1}LinkProperty`)
    ),
    quad(
      namedNode(`${ns1}ClassMatadataShape`),
      namedNode(`${sh}property`),
      namedNode(`${ns1}ColorIndexProperty`)
    ),
    quad(
      namedNode(`${ns1}ClassMatadataShape`),
      namedNode(`${sh}property`),
      namedNode(`${ns1}SearchPriorityProperty`)
    ),
    quad(
      namedNode(`${ns1}ClassMatadataShape`),
      namedNode(`${sh}property`),
      namedNode(`${ns1}LabelPathProperty`)
    ),
    quad(
      namedNode(`${ns1}ClassMatadataShape`),
      namedNode(`${sh}property`),
      namedNode(`${ns1}CommentPathProperty`)
    ),
    quad(
      namedNode(`${ns1}TargetNodeProperty`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`)
    ),
    quad(
      namedNode(`${ns1}TargetNodeProperty`),
      namedNode(`${sh}path`),
      namedNode(`${sh}node`)
    ),
    quad(
      namedNode(`${ns1}TargetNodeProperty`),
      namedNode(`${sh}name`),
      literal(`targetNode`)
    ),
    quad(
      namedNode(`${ns1}TargetNodeProperty`),
      namedNode(`${sh}description`),
      literal(`The node target of this shape`)
    ),
    quad(
      namedNode(`${ns1}TargetNodeProperty`),
      namedNode(`${sh}class`),
      namedNode(`${rdfs}Class`)
    ),
    quad(
      namedNode(`${ns1}TargetNodeProperty`),
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`)
    ),
    quad(
      namedNode(`${ns1}TargetNodeProperty`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}TargetNodeProperty`),
      namedNode(`${sh}minCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}TargetNodeProperty`),
      namedNode(`${sh}message`),
      literal(`invalid sh:targetNode property`)
    ),
    quad(
      namedNode(`${ns1}IconProperty`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`)
    ),
    quad(
      namedNode(`${ns1}IconProperty`),
      namedNode(`${sh}path`),
      namedNode(`${ns6}faIcon`)
    ),
    quad(
      namedNode(`${ns1}IconProperty`),
      namedNode(`${sh}name`),
      literal(`icon`)
    ),
    quad(
      namedNode(`${ns1}IconProperty`),
      namedNode(`${sh}description`),
      literal(`The icon of the type.`)
    ),
    quad(
      namedNode(`${ns1}IconProperty`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}IconProperty`),
      namedNode(`${sh}minCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}IconProperty`),
      namedNode(`${sh}message`),
      literal(`Invalid icon Property`)
    ),
    quad(
      namedNode(`${ns1}IconProperty`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}string`)
    ),
    quad(
      namedNode(`${ns1}LinkProperty`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`)
    ),
    quad(
      namedNode(`${ns1}LinkProperty`),
      namedNode(`${sh}path`),
      namedNode(`${ns6}link`)
    ),
    quad(
      namedNode(`${ns1}LinkProperty`),
      namedNode(`${sh}node`),
      namedNode(`${ns1}FluxLinkShape`)
    ),
    quad(
      namedNode(`${ns1}LinkProperty`),
      namedNode(`${sh}name`),
      literal(`link`)
    ),
    quad(
      namedNode(`${ns1}LinkProperty`),
      namedNode(`${sh}description`),
      literal(`Flux links aka flux:Link`)
    ),
    quad(
      namedNode(`${ns1}LinkProperty`),
      namedNode(`${sh}minCount`),
      literal(`0`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}LinkProperty`),
      namedNode(`${sh}message`),
      literal(`Invalid flux Link`)
    ),
    quad(
      namedNode(`${ns1}ColorIndexProperty`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`)
    ),
    quad(
      namedNode(`${ns1}ColorIndexProperty`),
      namedNode(`${sh}path`),
      namedNode(`${ns6}colorIndex`)
    ),
    quad(
      namedNode(`${ns1}ColorIndexProperty`),
      namedNode(`${sh}name`),
      literal(`colorIndex`)
    ),
    quad(
      namedNode(`${ns1}ColorIndexProperty`),
      namedNode(`${sh}description`),
      literal(`Color index for this class`)
    ),
    quad(
      namedNode(`${ns1}ColorIndexProperty`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}ColorIndexProperty`),
      namedNode(`${sh}minCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}ColorIndexProperty`),
      namedNode(`${sh}message`),
      literal(`Invalid colorIndex`)
    ),
    quad(
      namedNode(`${ns1}ColorIndexProperty`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}integer`)
    ),
    quad(
      namedNode(`${ns1}ColorIndexProperty`),
      namedNode(`${sh}minInclusive`),
      literal(`0`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}ColorIndexProperty`),
      namedNode(`${sh}maxInclusive`),
      literal(`8`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}SearchPriorityProperty`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`)
    ),
    quad(
      namedNode(`${ns1}SearchPriorityProperty`),
      namedNode(`${sh}path`),
      namedNode(`${ns6}searchPrio`)
    ),
    quad(
      namedNode(`${ns1}SearchPriorityProperty`),
      namedNode(`${sh}name`),
      literal(`searchPriority`)
    ),
    quad(
      namedNode(`${ns1}SearchPriorityProperty`),
      namedNode(`${sh}description`),
      literal(`Search priority is a multiplicator for the search score`)
    ),
    quad(
      namedNode(`${ns1}SearchPriorityProperty`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}SearchPriorityProperty`),
      namedNode(`${sh}minCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}SearchPriorityProperty`),
      namedNode(`${sh}message`),
      literal(`Invalid search prority`)
    ),
    quad(
      namedNode(`${ns1}SearchPriorityProperty`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}integer`)
    ),
    quad(
      namedNode(`${ns1}SearchPriorityProperty`),
      namedNode(`${sh}minInclusive`),
      literal(`0`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}SearchPriorityProperty`),
      namedNode(`${sh}maxInclusive`),
      literal(`50`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}LabelPathProperty`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`)
    ),
    quad(
      namedNode(`${ns1}LabelPathProperty`),
      namedNode(`${sh}path`),
      namedNode(`${ns6}labelPath`)
    ),
    quad(
      namedNode(`${ns1}LabelPathProperty`),
      namedNode(`${sh}name`),
      literal(`labelPredicate`)
    ),
    quad(
      namedNode(`${ns1}LabelPathProperty`),
      namedNode(`${sh}description`),
      literal(`The label of this class`)
    ),
    quad(
      namedNode(`${ns1}LabelPathProperty`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}LabelPathProperty`),
      namedNode(`${sh}minCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}LabelPathProperty`),
      namedNode(`${sh}message:`),
      literal(`Invalid Label path`)
    ),
    quad(
      namedNode(`${ns1}CommentPathProperty`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`)
    ),
    quad(
      namedNode(`${ns1}CommentPathProperty`),
      namedNode(`${sh}path`),
      namedNode(`${ns6}commentPath`)
    ),
    quad(
      namedNode(`${ns1}CommentPathProperty`),
      namedNode(`${sh}name`),
      literal(`commentPredicate`)
    ),
    quad(
      namedNode(`${ns1}CommentPathProperty`),
      namedNode(`${sh}description`),
      literal(`The comment of this class`)
    ),
    quad(
      namedNode(`${ns1}CommentPathProperty`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}CommentPathProperty`),
      namedNode(`${sh}minCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}CommentPathProperty`),
      namedNode(`${sh}message:`),
      literal(`Invalid Comment path`)
    ),
    quad(
      namedNode(`${ns1}FluxLinkShape`),
      namedNode(`${rdfs}label`),
      literal(`FluxLink`)
    ),
    quad(
      namedNode(`${ns1}FluxLinkShape`),
      namedNode(`${rdfs}comment`),
      literal(`A descrition of a Link in Flux`)
    ),
    quad(
      namedNode(`${ns1}FluxLinkShape`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}NodeShape`)
    ),
    quad(
      namedNode(`${ns1}FluxLinkShape`),
      namedNode(`${sh}property`),
      blankNodes[6]
    ),
    quad(
      namedNode(`${ns1}FluxLinkShape`),
      namedNode(`${sh}property`),
      blankNodes[7]
    ),
    quad(
      namedNode(`${ns1}FluxLinkShape`),
      namedNode(`${sh}property`),
      blankNodes[8]
    ),
    quad(
      namedNode(`${ns1}FluxLinkShape`),
      namedNode(`${sh}class`),
      namedNode(`${sh}PropertyShape`)
    ),
    quad(
      namedNode(`${ns1}FluxTypeShape`),
      namedNode(`${rdfs}label`),
      literal(`FluxType`)
    ),
    quad(
      namedNode(`${ns1}FluxTypeShape`),
      namedNode(`${rdfs}comment`),
      literal(`This matches classes that are displayed in flux`)
    ),
    quad(
      namedNode(`${ns1}FluxTypeShape`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}NodeShape`)
    ),
    quad(
      namedNode(`${ns1}FluxTypeShape`),
      namedNode(`${sh}targetClass`),
      namedNode(`${rdfs}Class`)
    ),
    quad(
      namedNode(`${ns1}FluxTypeShape`),
      namedNode(`${sh}property`),
      namedNode(`${ns1}FluxClassMetatdataProperty`)
    ),
    quad(
      namedNode(`${ns1}FluxTypeShape`),
      namedNode(`${sh}property`),
      namedNode(`${ns1}LabelProperty`)
    ),
    quad(
      namedNode(`${ns1}FluxTypeShape`),
      namedNode(`${sh}property`),
      namedNode(`${ns1}CommentProperty`)
    ),
    quad(
      namedNode(`${ns1}FluxClassMetatdataProperty`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`)
    ),
    quad(
      namedNode(`${ns1}FluxClassMetatdataProperty`),
      namedNode(`${sh}path`),
      blankNodes[9]
    ),
    quad(
      namedNode(`${ns1}FluxClassMetatdataProperty`),
      namedNode(`${sh}name`),
      literal(`target`)
    ),
    quad(
      namedNode(`${ns1}FluxClassMetatdataProperty`),
      namedNode(`${sh}description`),
      literal(`The target of this shape`)
    ),
    quad(
      namedNode(`${ns1}FluxClassMetatdataProperty`),
      namedNode(`${sh}class`),
      namedNode(`${ns1}ClassShape`)
    ),
    quad(
      namedNode(`${ns1}FluxClassMetatdataProperty`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}FluxClassMetatdataProperty`),
      namedNode(`${sh}minCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}FluxClassMetatdataProperty`),
      namedNode(`${sh}message`),
      literal(`Target problem`)
    ),
    quad(
      namedNode(`${ns1}LabelProperty`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`)
    ),
    quad(
      namedNode(`${ns1}LabelProperty`),
      namedNode(`${sh}path`),
      namedNode(`${rdfs}label`)
    ),
    quad(
      namedNode(`${ns1}LabelProperty`),
      namedNode(`${sh}name`),
      literal(`label`)
    ),
    quad(
      namedNode(`${ns1}LabelProperty`),
      namedNode(`${sh}description`),
      literal(`the class label`)
    ),
    quad(
      namedNode(`${ns1}LabelProperty`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}LabelProperty`),
      namedNode(`${sh}minCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}LabelProperty`),
      namedNode(`${sh}message`),
      literal(`Invalid label`)
    ),
    quad(
      namedNode(`${ns1}LabelProperty`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}string`)
    ),
    quad(
      namedNode(`${ns1}CommentProperty`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`)
    ),
    quad(
      namedNode(`${ns1}CommentProperty`),
      namedNode(`${sh}path`),
      namedNode(`${rdfs}comment`)
    ),
    quad(
      namedNode(`${ns1}CommentProperty`),
      namedNode(`${sh}name`),
      literal(`comment`)
    ),
    quad(
      namedNode(`${ns1}CommentProperty`),
      namedNode(`${sh}description`),
      literal(`the class comment`)
    ),
    quad(
      namedNode(`${ns1}CommentProperty`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}CommentProperty`),
      namedNode(`${sh}minCount`),
      literal(`0`, namedNode(`${xsd}integer`))
    ),
    quad(
      namedNode(`${ns1}CommentProperty`),
      namedNode(`${sh}message`),
      literal(`Invalid comment`)
    ),
    quad(
      namedNode(`${ns1}CommentProperty`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}string`)
    ),
    quad(
      blankNodes[9],
      namedNode(`${sh}inversePath`),
      namedNode(`${sh}target`)
    ),
    quad(
      blankNodes[6],
      namedNode(`${sh}path`),
      namedNode(`${rdfs}label`)
    ),
    quad(
      blankNodes[6],
      namedNode(`${sh}name`),
      literal(`linkLabel`)
    ),
    quad(
      blankNodes[6],
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      blankNodes[6],
      namedNode(`${sh}minCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      blankNodes[6],
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}string`)
    ),
    quad(
      blankNodes[6],
      namedNode(`${sh}message:`),
      literal(`invlaid link label`)
    ),
    quad(
      blankNodes[7],
      namedNode(`${sh}path`),
      namedNode(`${sh}path`)
    ),
    quad(
      blankNodes[7],
      namedNode(`${sh}name`),
      literal(`path`)
    ),
    quad(
      blankNodes[7],
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      blankNodes[7],
      namedNode(`${sh}minCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      blankNodes[7],
      namedNode(`${sh}message:`),
      literal(`invalid path`)
    ),
    quad(
      blankNodes[7],
      namedNode(`${ns7}isPath:`),
      literal(`true`, namedNode(`${xsd}boolean`))
    ),
    quad(
      blankNodes[8],
      namedNode(`${sh}path`),
      namedNode(`${sh}class`)
    ),
    quad(
      blankNodes[8],
      namedNode(`${sh}name`),
      literal(`class`)
    ),
    quad(
      blankNodes[8],
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      blankNodes[8],
      namedNode(`${sh}minCount`),
      literal(`1`, namedNode(`${xsd}integer`))
    ),
    quad(
      blankNodes[8],
      namedNode(`${sh}message:`),
      literal(`invalid class propery`)
    ),

  ]
}
