'use strict';
module.exports = /* intentional newline */
  function () {

    /**
     * @typedef {Object} AssertionMetadata
     * @property {string} content
     * @property {string} filepath
     * @property {number} line
     * @property {object} config
     * @property {boolean} [async] - true if enclosed in async function
     * @property {boolean} [generator] - true if enclosed in generator function
     * @property {string} [ast] - stringified AST
     * @property {string} [tokens] - stringified tokens
     * @property {string} [visitorKeys] - stringified visitorKeys
     */

    /**
     * record argument value and metadata silently
     * @param {function} callee - callee of target argument
     * @param {AssertionMetadata} am - tranpiler generated metadata for target assertion
     * @param {number} matchIndex - match index of argument
     */
    function ArgumentRecorder(callee, am, matchIndex) {
        this._callee = callee;
        this._metadata = am;
        this._logs = [];
        this._recorded = null;
        this._value = null;
        this._matchIndex = matchIndex;
        var argconf = am.config.args[matchIndex];
        this._isBlock = !!argconf.block;
    }

    /**
     * @return {AssertionMetadata} - AssertionMetadata for target assertion
     */
    ArgumentRecorder.prototype.metadata = function metadata() {
        return this._metadata;
    };

    /**
     * @return {number} - index of matched parameter
     */
    ArgumentRecorder.prototype.matchIndex = function matchIndex() {
        return this._matchIndex;
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
            value: wrap(value),
            espath: espath
        });
        return value;
    };

    /**
     * record argument value silently then clear captured logs
     * optionally, proxy block argument then store its result as a Log
     * @param {any} value - actual value of target argument
     * @param {string} espath - espath of target node in AST
     * @return {any|ArgumentRecorder} - ArgumentRecorder or actual value of target argument
     */
    ArgumentRecorder.prototype._rec = function _rec(value, espath) {
        var empowered = this._callee && this._callee._empowered;
        try {
            if (!empowered) return value;

            var log = {
                value: wrap(value),
                espath: espath
            };
            this._logs.push(log);

            if (this._isBlock && empowered && typeof value === 'function') {
                value = new Proxy(value, {
                    apply: function(target, thisArg, argumentsList) {
                        var ret;
                        try {
                            ret = target.apply(thisArg, argumentsList);
                            log.value = wrap(ret);
                        } catch (e) {
                            log.value = e;
                            throw e;
                        }
                        return ret;
                    }
                });
            }

            this._recorded = {
                value: value,
                logs: [].concat(this._logs)
            };
            return this;
        } finally {
            this._value = value; // actual value of target argument
            this._logs = []; // clear logs
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

    function wrap(v) {
        return isPromiseLike(v) ? new $Promise$(v) : v;
    }

    return ArgumentRecorder;
}
