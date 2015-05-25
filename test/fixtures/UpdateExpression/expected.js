'use strict';

assert(assert._expr(assert._capt(++foo, 'arguments/0'), {
  content: 'assert(++foo)',
  filepath: 'test/fixtures/UpdateExpression/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(bar--, 'arguments/0'), {
  content: 'assert(bar--)',
  filepath: 'test/fixtures/UpdateExpression/fixture.js',
  line: 5
}));

assert.strictEqual(assert._expr(assert._capt(++foo, 'arguments/0'), {
  content: 'assert.strictEqual(++foo, bar--)',
  filepath: 'test/fixtures/UpdateExpression/fixture.js',
  line: 7
}), assert._expr(assert._capt(bar--, 'arguments/1'), {
  content: 'assert.strictEqual(++foo, bar--)',
  filepath: 'test/fixtures/UpdateExpression/fixture.js',
  line: 7
}));
