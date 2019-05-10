'use strict';

const define = require('./define-properties');
const createIsNodeToBeCaptured = require('./to-be-captured');
const { createNewArgumentRecorderNode, createNewAssertionMessageNode } = require('./create-node');

class ArgumentModification {
  constructor (babel, match, options, cloneAst, assertionNodePath, metadataIdent) {
    this.babel = babel;
    this.options = options;
    this.currentArgumentMatchResult = match;
    this.assertionNodePath = assertionNodePath;
    this.metadataIdent = metadataIdent;
    this.cloneAst = cloneAst;
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
    this.argumentRecorder = createNewArgumentRecorderNode({
      nodePath,
      types: this.babel.types,
      visitorKeys: this.options.visitorKeys,
      metadataIdent: this.metadataIdent,
      cloneAst: this.cloneAst,
      calleeNode: this.assertionNodePath.node.callee,
      matchIndex: this.currentArgumentMatchResult.index
    });
  }

  leave (nodePath) {
    const currentNode = nodePath.node;
    const shouldCapture = this.isArgumentModified() || this.toBeCaptured(nodePath);
    const resultNode = shouldCapture ? this.captureArgument(nodePath) : currentNode;
    if (this.currentArgumentMatchResult.name === 'message' && this.currentArgumentMatchResult.kind === 'optional') {
      this.messageUpdated = true;
      // enclose it in AssertionMessage
      return createNewAssertionMessageNode({
        nodePath,
        types: this.babel.types,
        visitorKeys: this.options.visitorKeys,
        metadataIdent: this.metadataIdent,
        cloneAst: this.cloneAst,
        originalMessageNode: resultNode,
        matchIndex: this.currentArgumentMatchResult.index
      });
    } else {
      return resultNode;
    }
  }

  captureNode (nodePath) {
    return this.insertRecorder(nodePath, '_tap');
  }

  captureArgument (nodePath) {
    return this.insertRecorder(nodePath, '_rec');
  }

  insertRecorder (nodePath, methodName) {
    const types = this.babel.types;
    const receiver = this.argumentRecorder;
    const currentNode = nodePath.node;
    const relativeEsPath = currentNode._espowerEspath;
    const newNode = types.callExpression(
      types.memberExpression(receiver, types.identifier(methodName)),
      [
        currentNode,
        types.valueToNode(relativeEsPath)
      ]
    );
    define(newNode, { _generatedByEspower: true });
    this.argumentModified = true;
    return newNode;
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
