'use strict';

var espower = require('espower');
var escallmatch = require('escallmatch');
var extend = require('xtend');
var find = require('array-find');
var espurify = require('espurify');
var deepEqual = require('deep-equal');
var BabelAssertionVisitor = require('./babel-assertion-visitor');

function enterNodePath (nodePath, pluginPass, matchers, esTreePath, options, babel) {
    var treePath;
    var currentKey = nodePath.key;
    var currentNode = nodePath.node;
    var parentNode = nodePath.parent;
    var file = pluginPass.file;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    var types = babel.types;
    if (assertionVisitor) {
        if (isAlreadyInstrumented(types, currentNode, assertionVisitor)) {
            // console.log('already instrumented: ' + esTreePath(nodePath).join('/'));
            // MEMO: exit() will not be called when skip() is called
            nodePath.skip();
            return;
        }
        if (assertionVisitor.toBeSkipped(currentNode, parentNode, currentKey)) {
            // console.log('start skipping node: ' + esTreePath(nodePath).join('/'));
            // MEMO: exit() will not be called when skip() is called
            nodePath.skip();
            return;
        }
        if (!assertionVisitor.isCapturingArgument()) {
            if (!isCalleeOfParentCallExpression(types, parentNode, currentKey)) {
                // entering argument
                treePath = esTreePath(nodePath);
                assertionVisitor.enterArgument(currentNode, parentNode, treePath);
                // console.log('entering argument: ' + esTreePath(nodePath).join('/'));
            }
        }
    } else if (types.isCallExpression(currentNode)) {
        var matcher = find(matchers, function (m) { return m.test(currentNode); });
        if (matcher) {
            // entering assertion
            var espowerOptions = extend(espower.defaultOptions(), {
                path: file.opts.filename, // or opts.sourceFileName?
                sourceMap: file.opts.inputSourceMap
            }, options);
            treePath = esTreePath(nodePath);
            var enclosingFunction = esTreePath.findEnclosingFunction(nodePath);
            assertionVisitor = new BabelAssertionVisitor(babel, matcher, treePath, enclosingFunction, espowerOptions);
            assertionVisitor.enter(currentNode, parentNode);
            file.set('espowerAssertionVisitor', assertionVisitor);
            // console.log('entering assertion: ' + esTreePath(nodePath).join('/'));
        }
    }
}

function exitNodePath (nodePath, pluginPass, esTreePath, options, babel) {
    var currentKey = nodePath.key;
    var currentNode = nodePath.node;
    var parentNode = nodePath.parent;
    var resultTree = currentNode;
    var isTreeModified = false;
    var file = pluginPass.file;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    var types = babel.types;
    if (!assertionVisitor) {
        return;
    }
    var treePath = esTreePath(nodePath);
    if (assertionVisitor.isLeavingAssertion(treePath)) {
        // leaving assertion
        assertionVisitor.leave(currentNode, parentNode);
        file.delete('espowerAssertionVisitor');
        // console.log('leaving assertion: ' + esTreePath(nodePath).join('/'));
        return;
    }
    if (!assertionVisitor.isCapturingArgument()) {
        // console.log('not capturing: ' + esTreePath(nodePath).join('/'));
        return;
    }
    if (assertionVisitor.toBeCaptured(currentNode, parentNode, currentKey)) {
        // capturing Node
        resultTree = assertionVisitor.captureNode(currentNode, treePath);
        isTreeModified = true;
        // console.log('capturing node: ' + esTreePath(nodePath).join('/'));
    }
    if (assertionVisitor.isLeavingArgument(treePath)) {
        // capturing whole argument
        resultTree = assertionVisitor.leaveArgument(resultTree);
        isTreeModified = true;
        // console.log('capturing argument: ' + esTreePath(nodePath).join('/'));
    }
    if (isTreeModified) {
        // console.log('modifying tree: ' + esTreePath(nodePath).join('/'));
        nodePath.replaceWith(resultTree);
        nodePath.skip(); // skipping doesn't work with Babel6?
    }
}

function astEqual (ast1, ast2) {
    return deepEqual(espurify(ast1), espurify(ast2));
}

function isAlreadyInstrumented (types, currentNode, assertionVisitor) {
    if (!types.isCallExpression(currentNode)) {
        return false;
    }
    if (!types.isMemberExpression(currentNode.callee)) {
        return false;
    }
    var prop = currentNode.callee.property;
    if (!types.isIdentifier(prop)) {
        return false;
    }
    if (prop.name === '_expr' || prop.name === '_capt') {
        if (astEqual(currentNode.callee.object, assertionVisitor.powerAssertCalleeObject)) {
            return true;
        }
    }
    return false;
};

function isCalleeOfParentCallExpression(types, parentNode, currentKey) {
    return types.isCallExpression(parentNode) && currentKey === 'callee';
}

module.exports = function createEspowerVisitor (babel, options) {
    var esTreePath = require('./babel-estree-path')(babel);
    var opts = extend(espower.defaultOptions(), {
        visitorKeys: babel.types.VISITOR_KEYS,
        sourceRoot: process.cwd()
    }, options);
    var matchers = opts.patterns.map(function (pattern) { return escallmatch(pattern, opts); });
    var visitor = Object.keys(babel.types.VISITOR_KEYS).reduce(function (handlers, nodeType) {
        handlers[nodeType] = {
            enter: function (nodePath, pluginPass) {
                enterNodePath(nodePath, pluginPass, matchers, esTreePath, opts, babel);
            },
            exit: function (nodePath, pluginPass) {
                exitNodePath(nodePath, pluginPass, esTreePath, opts, babel);
            }
        };
        return handlers;
    }, {});
    return {
        visitor: {
            Program: function (path, state) {
                path.traverse(visitor, state);
            }
        }
    };
};
