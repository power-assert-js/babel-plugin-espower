'use strict';

assert(assert._expr(assert._capt(fn`a${ 1 }`, 'arguments/0'), {
  content: 'assert(fn`a${ 1 }`)',
  filepath: 'test/fixtures/TaggedTemplateExpression/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(fn`a${ assert._capt(foo, 'arguments/0/quasi/expressions/0') }b${ assert._capt(bar, 'arguments/0/quasi/expressions/1') }c${ assert._capt(baz, 'arguments/0/quasi/expressions/2') }`, 'arguments/0'), {
  content: 'assert(fn`a${ foo }b${ bar }c${ baz }`)',
  filepath: 'test/fixtures/TaggedTemplateExpression/fixture.js',
  line: 5
}));

assert(assert._expr(assert._capt(fn`driver ${ assert._capt(assert._capt(bob, 'arguments/0/quasi/expressions/0/object').name, 'arguments/0/quasi/expressions/0') }, navigator ${ assert._capt(assert._capt(alice, 'arguments/0/quasi/expressions/1/callee/object').getName(), 'arguments/0/quasi/expressions/1') }`, 'arguments/0'), {
  content: 'assert(fn`driver ${ bob.name }, navigator ${ alice.getName() }`)',
  filepath: 'test/fixtures/TaggedTemplateExpression/fixture.js',
  line: 7
}));
