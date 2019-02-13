'use strict';

const BabelAssertionVisitor = require('./babel-assertion-visitor');
const createPatternMatchers = require('../lib/create-pattern-matchers');
const isSpreadElement = (node) => node && node.type === 'SpreadElement';
const withoutMatcherAndIndex = (p) => {
  const res = { ...p };
  delete res.matcher;
  delete res.index;
  return res;
};

class BabelEspowerVisitor {
  constructor (babel, opts) {
    this.babel = babel;
    this.patternMatchers = createPatternMatchers(opts);
    this.options = Object.assign({}, opts, {
      patterns: this.patternMatchers.map(withoutMatcherAndIndex)
    });
  }
  enter (nodePath) {
    const currentNode = nodePath.node;
    const file = nodePath.hub.file;
    let assertionVisitor = file.get('espowerAssertionVisitor');
    if (assertionVisitor) {
      if (assertionVisitor.isGeneratedNode(nodePath) || assertionVisitor.toBeSkipped(nodePath)) {
        // skipping this Node
        // MEMO: exit() will not be called when skip() is called
        nodePath.skip();
        return;
      }
      if (!assertionVisitor.isCapturingArgument() && !this.isCalleeOfParentCallExpression(nodePath)) {
        // entering argument
        assertionVisitor.enterArgument(nodePath);
      }
    } else if (nodePath.isCallExpression()) {
      const patternMatcher = this.patternMatchers.find((pm) => pm.matcher.test(currentNode));
      if (patternMatcher) {
        // skip modifying argument if SpreadElement appears immediately beneath assert
        if (currentNode.arguments.some(isSpreadElement)) {
          nodePath.skip();
          return;
        }
        // entering assertion
        const espowerOptions = Object.assign({
          path: file.opts.filename, // or opts.sourceFileName?
          sourceMap: file.inputMap ? file.inputMap.toObject() : false
        }, this.options);
        assertionVisitor = new BabelAssertionVisitor(this.babel, patternMatcher, espowerOptions);
        assertionVisitor.enter(nodePath);
        file.set('espowerAssertionVisitor', assertionVisitor);
      }
    }
  }
  exit (nodePath) {
    const currentNode = nodePath.node;
    let resultTree = currentNode;
    const file = nodePath.hub.file;
    const assertionVisitor = file.get('espowerAssertionVisitor');
    if (!assertionVisitor) {
      return;
    }
    if (assertionVisitor.isLeavingAssertion(nodePath)) {
      // leaving assertion
      resultTree = assertionVisitor.leave(nodePath);
      file.set('espowerAssertionVisitor', null);
    }
    if (!assertionVisitor.isCapturingArgument()) {
      return;
    }
    if (assertionVisitor.isLeavingArgument(nodePath)) {
      // capturing whole argument on leaving argument
      resultTree = assertionVisitor.leaveArgument(nodePath);
    } else if (assertionVisitor.toBeCaptured(nodePath)) {
      // capturing intermediate Node
      resultTree = assertionVisitor.captureNode(nodePath);
    }
    if (resultTree !== currentNode) {
      nodePath.replaceWith(resultTree);
    }
  }
  isCalleeOfParentCallExpression ({ key, parent }) {
    const types = this.babel.types;
    return types.isCallExpression(parent) && key === 'callee';
  }
}

module.exports = BabelEspowerVisitor;
