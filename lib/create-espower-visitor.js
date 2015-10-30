'use strict';

var espower = require('espower');
var escallmatch = require('escallmatch');
var extend = require('xtend');
var find = require('array-find');
var espurify = require('espurify');
var deepEqual = require('deep-equal');

function enterNodePath (nodePath, pluginPass, matchers, esTreePath, options) {
    var treePath;
    var currentKey = nodePath.key;
    var currentNode = nodePath.node;
    var parentNode = nodePath.parent;
    var file = pluginPass.file;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    if (assertionVisitor) {
        if (isAlreadyInstrumented(currentNode, assertionVisitor) ||
            assertionVisitor.toBeSkipped(currentNode, parentNode, currentKey)) {
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
            assertionVisitor = new espower.AssertionVisitor(matcher, treePath, espowerOptions);
            assertionVisitor.enter(currentNode, parentNode);
            file.set('espowerAssertionVisitor', assertionVisitor);
        }
    }
}

function exitNodePath (nodePath, pluginPass, esTreePath, options) {
    var currentKey = nodePath.key;
    var currentNode = nodePath.node;
    var parentNode = nodePath.parent;
    var resultTree = currentNode;
    var isTreeModified = false;
    var file = pluginPass.file;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    if (!assertionVisitor) {
        return;
    }
    var treePath = esTreePath(nodePath);
    if (assertionVisitor.isLeavingAssertion(treePath)) {
        // leaving assertion
        assertionVisitor.leave(currentNode, parentNode);
        delete file.dynamicData.espowerAssertionVisitor;
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
        nodePath.skip(); // skipping doesn't work with Babel6?
    }
}

function astEqual (ast1, ast2) {
    return deepEqual(espurify(ast1), espurify(ast2));
}

function isAlreadyInstrumented (currentNode, assertionVisitor) {
    if (currentNode.type !== 'CallExpression') {
        return false;
    }
    if (currentNode.callee.type !== 'MemberExpression') {
        return false;
    }
    var prop = currentNode.callee.property;
    if (prop.type !== 'Identifier') {
        return false;
    }
    if (prop.name === '_expr' || prop.name === '_capt') {
        if (astEqual(currentNode.callee.object, assertionVisitor.powerAssertCalleeObject)) {
            return true;
        }
    }
    return false;
};

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
    var visitor = Object.keys(babel.types.VISITOR_KEYS).reduce(function (handlers, nodeType) {
        handlers[nodeType] = {
            enter: function (nodePath, pluginPass) {
                enterNodePath(nodePath, pluginPass, matchers, esTreePath, opts);
            },
            exit: function (nodePath, pluginPass) {
                exitNodePath(nodePath, pluginPass, esTreePath, opts);
            }
        };
        return handlers;
    }, {});
    return {
        visitor: visitor
    };
};
