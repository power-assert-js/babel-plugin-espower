'use strict';

var _powerAssertRecorder = function _powerAssertRecorder() { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder(),
    _rec4 = _powerAssertRecorder(),
    _rec5 = _powerAssertRecorder();

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

assert(_rec._expr(_rec._capt(foo, 'arguments/0/test') ? _rec._capt(bar, 'arguments/0/consequent') : _rec._capt(baz, 'arguments/0/alternate'), {
  content: 'assert(foo ? bar : baz)',
  filepath: 'test/fixtures/ConditionalExpression/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(falsy, 'arguments/0/test') ? _rec2._capt(truthy, 'arguments/0/consequent') : _rec2._capt(truthy, 'arguments/0/alternate/test') ? _rec2._capt(anotherFalsy, 'arguments/0/alternate/consequent') : _rec2._capt(truthy, 'arguments/0/alternate/alternate'), {
  content: 'assert(falsy ? truthy : truthy ? anotherFalsy : truthy)',
  filepath: 'test/fixtures/ConditionalExpression/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(foo(), 'arguments/0/test') ? _rec3._capt(_rec3._capt(bar, 'arguments/0/consequent/object').baz, 'arguments/0/consequent') : _rec3._capt(typeof goo === 'undefined' ? 'undefined' : _typeof(goo), 'arguments/0/alternate'), {
  content: 'assert(foo() ? bar.baz : typeof goo)',
  filepath: 'test/fixtures/ConditionalExpression/fixture.js',
  line: 7
}));

assert.equal(_rec4._expr(_rec4._capt(foo, 'arguments/0/test') ? _rec4._capt(bar, 'arguments/0/consequent') : _rec4._capt(baz, 'arguments/0/alternate'), {
  content: 'assert.equal(foo ? bar : baz, falsy ? truthy : truthy ? anotherFalsy : truthy)',
  filepath: 'test/fixtures/ConditionalExpression/fixture.js',
  line: 9
}), _rec5._expr(_rec5._capt(falsy, 'arguments/1/test') ? _rec5._capt(truthy, 'arguments/1/consequent') : _rec5._capt(truthy, 'arguments/1/alternate/test') ? _rec5._capt(anotherFalsy, 'arguments/1/alternate/consequent') : _rec5._capt(truthy, 'arguments/1/alternate/alternate'), {
  content: 'assert.equal(foo ? bar : baz, falsy ? truthy : truthy ? anotherFalsy : truthy)',
  filepath: 'test/fixtures/ConditionalExpression/fixture.js',
  line: 9
}));
