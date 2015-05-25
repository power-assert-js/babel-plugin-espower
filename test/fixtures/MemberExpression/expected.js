'use strict';

assert(assert._expr(assert._capt(assert._capt(foo, 'arguments/0/object').bar, 'arguments/0'), {
  content: 'assert(foo.bar)',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(assert._capt(assert._capt(foo, 'arguments/0/object/object').bar, 'arguments/0/object').baz, 'arguments/0'), {
  content: 'assert(foo.bar.baz)',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 5
}));

assert(assert._expr(assert._capt(assert._capt(foo, 'arguments/0/object')['bar'], 'arguments/0'), {
  content: 'assert(foo[\'bar\'])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 7
}));

assert(assert._expr(assert._capt(assert._capt(foo, 'arguments/0/object')[assert._capt(propName, 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[propName])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 9
}));

assert(assert._expr(assert._capt(assert._capt(foo, 'arguments/0/object')[assert._capt(propName, 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[propName])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 11
}));

assert(assert._expr(assert._capt(assert._capt(foo, 'arguments/0/object')[assert._capt(func(assert._capt(key, 'arguments/0/property/arguments/0')), 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[func(key)])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 13
}));

assert(assert._expr(assert._capt(assert._capt(assert._capt(assert._capt(foo, 'arguments/0/object/object/object')[assert._capt(propName, 'arguments/0/object/object/property')], 'arguments/0/object/object')['key'], 'arguments/0/object')[assert._capt(assert._capt(keys(), 'arguments/0/property/object')['name'], 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[propName][\'key\'][keys()[\'name\']])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 15
}));

assert(assert._expr(assert._capt(assert._capt(assert._capt(assert._capt(foo, 'arguments/0/object/object/object')[assert._capt(propName, 'arguments/0/object/object/property')], 'arguments/0/object/object')['key'], 'arguments/0/object')[assert._capt(assert._capt(keys(), 'arguments/0/property/object')['name'], 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[propName][\'key\'][keys()[\'name\']])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 17
}));

assert.equal(assert._expr(assert._capt(assert._capt(ary1, 'arguments/0/object').length, 'arguments/0'), {
  content: 'assert.equal(ary1.length, ary2.length)',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 19
}), assert._expr(assert._capt(assert._capt(ary2, 'arguments/1/object').length, 'arguments/1'), {
  content: 'assert.equal(ary1.length, ary2.length)',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 19
}));

assert.deepEqual(assert._expr(assert._capt(assert._capt(foo, 'arguments/0/object').propName, 'arguments/0'), {
  content: 'assert.deepEqual(foo.propName, foo[key])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 21
}), assert._expr(assert._capt(assert._capt(foo, 'arguments/1/object')[assert._capt(key, 'arguments/1/property')], 'arguments/1'), {
  content: 'assert.deepEqual(foo.propName, foo[key])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 21
}));
