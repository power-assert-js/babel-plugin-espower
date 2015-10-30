'use strict';

assert(assert._expr(assert._capt(falsyStr, 'arguments/0'), {
  content: 'assert(falsyStr)',
  filepath: 'test/fixtures/babel6/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(falsyStr, 'arguments/0'), {
  content: 'assert(falsyStr, messageStr)',
  filepath: 'test/fixtures/babel6/fixture.js',
  line: 5
}), messageStr);
