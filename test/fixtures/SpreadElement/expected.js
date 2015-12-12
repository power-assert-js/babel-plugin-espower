'use strict';

var _powerAssertRecorder = function () { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder();

assert(_rec._expr(_rec._capt(hello(..._rec._capt(names, 'arguments/0/arguments/0/argument')), 'arguments/0'), {
  content: 'assert(hello(...names))',
  filepath: 'test/fixtures/SpreadElement/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(_rec2._capt([_rec2._capt(head, 'arguments/0/object/elements/0'), ..._rec2._capt(tail, 'arguments/0/object/elements/1/argument')], 'arguments/0/object').length, 'arguments/0'), {
  content: 'assert([head, ...tail].length)',
  filepath: 'test/fixtures/SpreadElement/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(f(_rec3._capt(head, 'arguments/0/arguments/0'), ..._rec3._capt(iter(), 'arguments/0/arguments/1/argument'), ..._rec3._capt([_rec3._capt(foo, 'arguments/0/arguments/2/argument/elements/0'), _rec3._capt(bar, 'arguments/0/arguments/2/argument/elements/1')], 'arguments/0/arguments/2/argument')), 'arguments/0'), {
  content: 'assert(f(head, ...iter(), ...[foo, bar]))',
  filepath: 'test/fixtures/SpreadElement/fixture.js',
  line: 7
}));
