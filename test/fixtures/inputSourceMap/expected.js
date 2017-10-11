var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }();

var Person, assert;
assert = require('power-assert');

Person = function () {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  return Person;
}();

describe("various types", function () {
  beforeEach(function () {
    return this.types = ["string", 98.6, true, false, null, undefined, ["nested", "array"], {
      object: true
    }, NaN, Infinity, /^not/, new Person("alice", 3)];
  });
  return it("demo", function () {
    var _rec = new _powerAssertRecorder();

    var bob, index;
    index = this.types.length - 1;
    bob = new Person("bob", 5);
    return assert(_rec._expr(_rec._capt(_rec._capt(_rec._capt(_rec._capt(this.types, "arguments/0/left/object/object")[_rec._capt(index, "arguments/0/left/object/property")], "arguments/0/left/object").name, "arguments/0/left") === _rec._capt(_rec._capt(bob, "arguments/0/right/object").name, "arguments/0/right"), "arguments/0"), {
      content: "assert(this.types[index].name === bob.name)",
      filepath: "path/to/coffee_script_test.coffee",
      line: 33
    }));
  });
});
