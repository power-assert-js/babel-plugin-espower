'use strict';

var _powerAssertRecorder = function _powerAssertRecorder() { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder();

assert(function (v) {
  return v + 1;
});

assert(function (v, i) {
  return v + i;
});

assert(function (v) {
  return { even: v, odd: v + 1 };
});

assert(_rec._expr(_rec._capt(_rec._capt(seven, 'arguments/0/left') === _rec._capt(function (v, i) {
  return v + i;
}(_rec._capt(four, 'arguments/0/right/arguments/0'), _rec._capt(five, 'arguments/0/right/arguments/1')), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(seven === ((v, i) => v + i)(four, five))',
  filepath: 'test/fixtures/ArrowFunctionExpression/fixture.js',
  line: 9
}));
