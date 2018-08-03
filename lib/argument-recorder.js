'use strict';
module.exports = /* intentional newline */
  function () {

    /**
     * @typedef {Object} ArgumentMetadata
     * @property {string} espath - espath of target argument in AST
     * @property {string} code - canonical code of target argument
     */

    /**
     * record argument value and metadata silently
     * @param {ArgumentMetadata} metadata - tranpiler generated metadata for target argument
     */
    function ArgumentRecorder(metadata) {
        this._espath = metadata.espath;
        this._code = metadata.code;
        this._logs = [];
        this._recorded = null;
        this._value = null;
    }

    /**
     * @return {string} - canonical code of target argument
     */
    ArgumentRecorder.prototype.code = function code() {
        return this._code;
    };

    /**
     * @return {any} - recorded actual value of target argument
     */
    ArgumentRecorder.prototype.value = function value() {
        return this._value;
    };

    /**
     * tap capturable node value with its espath then store them as a Log
     * @param {any} value - actual value of target node
     * @param {string} espath - espath of target node in AST
     * @return {any} - the original value
     */
    ArgumentRecorder.prototype._tap = function _tap(value, espath) {
        this._logs.push({
            value: isPromiseLike(value) ? new $Promise$(value) : value,
            espath: espath
        });
        return value;
    };

    /**
     * record argument value silently then clear captured logs
     * @param {any} value - actual value of target argument
     * @return {any} - actual value of target argument
     */
    ArgumentRecorder.prototype._rec = function _rec(value) {
        this._value = value;
        this._recorded = {
            value: value,
            logs: [].concat(this._logs)
        };
        this._logs = [];
        return value;
    };

    /**
     * @typedef {Object} Log
     * @property {any} value - recorded actual value of target node
     * @property {string} espath - espath of target node in AST
     */

    /**
     * @typedef {Object} RecordedData
     * @property {any} value - recorded actual value of target argument
     * @property {Log[]} logs - recorded Logs
     */

    /**
     * return RecordedData then clear cache
     * @return {RecordedData} - captured value and metadata of target argument
     */
    ArgumentRecorder.prototype.eject = function eject() {
        var result = this._recorded;
        this._recorded = null;
        this._value = null;
        return result;
    };

    function isPromiseLike(o) {
        return o !== null &&
            typeof o === 'object' &&
            typeof o.then === 'function' &&
            typeof o.catch === 'function';
    }

    function $Promise$(prms) {
        this.status = 'pending';
        prms.then(mark(this, 'resolved'), mark(this, 'rejected'));
    }

    function mark(_this, s) {
        return function () {
            var args = Array.prototype.slice.apply(arguments);
            _this.status = s;
            _this.value = (args.length === 1) ? args[0] : args;
        };
    }

    return ArgumentRecorder;
}
