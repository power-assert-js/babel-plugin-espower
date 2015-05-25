'use strict';

assert(assert._expr(assert._capt(4 !== 4, 'arguments/0'), {
  content: 'assert(4 !== 4)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(assert._capt(fuga, 'arguments/0/left') !== 4, 'arguments/0'), {
  content: 'assert(fuga !== 4)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 5
}));

assert(assert._expr(assert._capt(assert._capt(fuga, 'arguments/0/left') === assert._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(fuga === piyo)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 7
}));

assert(assert._expr(assert._capt(assert._capt(fuga, 'arguments/0/left') === assert._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(fuga === piyo)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 9
}));

assert(assert._expr(assert._capt(assert._capt(fuga, 'arguments/0/left') === assert._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(fuga === piyo)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 13
}));

assert(assert._expr(assert._capt(assert._capt(fuga, 'arguments/0/left') !== assert._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(fuga !== piyo)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 15
}));

assert.ok(assert._expr(assert._capt(assert._capt(hoge, 'arguments/0/left') === assert._capt(fuga, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert.ok(hoge === fuga, \'comment\')',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 17
}), 'comment');

assert(assert._expr(assert._capt(assert._capt(assert._capt(ary1, 'arguments/0/left/object').length, 'arguments/0/left') === assert._capt(assert._capt(ary2, 'arguments/0/right/object').length, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(ary1.length === ary2.length)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 19
}));
