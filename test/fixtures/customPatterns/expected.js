'use strict';

var _pwmeta = (ptnidx, content, filepath, line, extra) => { const version = 2, patterns = [{ pattern: "assert.isNull(object, [message])", params: [{ index: 0, name: "object", kind: "mandatory" }, { index: 1, name: "message", kind: "optional", message: true }] }, { pattern: "assert.same(actual, expected, [message])", params: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.near(actual, expected, delta, [message])", params: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "delta", kind: "mandatory" }, { index: 3, name: "message", kind: "optional", message: true }] }]; return Object.assign({ version, content, filepath, line }, extra, patterns[ptnidx]); },
    _am = _pwmeta(0, "assert.isNull(falsy)", "test/fixtures/customPatterns/fixture.js", 3),
    _ArgumentRecorder = function () { const isPromiseLike = o => o !== null && typeof o === "object" && typeof o.then === "function" && typeof o.catch === "function"; const mark = (_this, s) => { return function () { const args = Array.from(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; }; class $Promise$ { constructor(prms) { this.status = "pending"; prms.then(mark(this, "resolved"), mark(this, "rejected")); } } const wrap = v => isPromiseLike(v) ? new $Promise$(v) : v; class ArgumentRecorder { constructor(callee, am, matchIndex) { this._callee = callee; this._am = am; this._logs = []; this._recorded = null; this._val = null; this._idx = matchIndex; const conf = am.params[matchIndex]; this._isBlock = !!conf.block; } metadata() { return this._am; } matchIndex() { return this._idx; } val() { return this._val; } _tap(value, espath) { this._logs.push({ value: wrap(value), espath }); return value; } _rec(value, espath) { const empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; if (!espath) return this; const log = { value: wrap(value), espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === "function") { value = new Proxy(value, { apply(target, thisArg, args) { try { const ret = target.apply(thisArg, args); log.value = wrap(ret); return ret; } catch (e) { log.value = e; throw e; } } }); } return this; } finally { if (empowered) { this._recorded = { value, logs: [].concat(this._logs) }; } this._val = value; this._logs = []; } } eject() { const ret = this._recorded; this._recorded = null; this._val = null; return ret; } } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert.isNull, _am, 0),
    _AssertionMessage = function () { const _s = "\n\n      "; class AssertionMessage { constructor(am, matchIndex, msgOrRec) { this._am = am; this._idx = matchIndex; this._msgOrRec = msgOrRec; } metadata() { return this._am; } matchIndex() { return this._idx; } val() { if (this._msgOrRec && typeof this._msgOrRec.val === "function") { return this._msgOrRec.val(); } else { return this._msgOrRec; } } eject() { if (this._msgOrRec && typeof this._msgOrRec.eject === "function") { return this._msgOrRec.eject(); } else { return { value: this.val(), logs: [] }; } } toString() { let msg = typeof this._msgOrRec === "string" ? this._msgOrRec : ""; msg += `${_s}# ${this._am.filepath}:${this._am.line}`; msg += `${_s}${this._am.content}`; msg += `${_s}[WARNING] power-assert is not configured. see: https://github.com/power-assert-js/power-assert`; msg += `\n`; return msg; } } return AssertionMessage; }(),
    _am2 = _pwmeta(0, "assert.isNull(falsy, message)", "test/fixtures/customPatterns/fixture.js", 5),
    _ag2 = new _ArgumentRecorder(assert.isNull, _am2, 0),
    _ag3 = new _ArgumentRecorder(assert.isNull, _am2, 1),
    _am3 = _pwmeta(1, "assert.same(foo, bar)", "test/fixtures/customPatterns/fixture.js", 7),
    _ag4 = new _ArgumentRecorder(assert.same, _am3, 0),
    _ag5 = new _ArgumentRecorder(assert.same, _am3, 1),
    _am4 = _pwmeta(1, "assert.same(foo, bar, message)", "test/fixtures/customPatterns/fixture.js", 9),
    _ag6 = new _ArgumentRecorder(assert.same, _am4, 0),
    _ag7 = new _ArgumentRecorder(assert.same, _am4, 1),
    _ag8 = new _ArgumentRecorder(assert.same, _am4, 2),
    _am5 = _pwmeta(2, "assert.near(actualVal, expectedVal, delta)", "test/fixtures/customPatterns/fixture.js", 13),
    _ag9 = new _ArgumentRecorder(assert.near, _am5, 0),
    _ag10 = new _ArgumentRecorder(assert.near, _am5, 1),
    _ag11 = new _ArgumentRecorder(assert.near, _am5, 2),
    _am6 = _pwmeta(2, "assert.near(actualVal, expectedVal, delta, message)", "test/fixtures/customPatterns/fixture.js", 15),
    _ag12 = new _ArgumentRecorder(assert.near, _am6, 0),
    _ag13 = new _ArgumentRecorder(assert.near, _am6, 1),
    _ag14 = new _ArgumentRecorder(assert.near, _am6, 2),
    _ag15 = new _ArgumentRecorder(assert.near, _am6, 3);

assert.isNull(_ag._rec(falsy, "arguments/0"), new _AssertionMessage(_am, -1));
assert.isNull(_ag2._rec(falsy, "arguments/0"), new _AssertionMessage(_am2, 1, _ag3._rec(message, "arguments/1")));
assert.same(_ag4._rec(foo, "arguments/0"), _ag5._rec(bar, "arguments/1"), new _AssertionMessage(_am3, -1));
assert.same(_ag6._rec(foo, "arguments/0"), _ag7._rec(bar, "arguments/1"), new _AssertionMessage(_am4, 2, _ag8._rec(message, "arguments/2")));
assert.near(actualVal, expectedVal);
assert.near(_ag9._rec(actualVal, "arguments/0"), _ag10._rec(expectedVal, "arguments/1"), _ag11._rec(delta, "arguments/2"), new _AssertionMessage(_am5, -1));
assert.near(_ag12._rec(actualVal, "arguments/0"), _ag13._rec(expectedVal, "arguments/1"), _ag14._rec(delta, "arguments/2"), new _AssertionMessage(_am6, 3, _ag15._rec(message, "arguments/3")));
