'use strict';
module.exports = function () {
  const _s = '\n\n      ';

  class AssertionMessage {
    /**
     * @typedef {Object} AssertionMetadata
     * @property {string} content
     * @property {string} filepath
     * @property {number} line
     * @property {number} version
     * @property {string} pattern
     * @property {array} args
     * @property {boolean} [async] - true if enclosed in async function
     * @property {boolean} [generator] - true if enclosed in generator function
     * @property {string} [ast] - stringified AST
     * @property {string} [tokens] - stringified tokens
     * @property {string} [visitorKeys] - stringified visitorKeys
     */

    /**
     * @param {AssertionMetadata} am - AssertionMetadata for target assertion
     * @param {number} matchIndex - index of matched parameter
     * @param {string|ArgumentRecorder} [msgOrRec] - maybe enhanced message
     */
    constructor (am, matchIndex, msgOrRec) {
      this._am = am;
      this._idx = matchIndex;
      this._msgOrRec = msgOrRec;
    }

    /**
     * @return {AssertionMetadata} - AssertionMetadata for target assertion
     */
    metadata () {
      return this._am;
    }

    /**
     * @return {number} - index of matched parameter
     */
    matchIndex () {
      return this._idx;
    }

    /**
     * @return {*} - maybe enhanced message
     */
    val () {
      if (this._msgOrRec && typeof this._msgOrRec.val === 'function') {
        return this._msgOrRec.val();
      } else {
        return this._msgOrRec;
      }
    }

    /**
     * @typedef {Object} Log
     * @property {*} value - recorded actual value of target node
     * @property {string} espath - espath of target node in AST
     */

    /**
     * @typedef {Object} RecordedData
     * @property {*} value - recorded actual value of target argument
     * @property {Log[]} logs - recorded Logs
     */

    /**
     * return RecordedData then clear cache
     * @return {RecordedData} - captured value and metadata of target argument
     */
    eject () {
      if (this._msgOrRec && typeof this._msgOrRec.eject === 'function') {
        return this._msgOrRec.eject();
      } else {
        return {
          value: this.val(),
          logs: []
        };
      }
    }

    /**
     * @return {string} - string representation of target assertion call
     */
    toString () {
      let msg = typeof this._msgOrRec === 'string' ? this._msgOrRec : '';
      msg += `${_s}# ${this._am.filepath}:${this._am.line}`;
      msg += `${_s}${this._am.content}`;
      msg += `${_s}[WARNING] power-assert is not configured. see: https://github.com/power-assert-js/power-assert`;
      msg += `\n`;
      return msg;
    }
  }
  return AssertionMessage;
};
