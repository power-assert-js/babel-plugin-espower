'use strict';

assert(v => v + 1);

assert((v, i) => v + i);

assert(v => ({ even: v, odd: v + 1 }));

assert(assert._expr(assert._capt(assert._capt(seven, 'arguments/0/left') === assert._capt(((v, i) => v + i)(assert._capt(four, 'arguments/0/right/arguments/0'), assert._capt(five, 'arguments/0/right/arguments/1')), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(seven === ((v, i) => v + i)(four, five))',
  filepath: 'test/fixtures/ArrowFunctionExpression/fixture.js',
  line: 9
}));
