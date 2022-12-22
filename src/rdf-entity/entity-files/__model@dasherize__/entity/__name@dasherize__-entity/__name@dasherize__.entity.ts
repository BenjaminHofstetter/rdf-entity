import DatasetExt from 'rdf-ext/lib/Dataset';
import $rdf from 'rdf-ext';
import { NamedNode, BlankNode } from 'rdf-js';
import { fromRdf } from 'rdf-literal';

import { <%= classify(modelName) %>Entity } from '../../<%= dasherize(modelName) %>';
<% imports.forEach(i => { %>
<%= i %>
<%}); %>
/**
 * <%= classify(name) %>Entity Class
 * <%= comment %>
 */
export class <%= classify(name) %>Entity extends <%= classify(modelName) %>Entity {
  
    constructor(node: NamedNode | BlankNode, dataGraph: DatasetExt) {
        super( $rdf.namedNode('<%= iri %>'), node, dataGraph);
    }
<% tsCode.forEach(tsCode => { %>
<%= `${tsCode.getter}` %>
<% }) %>    
}
