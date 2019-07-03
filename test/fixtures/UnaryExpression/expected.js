'use strict';

var _pwptn = JSON.parse("[{\"pattern\":\"assert(value, [message])\",\"params\":[{\"index\":0,\"name\":\"value\",\"kind\":\"mandatory\"},{\"index\":1,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.ok(value, [message])\",\"params\":[{\"index\":0,\"name\":\"value\",\"kind\":\"mandatory\"},{\"index\":1,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.equal(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\"},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\"},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.notEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\"},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\"},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.strictEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\"},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\"},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.notStrictEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\"},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\"},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.deepEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":2}},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":2}},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.notDeepEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":2}},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":2}},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.deepStrictEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":3}},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":3}},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.notDeepStrictEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":2}},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":2}},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.throws(fn, [error], [message])\",\"params\":[{\"index\":0,\"name\":\"fn\",\"kind\":\"mandatory\",\"block\":true},{\"index\":1,\"name\":\"error\",\"kind\":\"optional\",\"block\":true},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.doesNotThrow(fn, [error], [message])\",\"params\":[{\"index\":0,\"name\":\"fn\",\"kind\":\"mandatory\",\"block\":true},{\"index\":1,\"name\":\"error\",\"kind\":\"optional\",\"block\":true},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.rejects(asyncFn, [error], [message])\",\"params\":[{\"index\":0,\"name\":\"asyncFn\",\"kind\":\"mandatory\",\"block\":true},{\"index\":1,\"name\":\"error\",\"kind\":\"optional\",\"block\":true},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.doesNotReject(asyncFn, [error], [message])\",\"params\":[{\"index\":0,\"name\":\"asyncFn\",\"kind\":\"mandatory\",\"block\":true},{\"index\":1,\"name\":\"error\",\"kind\":\"optional\",\"block\":true},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]}]"),
    _pwmeta = (ptnidx, content, filepath, line, extra) => { return Object.assign({ version: 2, content, filepath, line }, extra, _pwptn[ptnidx]); },
    _am = _pwmeta(0, "assert(!truth)", "test/fixtures/UnaryExpression/fixture.js", 3),
    _ArgumentRecorder = function () { const isPromiseLike = o => o !== null && typeof o === "object" && typeof o.then === "function" && typeof o.catch === "function"; const mark = (_this, s) => { return function () { const args = Array.from(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; }; class $Promise$ { constructor(prms) { this.status = "pending"; prms.then(mark(this, "resolved"), mark(this, "rejected")); } } const wrap = v => isPromiseLike(v) ? new $Promise$(v) : v; class ArgumentRecorder { constructor(callee, am, matchIndex) { this._callee = callee; this._am = am; this._logs = []; this._recorded = null; this._val = null; this._idx = matchIndex; const conf = am.params[matchIndex]; this._isBlock = !!conf.block; } metadata() { return this._am; } matchIndex() { return this._idx; } val() { return this._val; } _tap(value, espath) { this._logs.push({ value: wrap(value), espath }); return value; } _rec(value, espath) { const empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; if (!espath) return this; const log = { value: wrap(value), espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === "function") { value = new Proxy(value, { apply(target, thisArg, args) { try { const ret = target.apply(thisArg, args); log.value = wrap(ret); return ret; } catch (e) { log.value = e; throw e; } } }); } return this; } finally { if (empowered) { this._recorded = { value, logs: [].concat(this._logs) }; } this._val = value; this._logs = []; } } eject() { const ret = this._recorded; this._recorded = null; this._val = null; return ret; } } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am, 0),
    _AssertionMessage = function () { const _s = "\n\n      "; class AssertionMessage { constructor(am, matchIndex, msgOrRec) { this._am = am; this._idx = matchIndex; this._msgOrRec = msgOrRec; } metadata() { return this._am; } matchIndex() { return this._idx; } val() { if (this._msgOrRec && typeof this._msgOrRec.val === "function") { return this._msgOrRec.val(); } else { return this._msgOrRec; } } eject() { if (this._msgOrRec && typeof this._msgOrRec.eject === "function") { return this._msgOrRec.eject(); } else { return { value: this.val(), logs: [] }; } } toString() { let msg = typeof this._msgOrRec === "string" ? this._msgOrRec : ""; msg += `${_s}# ${this._am.filepath}:${this._am.line}`; msg += `${_s}${this._am.content}`; msg += `${_s}[WARNING] power-assert is not configured. see: https://github.com/power-assert-js/power-assert`; msg += `\n`; return msg; } } return AssertionMessage; }(),
    _am2 = _pwmeta(0, "assert(!!some)", "test/fixtures/UnaryExpression/fixture.js", 5),
    _ag2 = new _ArgumentRecorder(assert, _am2, 0),
    _am3 = _pwmeta(0, "assert(!!foo.bar)", "test/fixtures/UnaryExpression/fixture.js", 7),
    _ag3 = new _ArgumentRecorder(assert, _am3, 0),
    _am4 = _pwmeta(0, "assert(delete foo.bar)", "test/fixtures/UnaryExpression/fixture.js", 9),
    _ag4 = new _ArgumentRecorder(assert, _am4, 0),
    _am5 = _pwmeta(0, "assert(typeof foo !== 'undefined')", "test/fixtures/UnaryExpression/fixture.js", 11),
    _ag5 = new _ArgumentRecorder(assert, _am5, 0),
    _am6 = _pwmeta(0, "assert(typeof foo.bar !== 'undefined')", "test/fixtures/UnaryExpression/fixture.js", 13),
    _ag6 = new _ArgumentRecorder(assert, _am6, 0),
    _am7 = _pwmeta(4, "assert.strictEqual(typeof foo, typeof bar)", "test/fixtures/UnaryExpression/fixture.js", 15),
    _ag7 = new _ArgumentRecorder(assert.strictEqual, _am7, 0),
    _ag8 = new _ArgumentRecorder(assert.strictEqual, _am7, 1);

assert(_ag._rec(!_ag._tap(truth, "arguments/0/argument"), "arguments/0"), new _AssertionMessage(_am, -1));
assert(_ag2._rec(!_ag2._tap(!_ag2._tap(some, "arguments/0/argument/argument"), "arguments/0/argument"), "arguments/0"), new _AssertionMessage(_am2, -1));
assert(_ag3._rec(!_ag3._tap(!_ag3._tap(_ag3._tap(foo, "arguments/0/argument/argument/object").bar, "arguments/0/argument/argument"), "arguments/0/argument"), "arguments/0"), new _AssertionMessage(_am3, -1));
assert(_ag4._rec(delete _ag4._tap(_ag4._tap(foo, "arguments/0/argument/object").bar, "arguments/0/argument"), "arguments/0"), new _AssertionMessage(_am4, -1));
assert(_ag5._rec(_ag5._tap(typeof foo, "arguments/0/left") !== 'undefined', "arguments/0"), new _AssertionMessage(_am5, -1));
assert(_ag6._rec(_ag6._tap(typeof _ag6._tap(_ag6._tap(foo, "arguments/0/left/argument/object").bar, "arguments/0/left/argument"), "arguments/0/left") !== 'undefined', "arguments/0"), new _AssertionMessage(_am6, -1));
assert.strictEqual(_ag7._rec(typeof foo, "arguments/0"), _ag8._rec(typeof bar, "arguments/1"), new _AssertionMessage(_am7, -1));
