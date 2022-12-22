import DatasetExt from 'rdf-ext/lib/Dataset';
import $rdf from 'rdf-ext';
import { NamedNode, BlankNode } from 'rdf-js';
import { fromRdf } from 'rdf-literal';

import { FluxMetadataModelEntity } from '../flux-metadata-model';

/**
 * FluxTypeEntity Class
 * This matches classes that are displayed in flux
 */
export class FluxTypeEntity extends FluxMetadataModelEntity {
  
    constructor(node: NamedNode | BlankNode, dataGraph: DatasetExt) {
        super( $rdf.namedNode('https://ld.flux.zazuko.com/shapes/metadata/FluxTypeShape'), node, dataGraph);
    }

	public get target() : string {
		const node = this._getPropertyValueByName('target');
		if(node.value) {
			const literal = fromRdf($rdf.literal(node.value, $rdf.namedNode('')));
			return literal as string;
		}
		throw `Invalid data: entity.target is undefined}`;
	}

	public get label() : string {
		const node = this._getPropertyValueByName('label');
		if(node.value) {
			const literal = fromRdf($rdf.literal(node.value, $rdf.namedNode('http://www.w3.org/2001/XMLSchema#string')));
			return literal as string;
		}
		throw `Invalid data: entity.label is undefined}`;
	}

	public get comment() : string {
		const node = this._getPropertyValueByName('comment');
		if(node.value) {
			const literal = fromRdf($rdf.literal(node.value, $rdf.namedNode('http://www.w3.org/2001/XMLSchema#string')));
			return literal as string;
		}
		throw `Invalid data: entity.comment is undefined}`;
	}
    
}
