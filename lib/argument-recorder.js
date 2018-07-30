'use strict';
module.exports = /* intentional newline */
  function () {
    function ArgumentRecorder(metadata) {
        this.espath = metadata.espath;
        this.code = metadata.code;
        this._log = [];
        this._recorded = null;
        this.value = null;
    }
    ArgumentRecorder.prototype._tap = function _tap(value, espath) {
        this._log.push({
            value: value,
            espath: espath
        });
        return value;
    };
    ArgumentRecorder.prototype._rec = function _rec(value) {
        this.value = value;
        this._recorded = {
            value: value,
            events: [].concat(this._log)
        };
        this._log = [];
        return value;
    };
    ArgumentRecorder.prototype.eject = function eject() {
        var result = this._recorded;
        this._recorded = null;
        this.value = null;
        return result;
    };
    return ArgumentRecorder;
}
