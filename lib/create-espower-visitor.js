'use strict';

var espower = require('espower');
var escallmatch = require('escallmatch');
var extend = require('xtend');
var find = require('array-find');

function enterNodePath (nodePath, currentNode, parentNode, scope, file, matchers, esTreePath, options) {
    var treePath;
    var currentKey = nodePath.key;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    if (assertionVisitor) {
        if (assertionVisitor.toBeSkipped(currentNode, parentNode, currentKey)) {
            // skipping this Node
            // MEMO: exit() will not be called when skip() is called
            nodePath.skip();
            return;
        }
        if (!assertionVisitor.isCapturingArgument() && !isCalleeOfParentCallExpression(parentNode, currentKey)) {
            // entering argument
            treePath = esTreePath(nodePath);
            assertionVisitor.enterArgument(currentNode, parentNode, treePath);
        }
    } else if (currentNode.type === 'CallExpression') {
        var matcher = find(matchers, function (m) { return m.test(currentNode); });
        if (matcher) {
            // entering assertion
            var espowerOptions = extend(espower.defaultOptions(), {
                path: file.opts.filename, // or opts.sourceFileName?
                sourceMap: file.opts.inputSourceMap
            }, options);
            treePath = esTreePath(nodePath);
            var enclosingFunction = esTreePath.findEnclosingFunction(nodePath);
            assertionVisitor = new espower.AssertionVisitor(matcher, treePath, enclosingFunction, espowerOptions);
            assertionVisitor.enter(currentNode, parentNode);
            file.set('espowerAssertionVisitor', assertionVisitor);
        }
    }
}

function exitNodePath (nodePath, currentNode, parentNode, scope, file, esTreePath, options) {
    var currentKey = nodePath.key;
    var resultTree = currentNode;
    var isTreeModified = false;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    if (!assertionVisitor) {
        return;
    }
    var treePath = esTreePath(nodePath);
    if (assertionVisitor.isLeavingAssertion(treePath)) {
        // leaving assertion
        assertionVisitor.leave(currentNode, parentNode);
        delete file.data.espowerAssertionVisitor;
        return;
    }
    if (!assertionVisitor.isCapturingArgument()) {
        return;
    }
    if (assertionVisitor.toBeCaptured(currentNode, parentNode, currentKey)) {
        // capturing Node
        resultTree = assertionVisitor.captureNode(currentNode, treePath);
        isTreeModified = true;
    }
    if (assertionVisitor.isLeavingArgument(treePath)) {
        // capturing whole argument
        resultTree = assertionVisitor.leaveArgument(resultTree);
        isTreeModified = true;
    }
    if (isTreeModified) {
        nodePath.replaceWith(resultTree);
        nodePath.skip();
    }
}

function isCalleeOfParentCallExpression(parentNode, currentKey) {
    return parentNode.type === 'CallExpression' && currentKey === 'callee';
}

module.exports = function createEspowerVisitor (babel, options) {
    var esTreePath = require('./babel-estree-path')(babel);
    var opts = extend(espower.defaultOptions(), {
        visitorKeys: babel.types.VISITOR_KEYS,
        sourceRoot: process.cwd()
    }, options);
    var matchers = opts.patterns.map(function (pattern) { return escallmatch(pattern, opts); });
    return Object.keys(babel.types.VISITOR_KEYS).reduce(function (handlers, nodeType) {
        handlers[nodeType] = {
            enter: function (currentNode, parentNode, scope, file) {
                enterNodePath(this, currentNode, parentNode, scope, file, matchers, esTreePath, opts);
            },
            exit: function (currentNode, parentNode, scope, file) {
                exitNodePath(this, currentNode, parentNode, scope, file, esTreePath, opts);
            }
        };
        return handlers;
    }, {});
};
