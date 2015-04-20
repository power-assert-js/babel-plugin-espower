'use strict';

assert.isNull(assert._expr(assert._capt(falsy, 'arguments/0'), {
  content: 'assert.isNull(falsy)',
  filepath: 'fixtures/customPatterns/fixture.js',
  line: 3
}));

assert.isNull(assert._expr(assert._capt(falsy, 'arguments/0'), {
  content: 'assert.isNull(falsy, message)',
  filepath: 'fixtures/customPatterns/fixture.js',
  line: 5
}), message);

assert.same(assert._expr(assert._capt(foo, 'arguments/0'), {
  content: 'assert.same(foo, bar)',
  filepath: 'fixtures/customPatterns/fixture.js',
  line: 7
}), assert._expr(assert._capt(bar, 'arguments/1'), {
  content: 'assert.same(foo, bar)',
  filepath: 'fixtures/customPatterns/fixture.js',
  line: 7
}));

assert.same(assert._expr(assert._capt(foo, 'arguments/0'), {
  content: 'assert.same(foo, bar, message)',
  filepath: 'fixtures/customPatterns/fixture.js',
  line: 9
}), assert._expr(assert._capt(bar, 'arguments/1'), {
  content: 'assert.same(foo, bar, message)',
  filepath: 'fixtures/customPatterns/fixture.js',
  line: 9
}), message);

assert.near(actualVal, expectedVal);

assert.near(assert._expr(assert._capt(actualVal, 'arguments/0'), {
  content: 'assert.near(actualVal, expectedVal, delta)',
  filepath: 'fixtures/customPatterns/fixture.js',
  line: 13
}), assert._expr(assert._capt(expectedVal, 'arguments/1'), {
  content: 'assert.near(actualVal, expectedVal, delta)',
  filepath: 'fixtures/customPatterns/fixture.js',
  line: 13
}), assert._expr(assert._capt(delta, 'arguments/2'), {
  content: 'assert.near(actualVal, expectedVal, delta)',
  filepath: 'fixtures/customPatterns/fixture.js',
  line: 13
}));

assert.near(assert._expr(assert._capt(actualVal, 'arguments/0'), {
  content: 'assert.near(actualVal, expectedVal, delta, message)',
  filepath: 'fixtures/customPatterns/fixture.js',
  line: 15
}), assert._expr(assert._capt(expectedVal, 'arguments/1'), {
  content: 'assert.near(actualVal, expectedVal, delta, message)',
  filepath: 'fixtures/customPatterns/fixture.js',
  line: 15
}), assert._expr(assert._capt(delta, 'arguments/2'), {
  content: 'assert.near(actualVal, expectedVal, delta, message)',
  filepath: 'fixtures/customPatterns/fixture.js',
  line: 15
}), message);
