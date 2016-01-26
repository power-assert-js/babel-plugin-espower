'use strict';
module.exports = /* intentional newline */
  function () {
  function PowerAssertRecorder() {
    this.captured = [];
  }

  PowerAssertRecorder.prototype._capt = function _capt (value, espath) {
    this.captured.push({value: value, espath: espath});
    return value;
  };

  PowerAssertRecorder.prototype._expr = function _expr (value, args) {
    return {
      powerAssertContext: {
        value: value,
        events: this.captured
      },
      source: {
        content: args.content,
        filepath: args.filepath,
        line: args.line,
        generator: !!args.generator,
        async: !!args.async
      }
    };
  };

  return PowerAssertRecorder;
}
