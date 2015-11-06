'use strict';

var find = require('array-find');

module.exports = function (babel) {
    var types = babel.types;

    function traverseUp (ancestors, nodePath) {
        ancestors.push(nodePath.key);
        if (Array.isArray(nodePath.container)) { // traversing array via TraversalContext#visitMultiple
            var parentNode = nodePath.parent;
            var currentTraversingKey = find(types.VISITOR_KEYS[parentNode.type], function (key) {
                return parentNode[key] === nodePath.container; // searching for current key in parentNode
            });
            if (currentTraversingKey) { // ex. 'arguments' in CallExpression
                ancestors.push(currentTraversingKey);
            }
        }
        if (nodePath.parentPath) {
            traverseUp(ancestors, nodePath.parentPath);
        }
    }

    function findEnclosingFunction(nodePath) {
        if (!nodePath) {
            return null;
        }
        if (babel.types.isFunction(nodePath.node)) {
            return nodePath.node;
        }
        return findEnclosingFunction(nodePath.parentPath);
    }

    function estreePath (nodePath) {
        var ancestors = [];
        traverseUp(ancestors, nodePath);
        ancestors.reverse();
        return ancestors;
    }

    estreePath.findEnclosingFunction = findEnclosingFunction;

    return estreePath;
};
