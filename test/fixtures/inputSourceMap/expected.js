"use strict";

var Person, assert;

assert = require('power-assert');

Person = (function () {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  return Person;
})();

describe("various types", function () {
  beforeEach(function () {
    return this.types = ["string", 98.6, true, false, null, undefined, ["nested", "array"], {
      object: true
    }, NaN, Infinity, /^not/, new Person("alice", 3)];
  });
  return it("demo", function () {
    var bob, index;
    index = this.types.length - 1;
    bob = new Person("bob", 5);
    return assert(assert._expr(assert._capt(assert._capt(assert._capt(assert._capt(this.types, "arguments/0/left/object/object")[assert._capt(index, "arguments/0/left/object/property")], "arguments/0/left/object").name, "arguments/0/left") === assert._capt(assert._capt(bob, "arguments/0/right/object").name, "arguments/0/right"), "arguments/0"), {
      content: "assert(this.types[index].name === bob.name)",
      filepath: "path/to/coffee_script_test.coffee",
      line: 33
    }));
  });
});
