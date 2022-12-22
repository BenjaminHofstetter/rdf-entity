import { dasherize } from '@angular-devkit/core/src/utils/strings';
import { Rule, SchematicContext, Tree, url, apply, template, strings, mergeWith } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function createRdfEntity(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url(`./entity-files/`);  // get hold of our template folders & files
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ...options,    // parametrize our template sources
        ...strings      // apply accepts source and array of rules
      })              // "template" rule processes templates / we pass in options and helper strings / and we get parametrized template source
    ]);
    return mergeWith(sourceParametrizedTemplates);
    // we merge our template into the tree mergeWith() returns a rule so it can be called with tree and
    // return mergeWith(sourceParametrizedTemplates)(tree,
  };
}
