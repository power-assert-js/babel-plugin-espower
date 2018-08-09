'use strict';
module.exports = /* intentional newline */
  function () {

    /**
     * @typedef {Object} AssertionMetadata
     * @property {string} content
     * @property {string} filepath
     * @property {number} line
     * @property {boolean} [async] - true if enclosed in async function
     * @property {boolean} [generator] - true if enclosed in generator function
     * @property {string} [ast] - stringified AST
     * @property {string} [tokens] - stringified tokens
     * @property {string} [visitorKeys] - stringified visitorKeys
     */

    /**
     * @param {ArgumentRecorder[]} argRecs - ArgumentRecorder reference for each argument
     * @param {AssertionMetadata} metadata - AssertionMetadata for target assertion
     * @param {any|ArgumentRecorder} message - maybe enhanced message
     */
    function AssertionMessage(argRecs, metadata, message) {
        this._argRecs = argRecs;
        this._metadata = metadata;
        this._message = message;
    }

    /**
     * @return {any} - maybe enhanced message
     */
    AssertionMessage.prototype.value = function value() {
        if (this._message && typeof this._message.value === 'function') {
            return this._message.value();
        } else {
            return this._message;
        }
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
    AssertionMessage.prototype.eject = function eject() {
        if (this._message && typeof this._message.eject === 'function') {
            return this._message.eject();
        } else {
            return {
                value: this.value(),
                logs: []
            };
        }
    };

    /**
     * @return {string} - string representation of target assertion call
     */
    AssertionMessage.prototype.toString = function toString() {
        var message = this._message ? this._message : '';
        message += '\n----------';
        message += '\n  code: ' + this._metadata.content;
        message += '\n  line: ' + this._metadata.filepath + ':' + this._metadata.line;
        var argRec;
        for (var i = 0; i < this._argRecs.length; i += 1) {
            argRec = this._argRecs[i];
            message += '\n  arg' + i + ': ';
            message += '\n    code: ' + argRec.code();
            message += '\n    value: ' + argRec.value();
            message += '\n    type: ' + typeof argRec.value();
        }
        message += '\n';
        message += '[NOTICE] configure power-assert for more verbose report. see: https://github.com/power-assert-js/power-assert';
        message += '\n----------';
        return message;
    };

    return AssertionMessage;
}
