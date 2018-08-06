'use strict';

var ArgumentRecorder = require('../lib/argument-recorder')();

var assert = require('assert');

function willResolve (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(value);
        }, 10);
    });
}

describe('to-be-embedded argument-recorder', function () {
    var foo, _ar;
    beforeEach(function () {
        foo = 'FOO';
        _ar = new ArgumentRecorder({
            espath: 'arguments/0',
            code: 'foo'
        });
    });

    describe('#_tap(value, espath)', function () {
        it('returns tapped value untouched', function () {
            var ret = _ar._tap(foo, 'arguments/0');
            assert.equal(ret, 'FOO');
        });
        it('returns argument untouched', function () {
            var ret = _ar._tap(foo, 'arguments/0');
            assert(ret === foo);
        });
    });

    describe('#code()', function () {
        it('returns canonical code of target argument', function () {
            assert.equal(_ar.code(), 'foo');
        });
    });

    describe('#value()', function () {
        it('returns null if not recorded yet', function () {
            assert.equal(_ar.value(), null);
        });
        it('returns recorded actual value of target argument', function () {
            _ar._rec(_ar._tap(foo, 'arguments/0'));
            assert.equal(_ar.value(), 'FOO');
        });
    });

    describe('#_rec(value)', function () {
        it('returns value untouched', function () {
            var ret = _ar._rec(_ar._tap(foo, 'arguments/0'));
            assert.equal(ret, 'FOO');
        });
        it('once called, argument value is stored', function () {
            _ar._rec(_ar._tap(foo, 'arguments/0'));
            assert.equal(_ar.value(), 'FOO');
        });
    });

    describe('#eject()', function () {
        beforeEach(function () {
            _ar._rec(_ar._tap(foo, 'arguments/0'));
            assert.equal(_ar.value(), 'FOO');
        });
        it('returns recorded values and its metadata', function () {
            var recordedData = _ar.eject();
            assert.deepEqual(recordedData, {
                logs: [
                    {
                        espath: "arguments/0",
                        value: "FOO"
                    }
                ],
                value: "FOO"
            });
        });
        it('clears stored argument value', function () {
            _ar.eject();
            assert.equal(_ar.value(), null);
        });
        it('for asserting loop invariants, recorder should clean up captured values at the end of expression', function () {
            var incr = (function () {
                var cnt = 0;
                return function () {
                    return ++cnt;
                };
            })();
            var _ar = new ArgumentRecorder({
                espath: 'arguments/0',
                code: 'incr()'
            });
            var actualRecordedData = [];
            for (var i = 0; i < 3; i += 1) {
                _ar._rec(_ar._tap(incr(), 'arguments/0'));
                actualRecordedData.push(_ar.eject());
            }
            assert.deepEqual(actualRecordedData, [
                {
                    logs: [
                        {
                            espath: "arguments/0",
                            value: 1
                        }
                    ],
                    value: 1
                },
                {
                    logs: [
                        {
                            espath: "arguments/0",
                            value: 2
                        }
                    ],
                    value: 2
                },
                {
                    logs: [
                        {
                            espath: "arguments/0",
                            value: 3
                        }
                    ],
                    value: 3
                }
            ]);
        });
    });

    describe('when value is a Promise', function () {
        beforeEach(function () {
            foo = willResolve('future');
        });
        it('return value of _tap(value, espath) is still untouched', function () {
            var ret = _ar._tap(foo, 'arguments/0');
            assert(ret === foo);
        });
        it('return value of _rec(value) is still untouched', function () {
            var ret = _ar._rec(_ar._tap(foo, 'arguments/0'));
            assert(ret === foo);
        });
        it('return value of value() is still untouched', function () {
            _ar._rec(_ar._tap(foo, 'arguments/0'));
            assert.equal(_ar.value(), foo);
        });
        it('Promises in recorded logs are wrapped', function () {
            _ar._rec(_ar._tap(foo, 'arguments/0'));
            var recordedData = _ar.eject();
            assert.strictEqual(recordedData.value, foo, 'return value is untouched');
            var wrapped = recordedData.logs[0].value;
            assert.notStrictEqual(wrapped, foo, 'Promises in logs are wrapped');
        });
        it('store Promise status and callback value when settled', function (done) {
            _ar._rec(_ar._tap(foo, 'arguments/0'));
            var recordedData = _ar.eject();
            var wrapped = recordedData.logs[0].value;
            assert(wrapped.status === 'pending');
            assert(wrapped.value === undefined);
            foo.then(function (_) {
                assert.equal(wrapped.status, 'resolved');
                assert.equal(wrapped.value, 'future');
                done();
            });
        });
    });

    describe('when value is a function', function () {
        beforeEach(function () {
            foo = function () { return 'FUNC'; };
        });
        it('return value of _tap(value, espath) is wrapped', function () {
            var ret = _ar._tap(foo, 'arguments/0');
            assert(ret !== foo);
            assert(typeof ret === 'function');
        });
        it('return value of _rec(value) is since return value of #_tap is wrapped', function () {
            var ret = _ar._rec(_ar._tap(foo, 'arguments/0'));
            assert(ret !== foo);
            assert(typeof ret === 'function');
        });
        it('return value of value() is still wrapped', function () {
            _ar._rec(_ar._tap(foo, 'arguments/0'));
            assert(_ar.value() !== foo);
            assert(typeof _ar.value() === 'function');
        });
        it('store invocation result when invoked', function () {
            var wrapped = _ar._rec(_ar._tap(foo, 'arguments/0'));
            var recordedData = _ar.eject();
            assert.equal(recordedData.logs[0].value, foo);
            var ret = wrapped();
            assert(ret === 'FUNC');
            assert.equal(recordedData.logs[0].value, 'FUNC');
        });
    });

});
