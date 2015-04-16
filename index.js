/**
 * babel-plugin-espower:
 *   Babel plugin for power-assert
 * 
 * https://github.com/twada/babel-plugin-espower
 *
 * Copyright (c) 2015 Takuto Wada
 * Licensed under the MIT license.
 *   http://twada.mit-license.org/
 */
'use strict';

var Transformer = require('babel-core').Transformer;
var createEspowerVisitor = require('./lib/create-espower-visitor');
module.exports = new Transformer('babel-plugin-espower', createEspowerVisitor());
