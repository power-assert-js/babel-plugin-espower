'use strict';

var _powerAssertRecorder = function () { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder(),
    _rec4 = _powerAssertRecorder(),
    _rec5 = _powerAssertRecorder(),
    _rec6 = _powerAssertRecorder(),
    _rec7 = _powerAssertRecorder(),
    _rec8 = _powerAssertRecorder(),
    _rec9 = _powerAssertRecorder(),
    _rec10 = _powerAssertRecorder(),
    _rec11 = _powerAssertRecorder(),
    _rec12 = _powerAssertRecorder();

assert(_rec._expr(_rec._capt(_rec._capt(foo, 'arguments/0/object').bar, 'arguments/0'), {
  content: 'assert(foo.bar)',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(foo, 'arguments/0/object/object').bar, 'arguments/0/object').baz, 'arguments/0'), {
  content: 'assert(foo.bar.baz)',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(_rec3._capt(foo, 'arguments/0/object')['bar'], 'arguments/0'), {
  content: 'assert(foo[\'bar\'])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 7
}));

assert(_rec4._expr(_rec4._capt(_rec4._capt(foo, 'arguments/0/object')[_rec4._capt(propName, 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[propName])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 9
}));

assert(_rec5._expr(_rec5._capt(_rec5._capt(foo, 'arguments/0/object')[_rec5._capt(propName, 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[propName])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 11
}));

assert(_rec6._expr(_rec6._capt(_rec6._capt(foo, 'arguments/0/object')[_rec6._capt(func(_rec6._capt(key, 'arguments/0/property/arguments/0')), 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[func(key)])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 13
}));

assert(_rec7._expr(_rec7._capt(_rec7._capt(_rec7._capt(_rec7._capt(foo, 'arguments/0/object/object/object')[_rec7._capt(propName, 'arguments/0/object/object/property')], 'arguments/0/object/object')['key'], 'arguments/0/object')[_rec7._capt(_rec7._capt(keys(), 'arguments/0/property/object')['name'], 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[propName][\'key\'][keys()[\'name\']])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 15
}));

assert(_rec8._expr(_rec8._capt(_rec8._capt(_rec8._capt(_rec8._capt(foo, 'arguments/0/object/object/object')[_rec8._capt(propName, 'arguments/0/object/object/property')], 'arguments/0/object/object')['key'], 'arguments/0/object')[_rec8._capt(_rec8._capt(keys(), 'arguments/0/property/object')['name'], 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[propName][\'key\'][keys()[\'name\']])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 17
}));

assert.equal(_rec9._expr(_rec9._capt(_rec9._capt(ary1, 'arguments/0/object').length, 'arguments/0'), {
  content: 'assert.equal(ary1.length, ary2.length)',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 19
}), _rec10._expr(_rec10._capt(_rec10._capt(ary2, 'arguments/1/object').length, 'arguments/1'), {
  content: 'assert.equal(ary1.length, ary2.length)',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 19
}));

assert.deepEqual(_rec11._expr(_rec11._capt(_rec11._capt(foo, 'arguments/0/object').propName, 'arguments/0'), {
  content: 'assert.deepEqual(foo.propName, foo[key])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 21
}), _rec12._expr(_rec12._capt(_rec12._capt(foo, 'arguments/1/object')[_rec12._capt(key, 'arguments/1/property')], 'arguments/1'), {
  content: 'assert.deepEqual(foo.propName, foo[key])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 21
}));
