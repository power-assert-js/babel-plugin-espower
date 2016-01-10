var _powerAssertRecorder = function () { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; };

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
    var _rec = _powerAssertRecorder();

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
