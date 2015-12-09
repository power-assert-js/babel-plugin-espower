'use strict';

var _powerAssertRecorder = function _powerAssertRecorder() { var events = []; function _capt(value, espath) { events.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var captured = events; events = []; var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } step("next"); }); }; }

var myAsync = (function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(a) {
    var _rec = _powerAssertRecorder();

    return regeneratorRuntime.wrap(function _callee$(_context) {
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
              content: 'assert(await a === 3)',
              filepath: 'test/fixtures/AwaitExpression/fixture.js',
              line: 4,
              async: true
            };
            _context.t8 = _context.t0._expr.call(_context.t0, _context.t6, _context.t7);
            assert(_context.t8);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function myAsync(_x) {
    return ref.apply(this, arguments);
  };
})();

// function notAsync(a){
//   assert((await (a)) === 3);
// }
