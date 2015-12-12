'use strict';

var _powerAssertRecorder = function _powerAssertRecorder() { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder(),
    _rec4 = _powerAssertRecorder(),
    _rec5 = _powerAssertRecorder(),
    _rec6 = _powerAssertRecorder(),
    _rec7 = _powerAssertRecorder(),
    _rec8 = _powerAssertRecorder();

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

assert(_rec._expr(_rec._capt(!_rec._capt(truth, 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(!truth)',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(!_rec2._capt(!_rec2._capt(some, 'arguments/0/argument/argument'), 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(!!some)',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(!_rec3._capt(!_rec3._capt(_rec3._capt(foo, 'arguments/0/argument/argument/object').bar, 'arguments/0/argument/argument'), 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(!!foo.bar)',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 7
}));

assert(_rec4._expr(_rec4._capt(delete _rec4._capt(_rec4._capt(foo, 'arguments/0/argument/object').bar, 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(delete foo.bar)',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 9
}));

assert(_rec5._expr(_rec5._capt(_rec5._capt(typeof foo === 'undefined' ? 'undefined' : _typeof(foo), 'arguments/0/left') !== 'undefined', 'arguments/0'), {
  content: 'assert(typeof foo !== \'undefined\')',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 11
}));

assert(_rec6._expr(_rec6._capt(_rec6._capt(_typeof(_rec6._capt(_rec6._capt(foo, 'arguments/0/left/argument/object').bar, 'arguments/0/left/argument')), 'arguments/0/left') !== 'undefined', 'arguments/0'), {
  content: 'assert(typeof foo.bar !== \'undefined\')',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 13
}));

assert.strictEqual(_rec7._expr(_rec7._capt(typeof foo === 'undefined' ? 'undefined' : _typeof(foo), 'arguments/0'), {
  content: 'assert.strictEqual(typeof foo, typeof bar)',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 15
}), _rec8._expr(_rec8._capt(typeof bar === 'undefined' ? 'undefined' : _typeof(bar), 'arguments/1'), {
  content: 'assert.strictEqual(typeof foo, typeof bar)',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 15
}));
