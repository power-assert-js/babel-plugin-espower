'use strict';

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: key == null || typeof Symbol == 'undefined' || key.constructor !== Symbol, configurable: true, writable: true }); };

assert(assert._expr(assert._capt(_defineProperty({}, assert._capt(num, 'arguments/0/properties/0/key'), assert._capt(foo, 'arguments/0/properties/0/value')), 'arguments/0'), {
  content: 'assert({ [num]: foo })',
  filepath: 'fixtures/Property/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(_defineProperty({}, assert._capt('prop_' + assert._capt((function () {
  return bar();
})(), 'arguments/0/properties/0/key/right'), 'arguments/0/properties/0/key'), 42), 'arguments/0'), {
  content: 'assert({ [\'prop_\' + (() => bar())()]: 42 })',
  filepath: 'fixtures/Property/fixture.js',
  line: 5
}));

assert(assert._expr(assert._capt(_defineProperty({}, assert._capt('prop_' + assert._capt(generate(assert._capt(seed, 'arguments/0/properties/0/key/expressions/0/arguments/0')), 'arguments/0/properties/0/key/expressions/0'), 'arguments/0/properties/0/key'), assert._capt(foo, 'arguments/0/properties/0/value')), 'arguments/0'), {
  content: 'assert({ [`prop_${ generate(seed) }`]: foo })',
  filepath: 'fixtures/Property/fixture.js',
  line: 7
}));

assert(assert._expr(assert._capt({ foo: foo }, 'arguments/0'), {
  content: 'assert({ foo })',
  filepath: 'fixtures/Property/fixture.js',
  line: 9
}));

assert(assert._expr(assert._capt({ foo: foo, bar: assert._capt(baz, 'arguments/0/properties/1/value') }, 'arguments/0'), {
  content: 'assert({foo,bar: baz})',
  filepath: 'fixtures/Property/fixture.js',
  line: 11
}));
