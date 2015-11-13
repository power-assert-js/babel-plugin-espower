'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

assert(assert._expr(assert._capt(hello.apply(undefined, _toConsumableArray(assert._capt(names, 'arguments/0/arguments/0/argument'))), 'arguments/0'), {
  content: 'assert(hello(...names))',
  filepath: 'test/fixtures/SpreadElement/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(assert._capt([assert._capt(head, 'arguments/0/object/elements/0')].concat(_toConsumableArray(assert._capt(tail, 'arguments/0/object/elements/1/argument'))), 'arguments/0/object').length, 'arguments/0'), {
  content: 'assert([head, ...tail].length)',
  filepath: 'test/fixtures/SpreadElement/fixture.js',
  line: 5
}));

assert(assert._expr(assert._capt(f.apply(undefined, [assert._capt(head, 'arguments/0/arguments/0')].concat(_toConsumableArray(assert._capt(iter(), 'arguments/0/arguments/1/argument')), _toConsumableArray(assert._capt([assert._capt(foo, 'arguments/0/arguments/2/argument/elements/0'), assert._capt(bar, 'arguments/0/arguments/2/argument/elements/1')], 'arguments/0/arguments/2/argument')))), 'arguments/0'), {
  content: 'assert(f(head, ...iter(), ...[foo, bar]))',
  filepath: 'test/fixtures/SpreadElement/fixture.js',
  line: 7
}));
