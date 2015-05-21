'use strict';

var createEspowerVisitor = require('./lib/create-espower-visitor');

module.exports = function createEspowerPlugin (babel, options) {
    return new babel.Transformer('babel-plugin-espower', createEspowerVisitor(babel, options));
};
