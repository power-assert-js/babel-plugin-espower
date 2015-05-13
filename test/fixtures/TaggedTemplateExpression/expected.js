'use strict';

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

assert(assert._expr(assert._capt(fn(_taggedTemplateLiteral(['a', ''], ['a', '']), 1), 'arguments/0'), {
  content: 'assert(fn`a${ 1 }`)',
  filepath: 'fixtures/TaggedTemplateExpression/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(fn(_taggedTemplateLiteral(['a', 'b', 'c', ''], ['a', 'b', 'c', '']), assert._capt(foo, 'arguments/0/quasi/expressions/0'), assert._capt(bar, 'arguments/0/quasi/expressions/1'), assert._capt(baz, 'arguments/0/quasi/expressions/2')), 'arguments/0'), {
  content: 'assert(fn`a${ foo }b${ bar }c${ baz }`)',
  filepath: 'fixtures/TaggedTemplateExpression/fixture.js',
  line: 5
}));

assert(assert._expr(assert._capt(fn(_taggedTemplateLiteral(['driver ', ', navigator ', ''], ['driver ', ', navigator ', '']), assert._capt(assert._capt(bob, 'arguments/0/quasi/expressions/0/object').name, 'arguments/0/quasi/expressions/0'), assert._capt(assert._capt(alice, 'arguments/0/quasi/expressions/1/callee/object').getName(), 'arguments/0/quasi/expressions/1')), 'arguments/0'), {
  content: 'assert(fn`driver ${ bob.name }, navigator ${ alice.getName() }`)',
  filepath: 'fixtures/TaggedTemplateExpression/fixture.js',
  line: 7
}));
