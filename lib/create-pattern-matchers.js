'use strict';

const SigMatcher = require('./sig-matcher');

module.exports = function createPatternMatchers (options) {
    return options.patterns.map(function (p, idx) {
        var patternStr = typeof p === 'string' ? p : p.pattern;
        var matcher = new SigMatcher(patternStr);
        var args = matcher.argumentSignatures().map(function (sig, idx) {
            if (typeof p === 'object' && p !== null && Array.isArray(p.args)) {
                return Object.assign({}, sig, p.args[idx]);
            }
            return sig;
        });
        var lastParam = args[args.length - 1];
        if (lastParam.name === 'message' && lastParam.kind === 'optional') {
            lastParam.message = true;
        }
        return {
            matcher: matcher,
            index: idx,
            pattern: patternStr,
            args: args
        };
    });
};
