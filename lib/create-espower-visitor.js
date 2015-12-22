'use strict';

var espower = require('espower');
var extend = require('xtend');
var BabelEspowerVisitor = require('./babel-espower-visitor');

module.exports = function createEspowerVisitor (babel, options) {
    var opts = extend(espower.defaultOptions(), {
        astWhiteList: babel.types.BUILDER_KEYS,
        visitorKeys: babel.types.VISITOR_KEYS,
        sourceRoot: process.cwd()
    }, options);
    var espowerVisitor = new BabelEspowerVisitor(babel, opts);
    var innerVisitor = Object.keys(babel.types.VISITOR_KEYS).reduce(function (handlers, nodeType) {
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
    return {
        visitor: {
            Program: function (path, state) {
                path.traverse(innerVisitor, state);
            }
        }
    };
};
