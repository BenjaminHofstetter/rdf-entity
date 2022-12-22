import { Component, OnDestroy, OnInit } from '@angular/core';

import { NamedNode, BlankNode } from 'rdf-js';
import { EntityDescriptor } from '../entity-registry.class';

import DatasetExt from 'rdf-ext/lib/Dataset';

/**
 * Project Class
 * 
 */
export class Project Entity {
    static __descriptor: EntityDescriptor = {
        shapeGraph,
        shapeNode,
        factory: xrmMappingNodeEntityFactory
    }
    constructor(public data: DatasetExt, public iri: NamedNode | BlankNode) { }
}


export function  project EntityFactory(data: DatasetExt, iri: NamedNode | BlankNode): Project Entity {
    return new XrmMappingNode(data, iri) as unknown as IXrmMappingNodeEntity;
}