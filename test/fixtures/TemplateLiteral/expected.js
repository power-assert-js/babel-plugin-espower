'use strict';

var _powerAssertRecorder = function () { var events = []; function _capt(value, espath) { events.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var captured = events; events = []; var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder();

assert(_rec._expr(_rec._capt(`Hello`, 'arguments/0'), {
  content: 'assert(`Hello`)',
  filepath: 'test/fixtures/TemplateLiteral/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(`Hello, ${ _rec2._capt(nickname, 'arguments/0/expressions/0') }`, 'arguments/0'), {
  content: 'assert(`Hello, ${ nickname }`)',
  filepath: 'test/fixtures/TemplateLiteral/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(`Hello, ${ _rec3._capt(_rec3._capt(user, 'arguments/0/expressions/0/object').nickname, 'arguments/0/expressions/0') }`, 'arguments/0'), {
  content: 'assert(`Hello, ${ user.nickname }`)',
  filepath: 'test/fixtures/TemplateLiteral/fixture.js',
  line: 7
}));
