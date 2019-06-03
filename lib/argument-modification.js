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
    const shouldCaptureValue = this.toBeCaptured(nodePath);
    const pathToBeCaptured = shouldCaptureValue ? currentNode._espowerEspath : null;
    const shouldCaptureArgument = this.isArgumentModified() || shouldCaptureValue;
    const resultNode = shouldCaptureArgument ? this.captureArgument(currentNode, pathToBeCaptured) : currentNode;
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
    const currentNode = nodePath.node;
    const espath = currentNode._espowerEspath;
    return this.insertRecorder(currentNode, espath, '_tap');
  }

  captureArgument (currentNode, espath) {
    return this.insertRecorder(currentNode, espath, '_rec');
  }

  insertRecorder (currentNode, espath, methodName) {
    const receiver = this.argumentRecorder;
    const types = this.babel.types;
    const args = [
      currentNode
    ];
    if (espath) {
      args.push(types.valueToNode(espath));
    }
    const newNode = types.callExpression(
      types.memberExpression(receiver, types.identifier(methodName)),
      args
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
