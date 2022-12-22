
import $rdf from 'rdf-ext';
import DatasetExt from 'rdf-ext/lib/Dataset';

import graphQuads from './graph';

export class Foo {
    private _dataset = new DatasetExt();

    constructor() {
        this._dataset.addAll(graphQuads($rdf));
    }

    get dataset(): DatasetExt {
        return this._dataset;
    }

}