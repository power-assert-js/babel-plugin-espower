'use strict';

var _powerAssertConfig = ["assert(value, [message])", "assert.ok(value, [message])", "assert.equal(actual, expected, [message])", "assert.notEqual(actual, expected, [message])", "assert.strictEqual(actual, expected, [message])", "assert.notStrictEqual(actual, expected, [message])", { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }],
    _am = {
  content: "assert((2, 1, 0))",
  filepath: "test/fixtures/SequenceExpression/fixture.js",
  line: 3
},
    _ArgumentRecorder = function () { function ArgumentRecorder(callee, am, ag) { this._callee = callee; this._metadata = am; this._argDef = ag; this._logs = []; this._recorded = null; this._value = null; this._isBlock = false; if (am.config) { var argconf = am.config.args[ag.index]; this._isBlock = !!argconf.block; } } ArgumentRecorder.prototype.metadata = function metadata() { return this._metadata; }; ArgumentRecorder.prototype.code = function code() { return this._argDef.code; }; ArgumentRecorder.prototype.value = function value() { return this._value; }; ArgumentRecorder.prototype._tap = function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; }; ArgumentRecorder.prototype._rec = function _rec(value, espath) { var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && this._callee && this._callee._empowered && typeof value === 'function') { value = new Proxy(value, { apply: function (target, thisArg, argumentsList) { var ret; try { ret = target.apply(thisArg, argumentsList); log.value = wrap(ret); } catch (e) { log.value = e; throw e; } return ret; } }); } this._value = value; this._recorded = { value: value, logs: [].concat(this._logs) }; this._logs = []; if (this._callee && this._callee._empowered) { return this; } else { return value; } }; ArgumentRecorder.prototype.eject = function eject() { var result = this._recorded; this._recorded = null; this._value = null; return result; }; function isPromiseLike(o) { return o !== null && typeof o === 'object' && typeof o.then === 'function' && typeof o.catch === 'function'; } function $Promise$(prms) { this.status = 'pending'; prms.then(mark(this, 'resolved'), mark(this, 'rejected')); } function mark(_this, s) { return function () { var args = Array.prototype.slice.apply(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; } function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am, {
  espath: "arguments/0",
  code: "2, 1, 0",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am2 = {
  content: "assert((foo, bar) === baz)",
  filepath: "test/fixtures/SequenceExpression/fixture.js",
  line: 5
},
    _ag2 = new _ArgumentRecorder(assert, _am2, {
  espath: "arguments/0",
  code: "(foo, bar) === baz",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _AssertionMessage = function () { function AssertionMessage(argRecs, metadata, message) { this._argRecs = argRecs; this._metadata = metadata; this._message = message; } AssertionMessage.prototype.value = function value() { if (this._message && typeof this._message.value === 'function') { return this._message.value(); } else { return this._message; } }; AssertionMessage.prototype.eject = function eject() { if (this._message && typeof this._message.eject === 'function') { return this._message.eject(); } else { return { value: this.value(), logs: [] }; } }; AssertionMessage.prototype.toString = function toString() { var message = this._message ? this._message : ''; message += '\n----------'; message += '\n  code: ' + this._metadata.content; message += '\n  line: ' + this._metadata.filepath + ':' + this._metadata.line; var argRec; for (var i = 0; i < this._argRecs.length; i += 1) { argRec = this._argRecs[i]; message += '\n  arg' + i + ': '; message += '\n    code: ' + argRec.code(); message += '\n    value: ' + argRec.value(); message += '\n    type: ' + typeof argRec.value(); } message += '\n'; message += '[NOTICE] configure power-assert for more verbose report. see: https://github.com/power-assert-js/power-assert'; message += '\n----------'; return message; }; return AssertionMessage; }(),
    _am3 = {
  content: "assert(toto((tata, titi)))",
  filepath: "test/fixtures/SequenceExpression/fixture.js",
  line: 7
},
    _ag3 = new _ArgumentRecorder(assert, _am3, {
  espath: "arguments/0",
  code: "toto((tata, titi))",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am4 = {
  content: "assert((foo, (bar, baz)))",
  filepath: "test/fixtures/SequenceExpression/fixture.js",
  line: 9
},
    _ag4 = new _ArgumentRecorder(assert, _am4, {
  espath: "arguments/0",
  code: "foo, (bar, baz)",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am5 = {
  content: "assert((((((foo, bar), baz), toto), tata), titi))",
  filepath: "test/fixtures/SequenceExpression/fixture.js",
  line: 11
},
    _ag5 = new _ArgumentRecorder(assert, _am5, {
  espath: "arguments/0",
  code: "((((foo, bar), baz), toto), tata), titi",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am6 = {
  content: "assert((y = x, z))",
  filepath: "test/fixtures/SequenceExpression/fixture.js",
  line: 13
},
    _ag6 = new _ArgumentRecorder(assert, _am6, {
  espath: "arguments/0",
  code: "y = x, z",
  index: 0,
  name: "value",
  kind: "mandatory"
});

assert((2, 1, 0));
assert(_ag2._rec((_ag2._tap(foo, "arguments/0/left/expressions/0"), _ag2._tap(bar, "arguments/0/left/expressions/1")) === _ag2._tap(baz, "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag2], _am2));
assert(_ag3._rec(toto((_ag3._tap(tata, "arguments/0/arguments/0/expressions/0"), _ag3._tap(titi, "arguments/0/arguments/0/expressions/1"))), "arguments/0"), new _AssertionMessage([_ag3], _am3));
assert(_ag4._rec((_ag4._tap(foo, "arguments/0/expressions/0"), (_ag4._tap(bar, "arguments/0/expressions/1/expressions/0"), _ag4._tap(baz, "arguments/0/expressions/1/expressions/1"))), "arguments/0"), new _AssertionMessage([_ag4], _am4));
assert(_ag5._rec((((((_ag5._tap(foo, "arguments/0/expressions/0/expressions/0/expressions/0/expressions/0/expressions/0"), _ag5._tap(bar, "arguments/0/expressions/0/expressions/0/expressions/0/expressions/0/expressions/1")), _ag5._tap(baz, "arguments/0/expressions/0/expressions/0/expressions/0/expressions/1")), _ag5._tap(toto, "arguments/0/expressions/0/expressions/0/expressions/1")), _ag5._tap(tata, "arguments/0/expressions/0/expressions/1")), _ag5._tap(titi, "arguments/0/expressions/1")), "arguments/0"), new _AssertionMessage([_ag5], _am5));
assert(_ag6._rec((_ag6._tap(y = _ag6._tap(x, "arguments/0/expressions/0/right"), "arguments/0/expressions/0"), _ag6._tap(z, "arguments/0/expressions/1")), "arguments/0"), new _AssertionMessage([_ag6], _am6));
