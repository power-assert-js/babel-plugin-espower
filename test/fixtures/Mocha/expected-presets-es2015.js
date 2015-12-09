'use strict';

var _powerAssertRecorder = function _powerAssertRecorder() { var events = []; function _capt(value, espath) { events.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var captured = events; events = []; var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; };

var assert = require('power-assert');

describe('Array#indexOf()', function () {
    beforeEach(function () {
        this.ary = [1, 2, 3];
    });
    it('should return index when the value is present', function () {
        var _rec = _powerAssertRecorder();

        var who = 'ariya',
            two = 2;
        assert(_rec._expr(_rec._capt(_rec._capt(_rec._capt(this.ary, 'arguments/0/left/callee/object').indexOf(_rec._capt(who, 'arguments/0/left/arguments/0')), 'arguments/0/left') === _rec._capt(two, 'arguments/0/right'), 'arguments/0'), {
            content: 'assert(this.ary.indexOf(who) === two)',
            filepath: 'test/fixtures/Mocha/fixture.js',
            line: 11
        }));
    });
    it('should return -1 when the value is not present', function () {
        var _rec2 = _powerAssertRecorder();

        var minusOne = -1,
            two = 2;
        assert.ok(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(this.ary, 'arguments/0/left/callee/object').indexOf(_rec2._capt(two, 'arguments/0/left/arguments/0')), 'arguments/0/left') === _rec2._capt(minusOne, 'arguments/0/right'), 'arguments/0'), {
            content: 'assert.ok(this.ary.indexOf(two) === minusOne, \'THIS IS AN ASSERTION MESSAGE\')',
            filepath: 'test/fixtures/Mocha/fixture.js',
            line: 15
        }), 'THIS IS AN ASSERTION MESSAGE');
    });
});
