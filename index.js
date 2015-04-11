var Transformer = require('babel-core').Transformer;
var t = require('babel-core').types;

module.exports = new Transformer('plugin-example', {
    FunctionDeclaration: function (node, parent) {
        var id = node.id;
        node.type = 'FunctionExpression';
        node.id   = null;

        return t.variableDeclaration('var', [
            t.variableDeclarator(id, node)
        ]);
    }
});
