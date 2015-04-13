'use strict';

function traverseUp (ancestors, traversalPath) {
    ancestors.push(traversalPath.key);
    if (Array.isArray(traversalPath.container)) { // traversing array via TraversalContext#visitMultiple
        var parentNode = traversalPath.parent;
        var candidateKeys = t.VISITOR_KEYS[parentNode.type].filter(function (key) {
            return parentNode[key] === traversalPath.container; // searching for current key in parentNode
        });
        if (candidateKeys.length === 1) {
            var currentTraversingKey = candidateKeys[0]; // ex. 'arguments' in CallExpression
            ancestors.push(currentTraversingKey);
        }
    }
    if (traversalPath.parentPath !== traversalPath) { // root node
        traverseUp(ancestors, traversalPath.parentPath);
    }
}

module.exports = function estreePath (traversalPath) {
    var ancestors = [];
    traverseUp(ancestors, traversalPath);
    ancestors.reverse();
    return ancestors;
};
