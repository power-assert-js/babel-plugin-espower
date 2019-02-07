'use strict';

const fs = require('fs');
const estraverse = require('estraverse');
const babelTemplate = require('@babel/core').template;
const loadTemplate = (filepath) => {
  const templateLines = fs.readFileSync(require.resolve(filepath), 'utf8').split('\n');
  const funcBody = templateLines.slice(2, templateLines.length - 2).join('\n'); // extract template body
  const ast = babelTemplate.ast(`(function () { ${funcBody} })()`);
  return (purify) => purify(ast);
};
const argumentRecorderTemplate = loadTemplate('./argument-recorder.js');
const assertionMessageTemplate = loadTemplate('./assertion-message.js');
const define = require('./define-properties');
const createIsNodeToBeCaptured = require('./to-be-captured');

class ArgumentModification {
  constructor (babel, match, options, purifyAst, assertionNodePath, metadataIdent) {
    this.babel = babel;
    this.options = options;
    this.currentArgumentMatchResult = match;
    this.assertionNodePath = assertionNodePath;
    this.metadataIdent = metadataIdent;
    this.purifyAst = purifyAst;
    this.currentArgumentNodePath = null;
    this.argumentModified = false;
    this.messageUpdated = false;
    this.isNodeToBeCaptured = createIsNodeToBeCaptured(babel.types);
  }

  toBeCaptured (nodePath) {
    return this.isNodeToBeCaptured(nodePath);
  }

  isLeaving (nodePath) {
    return this.currentArgumentNodePath === nodePath;
  }

  isCapturing () {
    return true;
  }

  isMessageUpdated () {
    return !!this.messageUpdated;
  }

  isArgumentModified () {
    return !!this.argumentModified;
  }

  enter (nodePath) {
    // entering target argument
    this.currentArgumentNodePath = nodePath;
    // create recorder per argument
    this.argumentRecorder = this.createNewArgumentRecorder(nodePath);
  }

  leave (nodePath) {
    const currentNode = nodePath.node;
    const shouldCapture = this.argumentModified || this.toBeCaptured(nodePath);
    const resultNode = shouldCapture ? this.captureArgument(nodePath) : currentNode;
    if (this.currentArgumentMatchResult.name === 'message' && this.currentArgumentMatchResult.kind === 'optional') {
      this.messageUpdated = true;
      // enclose it in AssertionMessage
      return this.createNewAssertionMessage(nodePath, resultNode, this.currentArgumentMatchResult.index);
    } else {
      return resultNode;
    }
  }

  captureNode (nodePath) {
    const currentNode = nodePath.node;
    const t = this.babel.types;
    const relativeEsPath = currentNode._espowerEspath;
    const newNode = t.callExpression(
      t.memberExpression(this.argumentRecorder, t.identifier('_tap')),
      [
        currentNode,
        t.valueToNode(relativeEsPath)
      ]);
    define(newNode, { _generatedByEspower: true });
    this.argumentModified = true;
    return newNode;
  }

  captureArgument (nodePath) {
    const currentNode = nodePath.node;
    const relativeEsPath = currentNode._espowerEspath;
    const t = this.babel.types;
    const newNode = t.callExpression(
      t.memberExpression(this.argumentRecorder, t.identifier('_rec')),
      [
        currentNode,
        t.valueToNode(relativeEsPath)
      ]
    );
    define(newNode, { _generatedByEspower: true });
    this.argumentModified = true;
    return newNode;
  }

  createNewArgumentRecorder (nodePath) {
    const types = this.babel.types;
    const purifyAst = this.purifyAst;
    const argRecNameNode = this.getOrCreateNode(nodePath, 'ArgumentRecorder', () => {
      return types.toExpression(argumentRecorderTemplate(purifyAst));
    });
    const recorderIdent = nodePath.scope.generateUidIdentifier('ag');
    define(recorderIdent, { _generatedByEspower: true });
    const init = types.newExpression(argRecNameNode, [
      this.assertionNodePath.node.callee,
      this.metadataIdent,
      types.valueToNode(this.currentArgumentMatchResult.index)
    ]);
    define(init, { _generatedByEspower: true });
    nodePath.scope.push({ id: recorderIdent, init: init });
    return recorderIdent;
  }

  createNewAssertionMessage (nodePath, originalMessageNode, matchIndex) {
    const _this = this;
    const t = this.babel.types;
    const assertionMessageNameNode = this.getOrCreateNode(nodePath, 'AssertionMessage', () => {
      return t.toExpression(assertionMessageTemplate(_this.purifyAst));
    });
    const newArgs = [
      this.metadataIdent,
      t.valueToNode(matchIndex)
    ];
    if (originalMessageNode) {
      newArgs.push(originalMessageNode);
    }
    const newNode = t.newExpression(assertionMessageNameNode, newArgs);
    define(newNode, { _generatedByEspower: true });
    return newNode;
  }

  getOrCreateNode (nodePath, keyName, generateNode) {
    const file = nodePath.hub.file;
    // helperNameNode = file.addImport('power-assert-runtime/recorder', 'default', 'recorder');
    return file.get(keyName) || this.createNode(nodePath, keyName, generateNode);
  }

  createNode (nodePath, keyName, generateNode) {
    const file = nodePath.hub.file;
    const programScope = nodePath.scope.getProgramParent();
    const ident = programScope.generateUidIdentifier(keyName);
    define(ident, { _generatedByEspower: true });
    file.set(keyName, ident);
    const generatedNode = generateNode();
    const visitorKeys = this.options.visitorKeys;
    estraverse.traverse(generatedNode, {
      keys: visitorKeys,
      enter: function (node) {
        define(node, { _generatedByEspower: true });
      }
    });
    generatedNode._compact = true;
    programScope.push({ id: ident, init: generatedNode });
    return ident;
  }
}

class NoModification {
  enter (nodePath) {
    this.currentArgumentNodePath = nodePath;
  }
  leave (nodePath) {
    return nodePath;
  }
  isLeaving (nodePath) {
    return this.currentArgumentNodePath === nodePath;
  }
  isCapturing () {
    return false;
  }
  isMessageUpdated () {
    return false;
  }
  isArgumentModified () {
    return false;
  }
}

module.exports = {
  ArgumentModification,
  NoModification
};
