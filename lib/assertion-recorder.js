'use strict';
module.exports = /* intentional newline */
  function () {
    function AssertionRecorder(args, metadata) {
        this._args = args;
        this._metadata = metadata;
    }
    AssertionRecorder.prototype.args = function args() {
        return [].concat(this._args || []);
    };
    AssertionRecorder.prototype.metadata = function metadata() {
        return this._metadata;
    };
    AssertionRecorder.prototype.toString = function toString() {
        var message = '';
        message += '\n----------';
        message += '\n  code: ' + this._metadata.content;
        message += '\n  line: ' + this._metadata.filepath + ':' + this._metadata.line;
        var arg;
        for (var i = 0; i < this._args.length; i += 1) {
            arg = this._args[i];
            message += '\n  arg' + i + ': ';
            message += '\n    code: ' + arg.code;
            message += '\n    value: ' + arg.value;
            message += '\n    type: ' + typeof arg.value;
        }
        message += '\n';
        message += '[NOTICE] configure power-assert for more verbose report. see: https://github.com/power-assert-js/power-assert';
        message += '\n----------';
        return message;
    };
    return AssertionRecorder;
}
