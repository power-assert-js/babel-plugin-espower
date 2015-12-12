'use strict';

var _powerAssertRecorder = function () { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder(),
    _rec4 = _powerAssertRecorder();

assert(_rec._expr(_rec._capt(++foo, 'arguments/0'), {
  content: 'assert(++foo)',
  filepath: 'test/fixtures/UpdateExpression/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(bar--, 'arguments/0'), {
  content: 'assert(bar--)',
  filepath: 'test/fixtures/UpdateExpression/fixture.js',
  line: 5
}));

assert.strictEqual(_rec3._expr(_rec3._capt(++foo, 'arguments/0'), {
  content: 'assert.strictEqual(++foo, bar--)',
  filepath: 'test/fixtures/UpdateExpression/fixture.js',
  line: 7
}), _rec4._expr(_rec4._capt(bar--, 'arguments/1'), {
  content: 'assert.strictEqual(++foo, bar--)',
  filepath: 'test/fixtures/UpdateExpression/fixture.js',
  line: 7
}));
