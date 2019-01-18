'use strict';

var CallMatcher = require('call-matcher');
var babelParser = require('@babel/parser');

module.exports = function createPatternMatchers (options) {
    return options.patterns.map(function (p, idx) {
        var patternStr = typeof p === 'string' ? p : p.pattern;
        var signatureAst = babelParser.parse(patternStr);
        var expression = signatureAst.program.body[0].expression;
        var matcher = new CallMatcher(expression, options);
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
