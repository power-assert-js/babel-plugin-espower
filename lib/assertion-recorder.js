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
    function AssertionRecorder(argRecs, metadata, message) {
        this._argRecs = argRecs;
        this._metadata = metadata;
        this._message = message;
    }

    /**
     * @return {ArgumentRecorder[]} - shallow copy of ArgumentRecorder references for each argument
     */
    AssertionRecorder.prototype.argRecs = function argRecs() {
        return [].concat(this._argRecs || []);
    };

    /**
     * @return {AssertionMetadata} - AssertionMetadata for target assertion
     */
    AssertionRecorder.prototype.metadata = function metadata() {
        return this._metadata;
    };

    /**
     * @return {any} - maybe enhanced message
     */
    AssertionRecorder.prototype.message = function message() {
        return this._message;
    };

    /**
     * @return {string} - string representation of target assertion call
     */
    AssertionRecorder.prototype.toString = function toString() {
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

    return AssertionRecorder;
}
