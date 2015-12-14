'use strict';

var espower = require('espower');
var escallmatch = require('escallmatch');
var estraverse = require('estraverse');
var extend = require('xtend');
var define = require('define-properties');
var find = require('array-find');
var BabelAssertionVisitor = require('./babel-assertion-visitor');
var helperCode = [
    '(function () {',
    '    var captured = [];',
    '    function _capt (value, espath) {',
    '        captured.push({value: value, espath: espath});',
    '        return value;',
    '    }',
    '    function _expr (value, args) {',
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
].join('\n');


function BabelEspowerVisitor (babel, opts) {
    this.babel = babel;
    this.esTreePath = require('./babel-estree-path')(babel);
    this.matchers = opts.patterns.map(function (pattern) { return escallmatch(pattern, opts); });
    this.options = opts;
    var babelTemplate = babel.template;
    this.helperTemplate = babelTemplate(helperCode);
}

BabelEspowerVisitor.prototype.enter = function (nodePath) {
    var currentKey = nodePath.key;
    var currentNode = nodePath.node;
    var parentNode = nodePath.parent;
    var file = nodePath.hub.file;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    var types = this.babel.types;
    if (assertionVisitor) {
        if (currentNode._generatedByEspower || assertionVisitor.toBeSkipped(currentNode, parentNode, currentKey)) {
            // skipping this Node
            // MEMO: exit() will not be called when skip() is called
            nodePath.skip();
            return;
        }
        if (!assertionVisitor.isCapturingArgument() && !this.isCalleeOfParentCallExpression(parentNode, currentKey)) {
            // entering argument
            assertionVisitor.enterArgument(nodePath);
            if (assertionVisitor.isCapturingArgument()) {
                assertionVisitor.powerAssertCalleeObject = this.createNewCapturer(nodePath);
            }
        }
    } else if (types.isCallExpression(currentNode)) {
        var matcher = find(this.matchers, function (m) { return m.test(currentNode); });
        if (matcher) {
            // entering assertion
            var espowerOptions = extend(espower.defaultOptions(), {
                path: file.opts.filename, // or opts.sourceFileName?
                sourceMap: file.opts.inputSourceMap
            }, this.options);
            var enclosingFunction = this.esTreePath.findEnclosingFunction(nodePath);
            assertionVisitor = new BabelAssertionVisitor(this.babel, matcher, nodePath, this.esTreePath, enclosingFunction, espowerOptions);
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
};

BabelEspowerVisitor.prototype.exit = function (nodePath) {
    var currentKey = nodePath.key;
    var currentNode = nodePath.node;
    var parentNode = nodePath.parent;
    var resultTree = currentNode;
    var isTreeModified = false;
    var file = nodePath.hub.file;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    var types = this.babel.types;
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
};

BabelEspowerVisitor.prototype.createNewCapturer = function (nodePath) {
    var types = this.babel.types;
    var helperNameNode = this.getCaptureHelperNameNode(nodePath);
    var capturerIdent = nodePath.scope.generateUidIdentifier('rec');
    define(capturerIdent, {_generatedByEspower: true});
    var init = types.callExpression(helperNameNode, []);
    define(init, {_generatedByEspower: true});
    nodePath.scope.push({id: capturerIdent, init: init});
    return capturerIdent;
};

BabelEspowerVisitor.prototype.getCaptureHelperNameNode = function (nodePath) {
    var file = nodePath.hub.file;
    var helperNameNode = file.get('powerAssertCaptureHelper');
    if (!helperNameNode) {
        helperNameNode = this.createHelperNameNode(nodePath);
    }
    return helperNameNode;
};

BabelEspowerVisitor.prototype.createHelperNameNode = function (nodePath) {
    var types = this.babel.types;
    var file = nodePath.hub.file;
    var programScope = nodePath.scope.getProgramParent();
    var helperNameNode = programScope.generateUidIdentifier('powerAssertRecorder');
    define(helperNameNode, {_generatedByEspower: true});
    file.set('powerAssertCaptureHelper', helperNameNode);
    var helperFunctionNode = types.toExpression(this.helperTemplate());
    estraverse.traverse(helperFunctionNode, {
        keys: types.VISITOR_KEYS,
        enter: function (currentNode) {
            define(currentNode, {_generatedByEspower: true});
        }
    });
    helperFunctionNode._compact = true;
    programScope.push({id: helperNameNode, init: helperFunctionNode});
    return helperNameNode;
};

BabelEspowerVisitor.prototype.isCalleeOfParentCallExpression = function (parentNode, currentKey) {
    var types = this.babel.types;
    return types.isCallExpression(parentNode) && currentKey === 'callee';
};


module.exports = function createEspowerVisitor (babel, options) {
    var opts = extend(espower.defaultOptions(), {
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
