'use strict';

var _powerAssertConfig = ["assert(value, [message])", "assert.ok(value, [message])", "assert.equal(actual, expected, [message])", "assert.notEqual(actual, expected, [message])", "assert.strictEqual(actual, expected, [message])", "assert.notStrictEqual(actual, expected, [message])", { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }],
    _am = {
  content: "assert(func())",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 3
},
    _ArgumentRecorder = function () { function ArgumentRecorder(callee, am, ag) { this._callee = callee; this._metadata = am; this._argDef = ag; this._logs = []; this._recorded = null; this._value = null; this._isBlock = false; if (am.config) { var argconf = am.config.args[ag.index]; this._isBlock = !!argconf.block; } } ArgumentRecorder.prototype.metadata = function metadata() { return this._metadata; }; ArgumentRecorder.prototype.code = function code() { return this._argDef.code; }; ArgumentRecorder.prototype.value = function value() { return this._value; }; ArgumentRecorder.prototype._tap = function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; }; ArgumentRecorder.prototype._rec = function _rec(value, espath) { var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && this._callee && this._callee._empowered && typeof value === 'function') { value = new Proxy(value, { apply: function (target, thisArg, argumentsList) { var ret; try { ret = target.apply(thisArg, argumentsList); log.value = wrap(ret); } catch (e) { log.value = e; throw e; } return ret; } }); } this._value = value; this._recorded = { value: value, logs: [].concat(this._logs) }; this._logs = []; if (this._callee && this._callee._empowered) { return this; } else { return value; } }; ArgumentRecorder.prototype.eject = function eject() { var result = this._recorded; this._recorded = null; this._value = null; return result; }; function isPromiseLike(o) { return o !== null && typeof o === 'object' && typeof o.then === 'function' && typeof o.catch === 'function'; } function $Promise$(prms) { this.status = 'pending'; prms.then(mark(this, 'resolved'), mark(this, 'rejected')); } function mark(_this, s) { return function () { var args = Array.prototype.slice.apply(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; } function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am, {
  espath: "arguments/0",
  code: "func()",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _AssertionMessage = function () { function AssertionMessage(argRecs, metadata, message) { this._argRecs = argRecs; this._metadata = metadata; this._message = message; } AssertionMessage.prototype.value = function value() { if (this._message && typeof this._message.value === 'function') { return this._message.value(); } else { return this._message; } }; AssertionMessage.prototype.eject = function eject() { if (this._message && typeof this._message.eject === 'function') { return this._message.eject(); } else { return { value: this.value(), logs: [] }; } }; AssertionMessage.prototype.toString = function toString() { var message = this._message ? this._message : ''; message += '\n----------'; message += '\n  code: ' + this._metadata.content; message += '\n  line: ' + this._metadata.filepath + ':' + this._metadata.line; var argRec; for (var i = 0; i < this._argRecs.length; i += 1) { argRec = this._argRecs[i]; message += '\n  arg' + i + ': '; message += '\n    code: ' + argRec.code(); message += '\n    value: ' + argRec.value(); message += '\n    type: ' + typeof argRec.value(); } message += '\n'; message += '[NOTICE] configure power-assert for more verbose report. see: https://github.com/power-assert-js/power-assert'; message += '\n----------'; return message; }; return AssertionMessage; }(),
    _am2 = {
  content: "assert(obj.age())",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 5
},
    _ag2 = new _ArgumentRecorder(assert, _am2, {
  espath: "arguments/0",
  code: "obj.age()",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am3 = {
  content: "assert(isFalsy(positiveInt))",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 7
},
    _ag3 = new _ArgumentRecorder(assert, _am3, {
  espath: "arguments/0",
  code: "isFalsy(positiveInt)",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am4 = {
  content: "assert(foo[propName]())",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 9
},
    _ag4 = new _ArgumentRecorder(assert, _am4, {
  espath: "arguments/0",
  code: "foo[propName]()",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am5 = {
  content: "assert(foo[hoge[fuga[piyo]]]())",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 11
},
    _ag5 = new _ArgumentRecorder(assert, _am5, {
  espath: "arguments/0",
  code: "foo[hoge[fuga[piyo]]]()",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am6 = {
  content: "assert(sum(one, two, three) === seven)",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 13
},
    _ag6 = new _ArgumentRecorder(assert, _am6, {
  espath: "arguments/0",
  code: "sum(one, two, three) === seven",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am7 = {
  content: "assert(sum(sum(one, two), three) === sum(sum(two, three), seven))",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 15
},
    _ag7 = new _ArgumentRecorder(assert, _am7, {
  espath: "arguments/0",
  code: "sum(sum(one, two), three) === sum(sum(two, three), seven)",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am8 = {
  content: "assert(math.calc.sum(one, two, three) === seven)",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 17
},
    _ag8 = new _ArgumentRecorder(assert, _am8, {
  espath: "arguments/0",
  code: "math.calc.sum(one, two, three) === seven",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am9 = {
  content: "assert(three * (seven * ten) === three)",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 19
},
    _ag9 = new _ArgumentRecorder(assert, _am9, {
  espath: "arguments/0",
  code: "three * (seven * ten) === three",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am10 = {
  content: "assert(!concat(fuga, piyo))",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 21
},
    _ag10 = new _ArgumentRecorder(assert, _am10, {
  espath: "arguments/0",
  code: "!concat(fuga, piyo)",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am11 = {
  content: "assert.strictEqual(three * (seven * ten), math.calc.sum(one, two, three))",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 23,
  config: _powerAssertConfig[4]
},
    _ag11 = new _ArgumentRecorder(assert.strictEqual, _am11, {
  espath: "arguments/0",
  code: "three * (seven * ten)",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag12 = new _ArgumentRecorder(assert.strictEqual, _am11, {
  espath: "arguments/1",
  code: "math.calc.sum(one, two, three)",
  index: 1,
  name: "expected",
  kind: "mandatory"
});

assert(_ag._rec(func(), "arguments/0"), new _AssertionMessage([_ag], _am));
assert(_ag2._rec(_ag2._tap(obj, "arguments/0/callee/object").age(), "arguments/0"), new _AssertionMessage([_ag2], _am2));
assert(_ag3._rec(isFalsy(_ag3._tap(positiveInt, "arguments/0/arguments/0")), "arguments/0"), new _AssertionMessage([_ag3], _am3));
assert(_ag4._rec(_ag4._tap(foo, "arguments/0/callee/object")[_ag4._tap(propName, "arguments/0/callee/property")](), "arguments/0"), new _AssertionMessage([_ag4], _am4));
assert(_ag5._rec(_ag5._tap(foo, "arguments/0/callee/object")[_ag5._tap(_ag5._tap(hoge, "arguments/0/callee/property/object")[_ag5._tap(_ag5._tap(fuga, "arguments/0/callee/property/property/object")[_ag5._tap(piyo, "arguments/0/callee/property/property/property")], "arguments/0/callee/property/property")], "arguments/0/callee/property")](), "arguments/0"), new _AssertionMessage([_ag5], _am5));
assert(_ag6._rec(_ag6._tap(sum(_ag6._tap(one, "arguments/0/left/arguments/0"), _ag6._tap(two, "arguments/0/left/arguments/1"), _ag6._tap(three, "arguments/0/left/arguments/2")), "arguments/0/left") === _ag6._tap(seven, "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag6], _am6));
assert(_ag7._rec(_ag7._tap(sum(_ag7._tap(sum(_ag7._tap(one, "arguments/0/left/arguments/0/arguments/0"), _ag7._tap(two, "arguments/0/left/arguments/0/arguments/1")), "arguments/0/left/arguments/0"), _ag7._tap(three, "arguments/0/left/arguments/1")), "arguments/0/left") === _ag7._tap(sum(_ag7._tap(sum(_ag7._tap(two, "arguments/0/right/arguments/0/arguments/0"), _ag7._tap(three, "arguments/0/right/arguments/0/arguments/1")), "arguments/0/right/arguments/0"), _ag7._tap(seven, "arguments/0/right/arguments/1")), "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag7], _am7));
assert(_ag8._rec(_ag8._tap(_ag8._tap(_ag8._tap(math, "arguments/0/left/callee/object/object").calc, "arguments/0/left/callee/object").sum(_ag8._tap(one, "arguments/0/left/arguments/0"), _ag8._tap(two, "arguments/0/left/arguments/1"), _ag8._tap(three, "arguments/0/left/arguments/2")), "arguments/0/left") === _ag8._tap(seven, "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag8], _am8));
assert(_ag9._rec(_ag9._tap(_ag9._tap(three, "arguments/0/left/left") * _ag9._tap(_ag9._tap(seven, "arguments/0/left/right/left") * _ag9._tap(ten, "arguments/0/left/right/right"), "arguments/0/left/right"), "arguments/0/left") === _ag9._tap(three, "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag9], _am9));
assert(_ag10._rec(!_ag10._tap(concat(_ag10._tap(fuga, "arguments/0/argument/arguments/0"), _ag10._tap(piyo, "arguments/0/argument/arguments/1")), "arguments/0/argument"), "arguments/0"), new _AssertionMessage([_ag10], _am10));
assert.strictEqual(_ag11._rec(_ag11._tap(three, "arguments/0/left") * _ag11._tap(_ag11._tap(seven, "arguments/0/right/left") * _ag11._tap(ten, "arguments/0/right/right"), "arguments/0/right"), "arguments/0"), _ag12._rec(_ag12._tap(_ag12._tap(math, "arguments/1/callee/object/object").calc, "arguments/1/callee/object").sum(_ag12._tap(one, "arguments/1/arguments/0"), _ag12._tap(two, "arguments/1/arguments/1"), _ag12._tap(three, "arguments/1/arguments/2")), "arguments/1"), new _AssertionMessage([_ag11, _ag12], _am11));
