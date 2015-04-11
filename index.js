var Transformer = require('babel-core').Transformer;
var t = require('babel-core').types;

function collectPath (stack, traversalPath) {
    stack.push(traversalPath.key);
    if (traversalPath.parentPath !== traversalPath) { // root node
        collectPath(stack, traversalPath.parentPath);
    }
}

function esPath (traversalPath) {
    var stack = [];
    collectPath(stack, traversalPath);
    stack.reverse();
    return stack;
}

module.exports = new Transformer('babel-plugin-espower', {
    MemberExpression: function (node, parent, scope, file) {
        var paths = esPath(this);
        console.log(paths.join('/'));
    },
    FunctionDeclaration: function (node, parent, scope, file) {
        var id = node.id;
        node.type = 'FunctionExpression';
        node.id   = null;

        return t.variableDeclaration('var', [
            t.variableDeclarator(id, node)
        ]);
    }
});
