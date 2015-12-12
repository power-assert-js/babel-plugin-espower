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

assert.isNull(_rec._expr(_rec._capt(falsy, 'arguments/0'), {
  content: 'assert.isNull(falsy)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 3
}));

assert.isNull(_rec2._expr(_rec2._capt(falsy, 'arguments/0'), {
  content: 'assert.isNull(falsy, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 5
}), message);

assert.same(_rec3._expr(_rec3._capt(foo, 'arguments/0'), {
  content: 'assert.same(foo, bar)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 7
}), _rec4._expr(_rec4._capt(bar, 'arguments/1'), {
  content: 'assert.same(foo, bar)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 7
}));

assert.same(_rec5._expr(_rec5._capt(foo, 'arguments/0'), {
  content: 'assert.same(foo, bar, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 9
}), _rec6._expr(_rec6._capt(bar, 'arguments/1'), {
  content: 'assert.same(foo, bar, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 9
}), message);

assert.near(actualVal, expectedVal);

assert.near(_rec7._expr(_rec7._capt(actualVal, 'arguments/0'), {
  content: 'assert.near(actualVal, expectedVal, delta)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 13
}), _rec8._expr(_rec8._capt(expectedVal, 'arguments/1'), {
  content: 'assert.near(actualVal, expectedVal, delta)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 13
}), _rec9._expr(_rec9._capt(delta, 'arguments/2'), {
  content: 'assert.near(actualVal, expectedVal, delta)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 13
}));

assert.near(_rec10._expr(_rec10._capt(actualVal, 'arguments/0'), {
  content: 'assert.near(actualVal, expectedVal, delta, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 15
}), _rec11._expr(_rec11._capt(expectedVal, 'arguments/1'), {
  content: 'assert.near(actualVal, expectedVal, delta, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 15
}), _rec12._expr(_rec12._capt(delta, 'arguments/2'), {
  content: 'assert.near(actualVal, expectedVal, delta, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 15
}), message);
