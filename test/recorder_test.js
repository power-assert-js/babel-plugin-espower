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

var am = {
    pattern: 'assert(value, [message])',
    args: [
        {
            name: 'value',
            index: 0,
            kind: 'mandatory'
        },
        {
            name: 'message',
            index: 1,
            kind: 'optional',
            message: true
        }
    ]
};

describe('to-be-embedded argument-recorder', function () {
    var foo, _ar, fakeCallee = function () {};
    beforeEach(function () {
        foo = 'FOO';
        fakeCallee._empowered = true;
        _ar = new ArgumentRecorder(fakeCallee, am, 1);
    });
    afterEach(function () {
        fakeCallee._empowered = true;
    });

    describe('#_tap(value, espath)', function () {
        it('returns argument untouched', function () {
            var ret = _ar._tap(foo, 'arguments/0');
            assert(ret === foo);
        });
        it('tapped value is not modified', function () {
            var ret = _ar._tap(foo, 'arguments/0');
            assert.equal(ret, 'FOO');
        });
    });

    describe('#val()', function () {
        it('returns null if not recorded yet', function () {
            assert.equal(_ar.val(), null);
        });
        it('returns recorded actual value of target argument', function () {
            _ar._rec(_ar._tap(foo, 'arguments/0'));
            assert.equal(_ar.val(), 'FOO');
        });
    });

    describe('#_rec(value)', function () {
        describe('when runtime exists', function () {
            beforeEach(function () {
                fakeCallee._empowered = true;
            });
            it('returns self if runtime exists', function () {
                var ret = _ar._rec(_ar._tap(foo, 'arguments/0'));
                assert(ret === _ar);
            });
        });
        describe('when runtime does not exist', function () {
            beforeEach(function () {
                fakeCallee._empowered = false;
            });
            it('returns value untouched', function () {
                var ret = _ar._rec(_ar._tap(foo, 'arguments/0'));
                assert.equal(ret, 'FOO');
            });
        });
        it('once called, argument value is stored', function () {
            _ar._rec(_ar._tap(foo, 'arguments/0'));
            assert.equal(_ar.val(), 'FOO');
        });
    });

    describe('#eject()', function () {
        beforeEach(function () {
            _ar._rec(foo, 'arguments/0');
            assert.equal(_ar.val(), 'FOO');
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
            assert.equal(_ar.val(), null);
        });
        it('for asserting loop invariants, recorder should clean up captured values at the end of expression', function () {
            var incr = (function () {
                var cnt = 0;
                return function () {
                    return ++cnt;
                };
            })();
            var fakeCallee = function () {
            };
            fakeCallee._empowered = true;
            var _ar = new ArgumentRecorder(fakeCallee, am, 1);
            var actualRecordedData = [];
            for (var i = 0; i < 3; i += 1) {
                _ar._rec(incr(), 'arguments/0');
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
        describe('when runtime exists', function () {
            beforeEach(function () {
                fakeCallee._empowered = true;
            });
            it('_rec(value) returns self', function () {
                var ret = _ar._rec(_ar._tap(foo, 'arguments/0'));
                assert(ret === _ar);
            });
            it('return value of _tap(value, espath) is still untouched', function () {
                var ret = _ar._tap(foo, 'arguments/0');
                assert(ret === foo);
            });
            it('return value of val() is still untouched', function () {
                _ar._rec(_ar._tap(foo, 'arguments/0'));
                assert(_ar.val() === foo);
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
        describe('when runtime does not exist', function () {
            beforeEach(function () {
                fakeCallee._empowered = false;
            });
            it('return value of _rec(value) is still untouched', function () {
                var ret = _ar._rec(_ar._tap(foo, 'arguments/0'));
                assert(ret === foo);
            });
            it('return value of _tap(value, espath) is still untouched', function () {
                var ret = _ar._tap(foo, 'arguments/0');
                assert(ret === foo);
            });
            it('return value of val() is still untouched', function () {
                _ar._rec(_ar._tap(foo, 'arguments/0'));
                assert(_ar.val() === foo);
            });
        });

    });

    describe('when value is a function', function () {
        beforeEach(function () {
            foo = function () { return 'FUNC'; };
        });
        describe('when runtime exists', function () {
            beforeEach(function () {
                fakeCallee._empowered = true;
            });
            it('_rec(value) returns self', function () {
                var ret = _ar._rec(_ar._tap(foo, 'arguments/0'));
                assert.equal(ret, _ar);
            });
        });
        describe('when runtime does not exist', function () {
            beforeEach(function () {
                fakeCallee._empowered = false;
            });
            it('return value of _tap(value, espath) is untouched', function () {
                var ret = _ar._tap(foo, 'arguments/0');
                assert(ret === foo);
                assert(typeof ret === 'function');
            });
            it('return value of _rec(value) is untouched', function () {
                var ret = _ar._rec(_ar._tap(foo, 'arguments/0'));
                assert(ret === foo);
            });
            it('return value of val() is untouched', function () {
                _ar._rec(_ar._tap(foo, 'arguments/0'));
                assert(_ar.val() === foo);
                assert(typeof _ar.val() === 'function');
            });
        });
    });

});
