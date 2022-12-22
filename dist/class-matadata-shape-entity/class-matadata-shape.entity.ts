import DatasetExt from 'rdf-ext/lib/Dataset';
import $rdf from 'rdf-ext';
import { NamedNode, BlankNode } from 'rdf-js';
import { fromRdf } from 'rdf-literal';

import { FluxMetadataModelEntity } from '../flux-metadata-model';

/**
 * ClassMatadataShapeEntity Class
 * Shacl Shape to identify flux class shapes
 */
export class ClassMatadataShapeEntity extends FluxMetadataModelEntity {
  
    constructor(node: NamedNode | BlankNode, dataGraph: DatasetExt) {
        super( $rdf.namedNode('https://ld.flux.zazuko.com/shapes/metadata/ClassMatadataShape'), node, dataGraph);
    }

	public get targetNode() : string {
		const node = this._getPropertyValueByName('targetNode');
		if(node.value) {
			const literal = fromRdf($rdf.literal(node.value, $rdf.namedNode('')));
			return literal as string;
		}
		throw `Invalid data: entity.targetNode is undefined}`;
	}

	public get icon() : string {
		const node = this._getPropertyValueByName('icon');
		if(node.value) {
			const literal = fromRdf($rdf.literal(node.value, $rdf.namedNode('http://www.w3.org/2001/XMLSchema#string')));
			return literal as string;
		}
		throw `Invalid data: entity.icon is undefined}`;
	}

	public get link() : FluxLink[] {
		const nodes = this._getPropertyValueByName('link');
		return nodes.map(node => {
			let n: NamedNode | BlankNode;
			if(node.term.termType === 'NamedNode') {
				n = $rdf.namedNode(node.value);
			} else {
				n = $rdf.blankNode(node.value);
			}
			return new FluxLink(n, this._dataGraph);
		});
	}

	public get colorIndex() : number {
		const node = this._getPropertyValueByName('colorIndex');
		if(node.value) {
			const literal = fromRdf($rdf.literal(node.value, $rdf.namedNode('http://www.w3.org/2001/XMLSchema#integer')));
			return literal as string;
		}
		throw `Invalid data: entity.colorIndex is undefined}`;
	}

	public get searchPriority() : number {
		const node = this._getPropertyValueByName('searchPriority');
		if(node.value) {
			const literal = fromRdf($rdf.literal(node.value, $rdf.namedNode('http://www.w3.org/2001/XMLSchema#integer')));
			return literal as string;
		}
		throw `Invalid data: entity.searchPriority is undefined}`;
	}

	public get labelPredicate() : string {
		const node = this._getPropertyValueByName('labelPredicate');
		if(node.value) {
			const literal = fromRdf($rdf.literal(node.value, $rdf.namedNode('')));
			return literal as string;
		}
		throw `Invalid data: entity.labelPredicate is undefined}`;
	}

	public get commentPredicate() : string {
		const node = this._getPropertyValueByName('commentPredicate');
		if(node.value) {
			const literal = fromRdf($rdf.literal(node.value, $rdf.namedNode('')));
			return literal as string;
		}
		throw `Invalid data: entity.commentPredicate is undefined}`;
	}
    
}
