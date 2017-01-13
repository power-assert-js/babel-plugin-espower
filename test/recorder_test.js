'use strict';

var PowerAssertRecorder = require('../lib/power-assert-recorder')();
var assert = require('assert');

describe('power-assert-recorder', function () {
    var foo = 'FOO';

    it('_capt', function () {
        var _rec = new PowerAssertRecorder();
        var identVal = _rec._capt(foo, 'arguments/0');
        assert.equal(identVal, 'FOO');
    });

    it('_expr', function () {
        var _rec = new PowerAssertRecorder();
        var capturedExpr = _rec._expr(_rec._capt(foo, 'arguments/0'), {
            content: 'assert(foo)',
            filepath: 'path/to/some_test.js',
            line: 1
        });
        assert.deepEqual(capturedExpr, {
            powerAssertContext: {
                events: [
                    {
                        espath: "arguments/0",
                        value: "FOO"
                    }
                ],
                value: "FOO"
            },
            source: {
                content: "assert(foo)",
                filepath: "path/to/some_test.js",
                line: 1
            }
        });
    });

    it('for asserting loop invariants, recorder should clean up captured values at the end of expression', function () {
        var incr = (function () {
            var cnt = 0;
            return function () {
                return ++cnt;
            };
        })();
        var _rec = new PowerAssertRecorder();
        var actual = [];
        for (var i = 0; i < 3; i += 1) {
            actual.push(_rec._expr(_rec._capt(incr(), 'arguments/0'), {
                content: 'assert(incr())',
                filepath: 'path/to/some_test.js',
                line: 1
            }));
        }
        assert.deepEqual(actual, [
            {
                powerAssertContext: {
                    events: [
                        {
                            espath: "arguments/0",
                            value: 1
                        }
                    ],
                    value: 1
                },
                source: {
                    content: "assert(incr())",
                    filepath: "path/to/some_test.js",
                    line: 1
                }
            },
            {
                powerAssertContext: {
                    events: [
                        {
                            espath: "arguments/0",
                            value: 2
                        }
                    ],
                    value: 2
                },
                source: {
                    content: "assert(incr())",
                    filepath: "path/to/some_test.js",
                    line: 1
                }
            },
            {
                powerAssertContext: {
                    events: [
                        {
                            espath: "arguments/0",
                            value: 3
                        }
                    ],
                    value: 3
                },
                source: {
                    content: "assert(incr())",
                    filepath: "path/to/some_test.js",
                    line: 1
                }
            }
        ]);
    });

});
