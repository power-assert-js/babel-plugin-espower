'use strict';

assert(false);

assert(0);

assert.equal(1, 0);

assert(false, 'message');

assert(false, messageStr);

assert.equal(assert._expr(assert._capt(foo, 'arguments/0'), {
  content: 'assert.equal(foo, \'bar\', \'msg\')',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 13
}), 'bar', 'msg');

assert(assert._expr(assert._capt(/^not/.exec(assert._capt(str, 'arguments/0/arguments/0')), 'arguments/0'), {
  content: 'assert(/^not/.exec(str))',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 15
}));

assert(assert._expr(assert._capt(assert._capt(fuga, 'arguments/0/left') !== 'ふが', 'arguments/0'), {
  content: 'assert(fuga !== \'ふが\')',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 17
}));

assert(assert._expr(assert._capt('ほげ' !== 'ふが', 'arguments/0'), {
  content: 'assert(\'ほげ\' !== \'ふが\')',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 19
}));

assert(503);

assert(503);
