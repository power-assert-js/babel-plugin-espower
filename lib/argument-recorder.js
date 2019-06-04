'use strict';
module.exports = function () {
  const isPromiseLike = (o) => o !== null &&
                typeof o === 'object' &&
                typeof o.then === 'function' &&
                typeof o.catch === 'function';

  const mark = (_this, s) => {
    return function () {
      const args = Array.from(arguments);
      _this.status = s;
      _this.value = (args.length === 1) ? args[0] : args;
    };
  };

  class $Promise$ {
    constructor (prms) {
      this.status = 'pending';
      prms.then(mark(this, 'resolved'), mark(this, 'rejected'));
    }
  }

  const wrap = (v) => isPromiseLike(v) ? new $Promise$(v) : v;

  class ArgumentRecorder {
    /**
     * @typedef {Object} AssertionMetadata
     * @property {string} content
     * @property {string} filepath
     * @property {number} line
     * @property {number} version
     * @property {string} pattern
     * @property {array} params
     * @property {boolean} [async] - true if enclosed in async function
     * @property {boolean} [generator] - true if enclosed in generator function
     * @property {string} [ast] - stringified AST
     * @property {string} [tokens] - stringified tokens
     * @property {string} [visitorKeys] - stringified visitorKeys
     */

    /**
     * record argument value and metadata silently
     * @param {function} callee - callee of target argument
     * @param {AssertionMetadata} am - generated metadata for target assertion
     * @param {number} matchIndex - index of matched parameter
     */
    constructor (callee, am, matchIndex) {
      this._callee = callee;
      this._am = am;
      this._logs = [];
      this._recorded = null;
      this._val = null;
      this._idx = matchIndex;
      const conf = am.params[matchIndex];
      this._isBlock = !!conf.block;
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
     * @return {*} - recorded actual value of target argument
     */
    val () {
      return this._val;
    }

    /**
     * tap capturable node value with its espath then store them as a Log
     * @param {*} value - actual value of target node
     * @param {string} espath - espath of target node in AST
     * @return {*} - the original value
     */
    _tap (value, espath) {
      this._logs.push({
        value: wrap(value),
        espath
      });
      return value;
    }

    /**
     * record argument value silently then clear captured logs
     * optionally, proxy block argument then store its result as a Log
     * @param {*} value - actual value of target argument
     * @param {string} [espath] - espath of target node in AST
     * @return {*|ArgumentRecorder} - ArgumentRecorder or actual value of target argument
     */
    _rec (value, espath) {
      const empowered = this._callee && this._callee._empowered;
      try {
        if (!empowered) return value;
        if (!espath) return this;

        const log = {
          value: wrap(value),
          espath
        };
        this._logs.push(log);

        if (this._isBlock && empowered && typeof value === 'function') {
          value = new Proxy(value, {
            apply (target, thisArg, args) {
              try {
                const ret = target.apply(thisArg, args);
                log.value = wrap(ret);
                return ret;
              } catch (e) {
                log.value = e;
                throw e;
              }
            }
          });
        }

        return this;
      } finally {
        if (empowered) {
          this._recorded = {
            value,
            logs: [].concat(this._logs)
          };
        }
        this._val = value; // actual value of target argument
        this._logs = []; // clear logs
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
      const ret = this._recorded;
      this._recorded = null;
      this._val = null;
      return ret;
    }
  }

  return ArgumentRecorder;
};
