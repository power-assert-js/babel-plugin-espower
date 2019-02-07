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
const assertionMessageTemplate = loadTemplate('./assertion-message.js');
const define = require('./define-properties');

const createNewAssertionMessageNode = ({ nodePath, types, visitorKeys, metadataIdent, cloneAst, originalMessageNode = null, matchIndex = -1 }) => {
  const keyName = 'AssertionMessage';
  const generateNode = () => {
    return types.toExpression(assertionMessageTemplate(cloneAst));
  };
  const assertionMessageNameNode = getOrCreateNode({ nodePath, keyName, generateNode, visitorKeys });
  const newArgs = [
    metadataIdent,
    types.valueToNode(matchIndex)
  ];
  if (originalMessageNode) {
    newArgs.push(originalMessageNode);
  }
  const newNode = types.newExpression(assertionMessageNameNode, newArgs);
  define(newNode, { _generatedByEspower: true });
  return newNode;
};

const getOrCreateNode = ({ nodePath, keyName, generateNode, visitorKeys }) => {
  const file = nodePath.hub.file;
  // helperNameNode = file.addImport('power-assert-runtime/recorder', 'default', 'recorder');
  return file.get(keyName) || createNode({ nodePath, keyName, generateNode, visitorKeys });
};

const createNode = ({ nodePath, keyName, generateNode, visitorKeys }) => {
  const file = nodePath.hub.file;
  const programScope = nodePath.scope.getProgramParent();
  const ident = programScope.generateUidIdentifier(keyName);
  define(ident, { _generatedByEspower: true });
  file.set(keyName, ident);
  const generatedNode = generateNode();
  estraverse.traverse(generatedNode, {
    keys: visitorKeys,
    enter: function (node) {
      define(node, { _generatedByEspower: true });
    }
  });
  generatedNode._compact = true;
  programScope.push({ id: ident, init: generatedNode });
  return ident;
};

module.exports = {
  createNewAssertionMessageNode,
  getOrCreateNode
};
