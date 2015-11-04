'use strict';

assert(assert._expr(assert._capt(falsyStr, 'arguments/0'), {
  content: 'assert(falsyStr)',
  filepath: 'test/fixtures/pd/fixture.js',
  line: 3
}));

assert.strictEqual(assert._expr(assert._capt(typeof foo, 'arguments/0'), {
  content: 'assert.strictEqual(typeof foo, typeof bar)',
  filepath: 'test/fixtures/pd/fixture.js',
  line: 5
}), assert._expr(assert._capt(typeof bar, 'arguments/1'), {
  content: 'assert.strictEqual(typeof foo, typeof bar)',
  filepath: 'test/fixtures/pd/fixture.js',
  line: 5
}));
