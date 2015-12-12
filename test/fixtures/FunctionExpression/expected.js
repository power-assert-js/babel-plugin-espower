'use strict';

var _powerAssertRecorder = function () { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder();

assert(function (a, b) {
  return a + b;
});

assert(_rec._expr(_rec._capt(_rec._capt(baz, 'arguments/0/left') === _rec._capt((function (a, b) {
  return a + b;
})(_rec._capt(foo, 'arguments/0/right/arguments/0'), _rec._capt(bar, 'arguments/0/right/arguments/1')), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(baz === (function (a, b) { return a + b; })(foo, bar))',
  filepath: 'test/fixtures/FunctionExpression/fixture.js',
  line: 5
}));
