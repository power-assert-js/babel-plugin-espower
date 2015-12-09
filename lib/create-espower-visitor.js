'use strict';

var espower = require('espower');
var escallmatch = require('escallmatch');
var estraverse = require('estraverse');
var extend = require('xtend');
var define = require('define-properties');
var find = require('array-find');
var BabelAssertionVisitor = require('./babel-assertion-visitor');
var babelTemplate = require('babel-template');
var helperTemplate = babelTemplate([
    '(function () {',
    '    var events = [];',
    '    function _capt (value, espath) {',
    '        events.push({value: value, espath: espath});',
    '        return value;',
    '    }',
    '    function _expr (value, args) {',
    '        var captured = events;',
    '        events = [];',
    '        var source = {',
    '            content: args.content,',
    '            filepath: args.filepath,',
    '            line: args.line',
    '        };',
    '        if (args.generator) {',
    '            source.generator = true;',
    '        }',
    '        if (args.async) {',
    '            source.async = true;',
    '        }',
    '        return {',
    '            powerAssertContext: {',
    '                value: value,',
    '                events: captured',
    '            },',
    '            source: source',
    '        };',
    '    }',
    '    return {',
    '        _capt: _capt,',
    '        _expr: _expr',
    '    };',
    '});'
].join('\n'));

function enterNodePath (nodePath, pluginPass, matchers, esTreePath, options, babel) {
    var currentKey = nodePath.key;
    var currentNode = nodePath.node;
    var parentNode = nodePath.parent;
    var file = pluginPass.file;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    var types = babel.types;
    if (assertionVisitor) {
        if (currentNode._generatedByEspower || assertionVisitor.toBeSkipped(currentNode, parentNode, currentKey)) {
            // skipping this Node
            // MEMO: exit() will not be called when skip() is called
            nodePath.skip();
            return;
        }
        if (!assertionVisitor.isCapturingArgument() && !isCalleeOfParentCallExpression(types, parentNode, currentKey)) {
            // entering argument
            assertionVisitor.enterArgument(nodePath);
            if (assertionVisitor.isCapturingArgument()) {
                var helperNameNode = file.get('powerAssertCaptureHelper');
                if (!helperNameNode) {
                    var programScope = nodePath.scope.getProgramParent();
                    helperNameNode = programScope.generateUidIdentifier('powerAssertRecorder');
                    define(helperNameNode, { _generatedByEspower: true });
                    file.set('powerAssertCaptureHelper', helperNameNode);
                    var helperFunctionNode = types.toExpression(helperTemplate());
                    estraverse.traverse(helperFunctionNode, {
                        keys: types.VISITOR_KEYS,
                        enter: function (currentNode) {
                            define(currentNode, { _generatedByEspower: true });
                        }
                    });
                    helperFunctionNode._compact = true;
                    programScope.push({ id: helperNameNode, init: helperFunctionNode });
                }
                var id = nodePath.scope.generateUidIdentifier('rec');
                define(id, { _generatedByEspower: true });
                var init = types.callExpression(helperNameNode, []);
                define(init, { _generatedByEspower: true });
                nodePath.scope.push({ id: id, init: init });
                assertionVisitor.powerAssertCalleeObject = id;
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
            var enclosingFunction = esTreePath.findEnclosingFunction(nodePath);
            assertionVisitor = new BabelAssertionVisitor(babel, matcher, nodePath, esTreePath, enclosingFunction, espowerOptions);
            assertionVisitor.enter(currentNode, parentNode);
            // mega hack: store original espath for each node
            estraverse.traverse(currentNode, {
                keys: types.VISITOR_KEYS,
                enter: function (currentNode, parentNode) {
                    if (this.path()) {
                        var espath = this.path().join('/');
                        define(currentNode, { _espowerEspath: espath });
                    }
                }
            });
            file.set('espowerAssertionVisitor', assertionVisitor);
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
    if (assertionVisitor.isLeavingAssertion(nodePath)) {
        // leaving assertion
        assertionVisitor.leave(currentNode, parentNode);
        file.delete('espowerAssertionVisitor');
        estraverse.traverse(currentNode, {
            keys: types.VISITOR_KEYS,
            enter: function (currentNode, parentNode) {
                delete currentNode._espowerEspath;
            }
        });
        return;
    }
    if (!assertionVisitor.isCapturingArgument()) {
        return;
    }
    if (assertionVisitor.toBeCaptured(currentNode, parentNode, currentKey)) {
        // capturing Node
        resultTree = assertionVisitor.captureNode(currentNode, nodePath);
        isTreeModified = true;
    }
    if (assertionVisitor.isLeavingArgument(nodePath) && assertionVisitor.isArgumentModified()) {
        // capturing whole argument on leaving argument
        resultTree = assertionVisitor.leaveArgument(resultTree);
        isTreeModified = true;
    }
    if (isTreeModified) {
        nodePath.replaceWith(resultTree);
    }
}

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
