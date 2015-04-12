var Transformer = require('babel-core').Transformer;
var createEspowerVisitor = require('./visitor');
module.exports = new Transformer('babel-plugin-espower', createEspowerVisitor());
