'use strict';

var _powerAssertRecorder = function _powerAssertRecorder() { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
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

assert(_rec._expr(_rec._capt(falsyStr, 'arguments/0'), {
  content: 'assert(falsyStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(falsyStr, 'arguments/0'), {
  content: 'assert(falsyStr, messageStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 5
}), messageStr);

assert.equal(_rec3._expr(_rec3._capt(str, 'arguments/0'), {
  content: 'assert.equal(str, anotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 7
}), _rec4._expr(_rec4._capt(anotherStr, 'arguments/1'), {
  content: 'assert.equal(str, anotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 7
}));

assert.equal(_rec5._expr(_rec5._capt(str, 'arguments/0'), {
  content: 'assert.equal(str, anotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 9
}), _rec6._expr(_rec6._capt(anotherStr, 'arguments/1'), {
  content: 'assert.equal(str, anotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 9
}));

assert.equal(_rec7._expr(_rec7._capt(str, 'arguments/0'), {
  content: 'assert.equal(str, anotherStr, messageStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 14
}), _rec8._expr(_rec8._capt(anotherStr, 'arguments/1'), {
  content: 'assert.equal(str, anotherStr, messageStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 14
}), messageStr);

assert.equal(_rec9._expr(_rec9._capt(str, 'arguments/0'), {
  content: 'assert.equal(str, anotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 16
}), _rec10._expr(_rec10._capt(anotherStr, 'arguments/1'), {
  content: 'assert.equal(str, anotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 16
}));

assert.equal(_rec11._expr(_rec11._capt(str, 'arguments/0'), {
  content: 'assert.equal(str, yetAnotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 21
}), _rec12._expr(_rec12._capt(yetAnotherStr, 'arguments/1'), {
  content: 'assert.equal(str, yetAnotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 21
}));
