'use strict';

assert(assert._expr(assert._capt(assert._capt(5 < assert._capt(actual, 'arguments/0/left/right'), 'arguments/0/left') && assert._capt(assert._capt(actual, 'arguments/0/right/left') < 13, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(5 < actual && actual < 13)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 3
}));

assert.ok(assert._expr(assert._capt(assert._capt(assert._capt(actual, 'arguments/0/left/left') < 5, 'arguments/0/left') || assert._capt(13 < assert._capt(actual, 'arguments/0/right/right'), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert.ok(actual < 5 || 13 < actual)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 5
}));

assert(assert._expr(assert._capt(assert._capt(2 > assert._capt(actual, 'arguments/0/left/right'), 'arguments/0/left') && assert._capt(assert._capt(actual, 'arguments/0/right/left') < 13, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(2 > actual && actual < 13)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 7
}));

assert(assert._expr(assert._capt(assert._capt(2 > assert._capt(actual, 'arguments/0/left/right'), 'arguments/0/left') && assert._capt(assert._capt(actual, 'arguments/0/right/left') < 13, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(2 > actual && actual < 13)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 9
}));

assert.equal(assert._expr(assert._capt(assert._capt(5 < assert._capt(actual, 'arguments/0/left/right'), 'arguments/0/left') && assert._capt(assert._capt(actual, 'arguments/0/right/left') < 13, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert.equal(5 < actual && actual < 13, falsy)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 11
}), assert._expr(assert._capt(falsy, 'arguments/1'), {
  content: 'assert.equal(5 < actual && actual < 13, falsy)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 11
}));
