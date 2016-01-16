'use strict';

var _powerAssertRecorder = function _powerAssertRecorder() { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; };

var _marked = [gen].map(regeneratorRuntime.mark);

function gen(a) {
  var _rec = _powerAssertRecorder();

  return regeneratorRuntime.wrap(function gen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = _rec;
          _context.t1 = _rec;
          _context.t2 = _rec;
          _context.next = 5;
          return a;

        case 5:
          _context.t3 = _context.sent;
          _context.t4 = _context.t2._capt.call(_context.t2, _context.t3, 'arguments/0/left');
          _context.t5 = _context.t4 === 3;
          _context.t6 = _context.t1._capt.call(_context.t1, _context.t5, 'arguments/0');
          _context.t7 = {
            content: 'assert((yield a) === 3)',
            filepath: 'test/fixtures/YieldExpression/fixture.js',
            line: 4,
            generator: true
          };
          _context.t8 = _context.t0._expr.call(_context.t0, _context.t6, _context.t7);
          assert(_context.t8);

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

// function notGen(a){
//   assert((yield (a)) === 3);
// }
