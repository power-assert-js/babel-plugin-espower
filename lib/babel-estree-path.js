'use strict';

var find = require('array-find');

module.exports = function (babel) {
    var types = babel.types;

    function traverseUp (ancestors, traversalPath) {
        ancestors.push(traversalPath.key);
        if (Array.isArray(traversalPath.container)) { // traversing array via TraversalContext#visitMultiple
            var parentNode = traversalPath.parent;
            var currentTraversingKey = find(types.VISITOR_KEYS[parentNode.type], function (key) {
                return parentNode[key] === traversalPath.container; // searching for current key in parentNode
            });
            if (currentTraversingKey) { // ex. 'arguments' in CallExpression
                ancestors.push(currentTraversingKey);
            }
        }
        if (traversalPath.parentPath) {
            traverseUp(ancestors, traversalPath.parentPath);
        }
    }

    return function estreePath (traversalPath) {
        var ancestors = [];
        traverseUp(ancestors, traversalPath);
        ancestors.reverse();
        return ancestors;
    };
};
