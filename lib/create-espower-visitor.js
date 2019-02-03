'use strict';

const defaultOptions = require('./default-options');
const BabelEspowerVisitor = require('./babel-espower-visitor');
const hasSyntaxPlugin = (pluginPass) => 0 < pluginPass.file.opts.parserOpts.plugins.length;

const createEspowerVisitor = (babel, options) => {
  return {
    visitor: {
      Program (nodePath, pluginPass) {
        const opts = Object.assign(defaultOptions(), {
          embedAst: hasSyntaxPlugin(pluginPass),
          astWhiteList: babel.types.BUILDER_KEYS,
          visitorKeys: babel.types.VISITOR_KEYS,
          sourceRoot: process.cwd()
        }, options);
        const espowerVisitor = new BabelEspowerVisitor(babel, opts);
        const innerVisitor = Object.keys(opts.visitorKeys).reduce((handlers, nodeType) => {
          handlers[nodeType] = {
            enter (nodePath, pluginPass) {
              espowerVisitor.enter(nodePath);
            },
            exit (nodePath, pluginPass) {
              espowerVisitor.exit(nodePath);
            }
          };
          return handlers;
        }, {});
        nodePath.traverse(innerVisitor);
      }
    }
  };
};
module.exports = createEspowerVisitor;
