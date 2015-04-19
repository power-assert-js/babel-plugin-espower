'use strict';

var Transformer = require('babel-core').Transformer;
var createEspowerVisitor = require('./lib/create-espower-visitor');

module.exports = function createEspowerPlugin (options) {
    return new Transformer('babel-plugin-espower', createEspowerVisitor(options));
};
