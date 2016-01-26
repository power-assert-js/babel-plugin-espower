'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, args) { return { powerAssertContext: { value: value, events: this.captured }, source: { content: args.content, filepath: args.filepath, line: args.line, generator: !!args.generator, async: !!args.async } }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder(),
    _rec6 = new _powerAssertRecorder(),
    _rec7 = new _powerAssertRecorder(),
    _rec8 = new _powerAssertRecorder();

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
