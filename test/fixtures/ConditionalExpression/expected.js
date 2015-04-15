'use strict';

assert(assert._expr(assert._capt(foo, 'arguments/0/test') ? assert._capt(bar, 'arguments/0/consequent') : assert._capt(baz, 'arguments/0/alternate'), {
  content: 'assert(foo ? bar : baz)',
  filepath: 'fixtures/ConditionalExpression/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(falsy, 'arguments/0/test') ? assert._capt(truthy, 'arguments/0/consequent') : assert._capt(truthy, 'arguments/0/alternate/test') ? assert._capt(anotherFalsy, 'arguments/0/alternate/consequent') : assert._capt(truthy, 'arguments/0/alternate/alternate'), {
  content: 'assert(falsy ? truthy : truthy ? anotherFalsy : truthy)',
  filepath: 'fixtures/ConditionalExpression/fixture.js',
  line: 5
}));

assert(assert._expr(assert._capt(foo(), 'arguments/0/test') ? assert._capt(assert._capt(bar, 'arguments/0/consequent/object').baz, 'arguments/0/consequent') : assert._capt(typeof goo, 'arguments/0/alternate'), {
  content: 'assert(foo() ? bar.baz : typeof goo)',
  filepath: 'fixtures/ConditionalExpression/fixture.js',
  line: 7
}));

assert.equal(assert._expr(assert._capt(foo, 'arguments/0/test') ? assert._capt(bar, 'arguments/0/consequent') : assert._capt(baz, 'arguments/0/alternate'), {
  content: 'assert.equal(foo ? bar : baz, falsy ? truthy : truthy ? anotherFalsy : truthy)',
  filepath: 'fixtures/ConditionalExpression/fixture.js',
  line: 9
}), assert._expr(assert._capt(falsy, 'arguments/1/test') ? assert._capt(truthy, 'arguments/1/consequent') : assert._capt(truthy, 'arguments/1/alternate/test') ? assert._capt(anotherFalsy, 'arguments/1/alternate/consequent') : assert._capt(truthy, 'arguments/1/alternate/alternate'), {
  content: 'assert.equal(foo ? bar : baz, falsy ? truthy : truthy ? anotherFalsy : truthy)',
  filepath: 'fixtures/ConditionalExpression/fixture.js',
  line: 9
}));
