'use strict';

var _pwmeta = (ptnidx, content, filepath, line, extra) => { const version = 2, patterns = [{ pattern: "assert(value, [message])", args: [{ index: 0, name: "value", kind: "mandatory" }, { index: 1, name: "message", kind: "optional", message: true }] }, { pattern: "assert.ok(value, [message])", args: [{ index: 0, name: "value", kind: "mandatory" }, { index: 1, name: "message", kind: "optional", message: true }] }, { pattern: "assert.equal(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.strictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ index: 0, name: "fn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ index: 0, name: "fn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ index: 0, name: "asyncFn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ index: 0, name: "asyncFn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }]; return { version, content, filepath, line, ...extra, ...patterns[ptnidx] }; },
    _am = _pwmeta(0, "assert((2, 1, 0))", "test/fixtures/SequenceExpression/fixture.js", 3),
    _ArgumentRecorder = function () { const isPromiseLike = o => o !== null && typeof o === "object" && typeof o.then === "function" && typeof o.catch === "function"; const mark = (_this, s) => { return function () { const args = Array.from(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; }; class $Promise$ { constructor(prms) { this.status = "pending"; prms.then(mark(this, "resolved"), mark(this, "rejected")); } } const wrap = v => isPromiseLike(v) ? new $Promise$(v) : v; class ArgumentRecorder { constructor(callee, am, matchIndex) { this._callee = callee; this._am = am; this._logs = []; this._recorded = null; this._val = null; this._idx = matchIndex; const argconf = am.args[matchIndex]; this._isBlock = !!argconf.block; } metadata() { return this._am; } matchIndex() { return this._idx; } val() { return this._val; } _tap(value, espath) { this._logs.push({ value: wrap(value), espath }); return value; } _rec(value, espath) { const empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; const log = { value: wrap(value), espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === "function") { value = new Proxy(value, { apply(target, thisArg, args) { try { const ret = target.apply(thisArg, args); log.value = wrap(ret); return ret; } catch (e) { log.value = e; throw e; } } }); } this._recorded = { value, logs: [].concat(this._logs) }; return this; } finally { this._val = value; this._logs = []; } } eject() { const ret = this._recorded; this._recorded = null; this._val = null; return ret; } } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am, 0),
    _am2 = _pwmeta(0, "assert((foo, bar) === baz)", "test/fixtures/SequenceExpression/fixture.js", 5),
    _ag2 = new _ArgumentRecorder(assert, _am2, 0),
    _AssertionMessage = function () { const _s = "\n\n      "; class AssertionMessage { constructor(am, matchIndex, msgOrRec) { this._am = am; this._idx = matchIndex; this._msgOrRec = msgOrRec; } metadata() { return this._am; } matchIndex() { return this._idx; } val() { if (this._msgOrRec && typeof this._msgOrRec.val === "function") { return this._msgOrRec.val(); } else { return this._msgOrRec; } } eject() { if (this._msgOrRec && typeof this._msgOrRec.eject === "function") { return this._msgOrRec.eject(); } else { return { value: this.val(), logs: [] }; } } toString() { let msg = typeof this._msgOrRec === "string" ? this._msgOrRec : ""; msg += `${_s}# ${this._am.filepath}:${this._am.line}`; msg += `${_s}${this._am.content}`; msg += `${_s}[WARNING] power-assert is not configured. see: https://github.com/power-assert-js/power-assert`; msg += `\n`; return msg; } } return AssertionMessage; }(),
    _am3 = _pwmeta(0, "assert(toto((tata, titi)))", "test/fixtures/SequenceExpression/fixture.js", 7),
    _ag3 = new _ArgumentRecorder(assert, _am3, 0),
    _am4 = _pwmeta(0, "assert((foo, (bar, baz)))", "test/fixtures/SequenceExpression/fixture.js", 9),
    _ag4 = new _ArgumentRecorder(assert, _am4, 0),
    _am5 = _pwmeta(0, "assert((((((foo, bar), baz), toto), tata), titi))", "test/fixtures/SequenceExpression/fixture.js", 11),
    _ag5 = new _ArgumentRecorder(assert, _am5, 0),
    _am6 = _pwmeta(0, "assert((y = x, z))", "test/fixtures/SequenceExpression/fixture.js", 13),
    _ag6 = new _ArgumentRecorder(assert, _am6, 0);

assert((2, 1, 0));
assert(_ag2._rec((_ag2._tap(foo, "arguments/0/left/expressions/0"), _ag2._tap(bar, "arguments/0/left/expressions/1")) === _ag2._tap(baz, "arguments/0/right"), "arguments/0"), new _AssertionMessage(_am2, -1));
assert(_ag3._rec(toto((_ag3._tap(tata, "arguments/0/arguments/0/expressions/0"), _ag3._tap(titi, "arguments/0/arguments/0/expressions/1"))), "arguments/0"), new _AssertionMessage(_am3, -1));
assert(_ag4._rec((_ag4._tap(foo, "arguments/0/expressions/0"), (_ag4._tap(bar, "arguments/0/expressions/1/expressions/0"), _ag4._tap(baz, "arguments/0/expressions/1/expressions/1"))), "arguments/0"), new _AssertionMessage(_am4, -1));
assert(_ag5._rec((((((_ag5._tap(foo, "arguments/0/expressions/0/expressions/0/expressions/0/expressions/0/expressions/0"), _ag5._tap(bar, "arguments/0/expressions/0/expressions/0/expressions/0/expressions/0/expressions/1")), _ag5._tap(baz, "arguments/0/expressions/0/expressions/0/expressions/0/expressions/1")), _ag5._tap(toto, "arguments/0/expressions/0/expressions/0/expressions/1")), _ag5._tap(tata, "arguments/0/expressions/0/expressions/1")), _ag5._tap(titi, "arguments/0/expressions/1")), "arguments/0"), new _AssertionMessage(_am5, -1));
assert(_ag6._rec((_ag6._tap(y = _ag6._tap(x, "arguments/0/expressions/0/right"), "arguments/0/expressions/0"), _ag6._tap(z, "arguments/0/expressions/1")), "arguments/0"), new _AssertionMessage(_am6, -1));
