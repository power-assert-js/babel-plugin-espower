'use strict';

assert(function (v) {
  return v + 1;
});

assert(function (v, i) {
  return v + i;
});

assert(function (v) {
  return { even: v, odd: v + 1 };
});

assert(assert._expr(assert._capt(assert._capt(seven, 'arguments/0/left') === assert._capt((function (v, i) {
  return v + i;
})(assert._capt(four, 'arguments/0/right/arguments/0'), assert._capt(five, 'arguments/0/right/arguments/1')), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(seven === ((v, i) => v + i)(four, five))',
  filepath: 'fixtures/ArrowFunctionExpression/fixture.js',
  line: 9
}));
