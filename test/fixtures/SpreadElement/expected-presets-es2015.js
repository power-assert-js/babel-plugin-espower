'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, args) { return { powerAssertContext: { value: value, events: this.captured }, source: { content: args.content, filepath: args.filepath, line: args.line, generator: !!args.generator, async: !!args.async } }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

assert(_rec._expr(_rec._capt(hello.apply(undefined, _toConsumableArray(_rec._capt(names, 'arguments/0/arguments/0/argument'))), 'arguments/0'), {
  content: 'assert(hello(...names))',
  filepath: 'test/fixtures/SpreadElement/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(_rec2._capt([_rec2._capt(head, 'arguments/0/object/elements/0')].concat(_toConsumableArray(_rec2._capt(tail, 'arguments/0/object/elements/1/argument'))), 'arguments/0/object').length, 'arguments/0'), {
  content: 'assert([head, ...tail].length)',
  filepath: 'test/fixtures/SpreadElement/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(f.apply(undefined, [_rec3._capt(head, 'arguments/0/arguments/0')].concat(_toConsumableArray(_rec3._capt(iter(), 'arguments/0/arguments/1/argument')), _toConsumableArray(_rec3._capt([_rec3._capt(foo, 'arguments/0/arguments/2/argument/elements/0'), _rec3._capt(bar, 'arguments/0/arguments/2/argument/elements/1')], 'arguments/0/arguments/2/argument')))), 'arguments/0'), {
  content: 'assert(f(head, ...iter(), ...[foo, bar]))',
  filepath: 'test/fixtures/SpreadElement/fixture.js',
  line: 7
}));
