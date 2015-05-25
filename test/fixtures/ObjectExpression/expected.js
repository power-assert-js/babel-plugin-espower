'use strict';

assert(assert._expr(assert._capt({ foo: assert._capt(bar, 'arguments/0/properties/0/value'), hoge: assert._capt(fuga, 'arguments/0/properties/1/value') }, 'arguments/0'), {
  content: 'assert({foo: bar,hoge: fuga})',
  filepath: 'test/fixtures/ObjectExpression/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(!assert._capt({ foo: assert._capt(assert._capt(bar, 'arguments/0/argument/properties/0/value/object').baz, 'arguments/0/argument/properties/0/value'), name: assert._capt(nameOf(assert._capt({ firstName: assert._capt(first, 'arguments/0/argument/properties/1/value/arguments/0/properties/0/value'), lastName: assert._capt(last, 'arguments/0/argument/properties/1/value/arguments/0/properties/1/value') }, 'arguments/0/argument/properties/1/value/arguments/0')), 'arguments/0/argument/properties/1/value') }, 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(!{foo: bar.baz,name: nameOf({firstName: first,lastName: last})})',
  filepath: 'test/fixtures/ObjectExpression/fixture.js',
  line: 5
}));

assert.deepEqual(assert._expr(assert._capt({ foo: assert._capt(bar, 'arguments/0/properties/0/value'), hoge: assert._capt(fuga, 'arguments/0/properties/1/value') }, 'arguments/0'), {
  content: 'assert.deepEqual({foo: bar,hoge: fuga}, {hoge: fuga,foo: bar})',
  filepath: 'test/fixtures/ObjectExpression/fixture.js',
  line: 7
}), assert._expr(assert._capt({ hoge: assert._capt(fuga, 'arguments/1/properties/0/value'), foo: assert._capt(bar, 'arguments/1/properties/1/value') }, 'arguments/1'), {
  content: 'assert.deepEqual({foo: bar,hoge: fuga}, {hoge: fuga,foo: bar})',
  filepath: 'test/fixtures/ObjectExpression/fixture.js',
  line: 7
}));
