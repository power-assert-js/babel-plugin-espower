'use strict';

var _powerAssertRecorder = function () { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; };

function* gen(a) {
  var _rec = _powerAssertRecorder();

  assert(_rec._expr(_rec._capt(_rec._capt((yield a), 'arguments/0/left') === 3, 'arguments/0'), {
    content: 'assert((yield a) === 3)',
    filepath: 'test/fixtures/YieldExpression/fixture.js',
    line: 4,
    generator: true
  }));
}

// function notGen(a){
//   assert((yield (a)) === 3);
// }
