'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _powerAssertRecorder = function _powerAssertRecorder() { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder(),
    _rec4 = _powerAssertRecorder();

assert(_rec._expr(_rec._capt([_rec._capt(foo, 'arguments/0/elements/0'), _rec._capt(bar, 'arguments/0/elements/1')], 'arguments/0'), {
  content: 'assert([foo, bar])',
  filepath: 'test/fixtures/ArrayExpression/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(_rec2._capt(_typeof(_rec2._capt([_rec2._capt([_rec2._capt(_rec2._capt(foo, 'arguments/0/left/argument/elements/0/elements/0/object').bar, 'arguments/0/left/argument/elements/0/elements/0'), _rec2._capt(baz(_rec2._capt(moo, 'arguments/0/left/argument/elements/0/elements/1/arguments/0')), 'arguments/0/left/argument/elements/0/elements/1')], 'arguments/0/left/argument/elements/0'), _rec2._capt(+_rec2._capt(fourStr, 'arguments/0/left/argument/elements/1/argument'), 'arguments/0/left/argument/elements/1')], 'arguments/0/left/argument')), 'arguments/0/left') === 'number', 'arguments/0'), {
  content: 'assert(typeof [[foo.bar, baz(moo)], +fourStr] === \'number\')',
  filepath: 'test/fixtures/ArrayExpression/fixture.js',
  line: 5
}));

assert.notDeepEqual(_rec3._expr(_rec3._capt([_rec3._capt(foo, 'arguments/0/elements/0'), _rec3._capt(bar, 'arguments/0/elements/1')], 'arguments/0'), {
  content: 'assert.notDeepEqual([foo, bar], [hoge, fuga, piyo])',
  filepath: 'test/fixtures/ArrayExpression/fixture.js',
  line: 7
}), _rec4._expr(_rec4._capt([_rec4._capt(hoge, 'arguments/1/elements/0'), _rec4._capt(fuga, 'arguments/1/elements/1'), _rec4._capt(piyo, 'arguments/1/elements/2')], 'arguments/1'), {
  content: 'assert.notDeepEqual([foo, bar], [hoge, fuga, piyo])',
  filepath: 'test/fixtures/ArrayExpression/fixture.js',
  line: 7
}));
