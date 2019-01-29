'use strict';

const CallMatcher = require('call-matcher');
const babelParser = require('@babel/parser');
const signature = require('call-signature');
const SigMatcher = require('./sig-matcher');

const createPatternMatchers = (options) => {
  return options.patterns.map((p, index) => {
    const pattern = typeof p === 'string' ? p : p.pattern;
    const parsed = signature.parse(pattern);
    let matcher;
    if (parsed) {
      matcher = new SigMatcher(parsed);
    } else {
      const signatureAst = babelParser.parse(pattern);
      const expression = signatureAst.program.body[0].expression;
      matcher = new CallMatcher(expression, options);
    }
    const args = matcher.argumentSignatures().map((sig, idx) => {
      if (typeof p === 'object' && p !== null && Array.isArray(p.args)) {
        return Object.assign({}, sig, p.args[idx]);
      }
      return sig;
    });
    const lastParam = args[args.length - 1];
    if (lastParam.name === 'message' && lastParam.kind === 'optional') {
      lastParam.message = true;
    }
    return {
      matcher,
      index,
      pattern,
      args
    };
  });
};

module.exports = createPatternMatchers;
