var Transformer = require('babel-core').Transformer;
var t = require('babel-core').types;
var escallmatch = require('escallmatch');

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

var options = {};

module.exports = new Transformer('babel-plugin-espower', {
    CallExpression: function (node, parent, scope, file) {
        // if (this.matchesPattern('assert.equal', true)) {
        //     console.log('########## match');
        // } else {
        //     console.log('########## doesnt match');
        // }
        var matcher = escallmatch('assert(actual, [message])');
        // var matcher = escallmatch('assert.equal(actual, expected, [message])');
        if (matcher.test(node)) {
            var paths = esPath(this);
            console.log('########## match ' + paths.join('/'));
        }
    }
}, options);
