import DatasetExt from 'rdf-ext/lib/Dataset';
import $rdf from 'rdf-ext';
import { NamedNode, BlankNode } from 'rdf-js';
import { fromRdf } from 'rdf-literal';

import { FluxMetadataModelEntity } from '../flux-metadata-model';

/**
 * FluxLinkEntity Class
 * A descrition of a Link in Flux
 */
export class FluxLinkEntity extends FluxMetadataModelEntity {
  
    constructor(node: NamedNode | BlankNode, dataGraph: DatasetExt) {
        super( $rdf.namedNode('https://ld.flux.zazuko.com/shapes/metadata/FluxLinkShape'), node, dataGraph);
    }

	public get linkLabel() : string {
		const node = this._getPropertyValueByName('linkLabel');
		if(node.value) {
			const literal = fromRdf($rdf.literal(node.value, $rdf.namedNode('http://www.w3.org/2001/XMLSchema#string')));
			return literal as string;
		}
		throw `Invalid data: entity.linkLabel is undefined}`;
	}

	public get path() : string {
		const node = this._getPropertyValueByName('path');
		if(node.value) {
			const literal = fromRdf($rdf.literal(node.value, $rdf.namedNode('')));
			return literal as string;
		}
		throw `Invalid data: entity.path is undefined}`;
	}

	public get class() : string {
		const node = this._getPropertyValueByName('class');
		if(node.value) {
			const literal = fromRdf($rdf.literal(node.value, $rdf.namedNode('')));
			return literal as string;
		}
		throw `Invalid data: entity.class is undefined}`;
	}
    
}
