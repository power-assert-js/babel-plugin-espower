'use strict';

const defaultOptions = require('./default-options');
const BabelEspowerVisitor = require('./babel-espower-visitor');
const createEspowerVisitor = (babel, options) => {
    return {
        visitor: {
            Program (path) {
                const opts = Object.assign(defaultOptions(), {
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
                path.traverse(innerVisitor);
            }
        }
    };
};
module.exports = createEspowerVisitor;
