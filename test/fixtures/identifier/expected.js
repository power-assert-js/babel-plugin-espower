'use strict';

assert(assert._expr(assert._capt(truthy, 'arguments/0'), {
  content: 'assert(truthy)',
  filepath: '/path/to/test/some_test.js',
  line: 3
}));
