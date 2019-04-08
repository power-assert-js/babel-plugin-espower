'use strict';

var defaultOptions = require('./default-options');
var BabelEspowerVisitor = require('./babel-espower-visitor');

module.exports = function createEspowerVisitor (babel, options) {
    return {
        visitor: {
            Program: function (path) {
                var opts = Object.assign(defaultOptions(), {
                    astWhiteList: babel.types.BUILDER_KEYS,
                    visitorKeys: babel.types.VISITOR_KEYS,
                    sourceRoot: process.cwd()
                }, options);
                var espowerVisitor = new BabelEspowerVisitor(babel, opts);
                var innerVisitor = Object.keys(opts.visitorKeys).reduce(function (handlers, nodeType) {
                    handlers[nodeType] = {
                        enter: function (nodePath, pluginPass) {
                            espowerVisitor.enter(nodePath);
                        },
                        exit: function (nodePath, pluginPass) {
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
