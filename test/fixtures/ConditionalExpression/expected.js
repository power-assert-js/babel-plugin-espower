'use strict';

var _powerAssertConfig = ["assert(value, [message])", "assert.ok(value, [message])", "assert.equal(actual, expected, [message])", "assert.notEqual(actual, expected, [message])", "assert.strictEqual(actual, expected, [message])", "assert.notStrictEqual(actual, expected, [message])", { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }],
    _am = {
  content: "assert(foo ? bar : baz)",
  filepath: "test/fixtures/ConditionalExpression/fixture.js",
  line: 3,
  config: _powerAssertConfig[0]
},
    _ArgumentRecorder = function () { function ArgumentRecorder(callee, am, ag) { this._callee = callee; this._metadata = am; this._argDef = ag; this._logs = []; this._recorded = null; this._value = null; this._isBlock = false; if (am.config) { this.pattern = am.config.pattern; var argconf = am.config.args[ag.index]; this._isBlock = !!argconf.block; } } ArgumentRecorder.prototype.metadata = function metadata() { return this._metadata; }; ArgumentRecorder.prototype.code = function code() { return this._argDef.code; }; ArgumentRecorder.prototype.value = function value() { return this._value; }; ArgumentRecorder.prototype._tap = function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; }; ArgumentRecorder.prototype._rec = function _rec(value, espath) { var empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === 'function') { value = new Proxy(value, { apply: function (target, thisArg, argumentsList) { var ret; try { ret = target.apply(thisArg, argumentsList); log.value = wrap(ret); } catch (e) { log.value = e; throw e; } return ret; } }); } this._recorded = { value: value, logs: [].concat(this._logs) }; return this; } finally { this._value = value; this._logs = []; } }; ArgumentRecorder.prototype.eject = function eject() { var result = this._recorded; this._recorded = null; this._value = null; return result; }; function isPromiseLike(o) { return o !== null && typeof o === 'object' && typeof o.then === 'function' && typeof o.catch === 'function'; } function $Promise$(prms) { this.status = 'pending'; prms.then(mark(this, 'resolved'), mark(this, 'rejected')); } function mark(_this, s) { return function () { var args = Array.prototype.slice.apply(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; } function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am, {
  espath: "arguments/0",
  code: "foo ? bar : baz",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _AssertionMessage = function () { function AssertionMessage(argRecs, metadata, message) { this._argRecs = argRecs; this._metadata = metadata; this._message = message; } AssertionMessage.prototype.value = function value() { if (this._message && typeof this._message.value === 'function') { return this._message.value(); } else { return this._message; } }; AssertionMessage.prototype.eject = function eject() { if (this._message && typeof this._message.eject === 'function') { return this._message.eject(); } else { return { value: this.value(), logs: [] }; } }; AssertionMessage.prototype.toString = function toString() { var message = this._message ? this._message : ''; message += '\n----------'; message += '\n  code: ' + this._metadata.content; message += '\n  line: ' + this._metadata.filepath + ':' + this._metadata.line; var argRec; for (var i = 0; i < this._argRecs.length; i += 1) { argRec = this._argRecs[i]; message += '\n  arg' + i + ': '; message += '\n    code: ' + argRec.code(); message += '\n    value: ' + argRec.value(); message += '\n    type: ' + typeof argRec.value(); } message += '\n'; message += '[NOTICE] configure power-assert for more verbose report. see: https://github.com/power-assert-js/power-assert'; message += '\n----------'; return message; }; return AssertionMessage; }(),
    _am2 = {
  content: "assert(falsy ? truthy : truthy ? anotherFalsy : truthy)",
  filepath: "test/fixtures/ConditionalExpression/fixture.js",
  line: 5,
  config: _powerAssertConfig[0]
},
    _ag2 = new _ArgumentRecorder(assert, _am2, {
  espath: "arguments/0",
  code: "falsy ? truthy : truthy ? anotherFalsy : truthy",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am3 = {
  content: "assert(foo() ? bar.baz : typeof goo)",
  filepath: "test/fixtures/ConditionalExpression/fixture.js",
  line: 7,
  config: _powerAssertConfig[0]
},
    _ag3 = new _ArgumentRecorder(assert, _am3, {
  espath: "arguments/0",
  code: "foo() ? bar.baz : typeof goo",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am4 = {
  content: "assert.equal(foo ? bar : baz, falsy ? truthy : truthy ? anotherFalsy : truthy)",
  filepath: "test/fixtures/ConditionalExpression/fixture.js",
  line: 9,
  config: _powerAssertConfig[2]
},
    _ag4 = new _ArgumentRecorder(assert.equal, _am4, {
  espath: "arguments/0",
  code: "foo ? bar : baz",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag5 = new _ArgumentRecorder(assert.equal, _am4, {
  espath: "arguments/1",
  code: "falsy ? truthy : truthy ? anotherFalsy : truthy",
  index: 1,
  name: "expected",
  kind: "mandatory"
});

assert(_ag._rec(_ag._tap(foo, "arguments/0/test") ? _ag._tap(bar, "arguments/0/consequent") : _ag._tap(baz, "arguments/0/alternate"), "arguments/0"), new _AssertionMessage([_ag], _am));
assert(_ag2._rec(_ag2._tap(falsy, "arguments/0/test") ? _ag2._tap(truthy, "arguments/0/consequent") : _ag2._tap(truthy, "arguments/0/alternate/test") ? _ag2._tap(anotherFalsy, "arguments/0/alternate/consequent") : _ag2._tap(truthy, "arguments/0/alternate/alternate"), "arguments/0"), new _AssertionMessage([_ag2], _am2));
assert(_ag3._rec(_ag3._tap(foo(), "arguments/0/test") ? _ag3._tap(_ag3._tap(bar, "arguments/0/consequent/object").baz, "arguments/0/consequent") : _ag3._tap(typeof goo, "arguments/0/alternate"), "arguments/0"), new _AssertionMessage([_ag3], _am3));
assert.equal(_ag4._rec(_ag4._tap(foo, "arguments/0/test") ? _ag4._tap(bar, "arguments/0/consequent") : _ag4._tap(baz, "arguments/0/alternate"), "arguments/0"), _ag5._rec(_ag5._tap(falsy, "arguments/1/test") ? _ag5._tap(truthy, "arguments/1/consequent") : _ag5._tap(truthy, "arguments/1/alternate/test") ? _ag5._tap(anotherFalsy, "arguments/1/alternate/consequent") : _ag5._tap(truthy, "arguments/1/alternate/alternate"), "arguments/1"), new _AssertionMessage([_ag4, _ag5], _am4));
