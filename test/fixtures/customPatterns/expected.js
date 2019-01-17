'use strict';

var _powerAssertConfig = ["assert.isNull(object, [message])", "assert.same(actual, expected, [message])", "assert.near(actual, expected, delta, [message])"],
    _am = {
  content: "assert.isNull(falsy)",
  filepath: "test/fixtures/customPatterns/fixture.js",
  line: 3,
  config: _powerAssertConfig[0]
},
    _ArgumentRecorder = function () { function ArgumentRecorder(callee, am, ag) { this._callee = callee; this._metadata = am; this._argDef = ag; this._logs = []; this._recorded = null; this._value = null; this._isBlock = false; if (am.config) { this.pattern = am.config.pattern; var argconf = am.config.args[ag.index]; this._isBlock = !!argconf.block; } } ArgumentRecorder.prototype.metadata = function metadata() { return this._metadata; }; ArgumentRecorder.prototype.code = function code() { return this._argDef.code; }; ArgumentRecorder.prototype.value = function value() { return this._value; }; ArgumentRecorder.prototype._tap = function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; }; ArgumentRecorder.prototype._rec = function _rec(value, espath) { var empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === 'function') { value = new Proxy(value, { apply: function (target, thisArg, argumentsList) { var ret; try { ret = target.apply(thisArg, argumentsList); log.value = wrap(ret); } catch (e) { log.value = e; throw e; } return ret; } }); } this._recorded = { value: value, logs: [].concat(this._logs) }; return this; } finally { this._value = value; this._logs = []; } }; ArgumentRecorder.prototype.eject = function eject() { var result = this._recorded; this._recorded = null; this._value = null; return result; }; function isPromiseLike(o) { return o !== null && typeof o === 'object' && typeof o.then === 'function' && typeof o.catch === 'function'; } function $Promise$(prms) { this.status = 'pending'; prms.then(mark(this, 'resolved'), mark(this, 'rejected')); } function mark(_this, s) { return function () { var args = Array.prototype.slice.apply(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; } function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert.isNull, _am, {
  espath: "arguments/0",
  code: "falsy",
  index: 0,
  name: "object",
  kind: "mandatory"
}),
    _AssertionMessage = function () { function AssertionMessage(argRecs, metadata, message) { this._argRecs = argRecs; this._metadata = metadata; this._message = message; } AssertionMessage.prototype.value = function value() { if (this._message && typeof this._message.value === 'function') { return this._message.value(); } else { return this._message; } }; AssertionMessage.prototype.eject = function eject() { if (this._message && typeof this._message.eject === 'function') { return this._message.eject(); } else { return { value: this.value(), logs: [] }; } }; AssertionMessage.prototype.toString = function toString() { var message = this._message ? this._message : ''; message += '\n----------'; message += '\n  code: ' + this._metadata.content; message += '\n  line: ' + this._metadata.filepath + ':' + this._metadata.line; var argRec; for (var i = 0; i < this._argRecs.length; i += 1) { argRec = this._argRecs[i]; message += '\n  arg' + i + ': '; message += '\n    code: ' + argRec.code(); message += '\n    value: ' + argRec.value(); message += '\n    type: ' + typeof argRec.value(); } message += '\n'; message += '[NOTICE] configure power-assert for more verbose report. see: https://github.com/power-assert-js/power-assert'; message += '\n----------'; return message; }; return AssertionMessage; }(),
    _am2 = {
  content: "assert.isNull(falsy, message)",
  filepath: "test/fixtures/customPatterns/fixture.js",
  line: 5,
  config: _powerAssertConfig[0]
},
    _ag2 = new _ArgumentRecorder(assert.isNull, _am2, {
  espath: "arguments/0",
  code: "falsy",
  index: 0,
  name: "object",
  kind: "mandatory"
}),
    _ag3 = new _ArgumentRecorder(assert.isNull, _am2, {
  espath: "arguments/1",
  code: "message",
  index: 1,
  name: "message",
  kind: "optional"
}),
    _am3 = {
  content: "assert.same(foo, bar)",
  filepath: "test/fixtures/customPatterns/fixture.js",
  line: 7,
  config: _powerAssertConfig[1]
},
    _ag4 = new _ArgumentRecorder(assert.same, _am3, {
  espath: "arguments/0",
  code: "foo",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag5 = new _ArgumentRecorder(assert.same, _am3, {
  espath: "arguments/1",
  code: "bar",
  index: 1,
  name: "expected",
  kind: "mandatory"
}),
    _am4 = {
  content: "assert.same(foo, bar, message)",
  filepath: "test/fixtures/customPatterns/fixture.js",
  line: 9,
  config: _powerAssertConfig[1]
},
    _ag6 = new _ArgumentRecorder(assert.same, _am4, {
  espath: "arguments/0",
  code: "foo",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag7 = new _ArgumentRecorder(assert.same, _am4, {
  espath: "arguments/1",
  code: "bar",
  index: 1,
  name: "expected",
  kind: "mandatory"
}),
    _ag8 = new _ArgumentRecorder(assert.same, _am4, {
  espath: "arguments/2",
  code: "message",
  index: 2,
  name: "message",
  kind: "optional"
}),
    _am5 = {
  content: "assert.near(actualVal, expectedVal, delta)",
  filepath: "test/fixtures/customPatterns/fixture.js",
  line: 13,
  config: _powerAssertConfig[2]
},
    _ag9 = new _ArgumentRecorder(assert.near, _am5, {
  espath: "arguments/0",
  code: "actualVal",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag10 = new _ArgumentRecorder(assert.near, _am5, {
  espath: "arguments/1",
  code: "expectedVal",
  index: 1,
  name: "expected",
  kind: "mandatory"
}),
    _ag11 = new _ArgumentRecorder(assert.near, _am5, {
  espath: "arguments/2",
  code: "delta",
  index: 2,
  name: "delta",
  kind: "mandatory"
}),
    _am6 = {
  content: "assert.near(actualVal, expectedVal, delta, message)",
  filepath: "test/fixtures/customPatterns/fixture.js",
  line: 15,
  config: _powerAssertConfig[2]
},
    _ag12 = new _ArgumentRecorder(assert.near, _am6, {
  espath: "arguments/0",
  code: "actualVal",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag13 = new _ArgumentRecorder(assert.near, _am6, {
  espath: "arguments/1",
  code: "expectedVal",
  index: 1,
  name: "expected",
  kind: "mandatory"
}),
    _ag14 = new _ArgumentRecorder(assert.near, _am6, {
  espath: "arguments/2",
  code: "delta",
  index: 2,
  name: "delta",
  kind: "mandatory"
}),
    _ag15 = new _ArgumentRecorder(assert.near, _am6, {
  espath: "arguments/3",
  code: "message",
  index: 3,
  name: "message",
  kind: "optional"
});

assert.isNull(_ag._rec(falsy, "arguments/0"), new _AssertionMessage([_ag], _am));
assert.isNull(_ag2._rec(falsy, "arguments/0"), new _AssertionMessage([_ag2, _ag3], _am2, _ag3._rec(message, "arguments/1")));
assert.same(_ag4._rec(foo, "arguments/0"), _ag5._rec(bar, "arguments/1"), new _AssertionMessage([_ag4, _ag5], _am3));
assert.same(_ag6._rec(foo, "arguments/0"), _ag7._rec(bar, "arguments/1"), new _AssertionMessage([_ag6, _ag7, _ag8], _am4, _ag8._rec(message, "arguments/2")));
assert.near(actualVal, expectedVal);
assert.near(_ag9._rec(actualVal, "arguments/0"), _ag10._rec(expectedVal, "arguments/1"), _ag11._rec(delta, "arguments/2"), new _AssertionMessage([_ag9, _ag10, _ag11], _am5));
assert.near(_ag12._rec(actualVal, "arguments/0"), _ag13._rec(expectedVal, "arguments/1"), _ag14._rec(delta, "arguments/2"), new _AssertionMessage([_ag12, _ag13, _ag14, _ag15], _am6, _ag15._rec(message, "arguments/3")));
