'use strict';

const isIdentifier = (node) => node && node.type === 'Identifier';
const isCallExpression = (node) => node && node.type === 'CallExpression';
const hasIdentName = (node, name) => isIdentifier(node) && node.name === name;
const isCalleeOfParent = (currentNode, parentNode) => parentNode &&
          currentNode &&
          parentNode.type === 'CallExpression' &&
          parentNode.callee === currentNode;

class SigMatcher {
    constructor({callee, args}) {
        this.callee = callee;
        this.args = args;
        this.numMaxArgs = args.length;
        this.numMinArgs = args.filter((a) => a.optional === false).length;
    }
    test(currentNode) {
        if (this.isCalleeMatched(currentNode)) {
            const numArgs = currentNode.arguments.length;
            return this.numMinArgs <= numArgs && numArgs <= this.numMaxArgs;
        }
        return false;
    }
    matchArgument(currentNode, parentNode) {
        if (isCalleeOfParent(currentNode, parentNode)) {
            return null;
        }
        if (this.test(parentNode)) {
            const indexOfCurrentArg = parentNode.arguments.indexOf(currentNode);
            let numOptional = parentNode.arguments.length - this.numMinArgs;
            const matchedSignatures = this.argumentSignatures().reduce((accum, argSig) => {
                if (argSig.kind === 'mandatory') {
                    accum.push(argSig);
                }
                if (argSig.kind === 'optional' && 0 < numOptional) {
                    numOptional -= 1;
                    accum.push(argSig);
                }
                return accum;
            }, []);
            return matchedSignatures[indexOfCurrentArg];
        }
        return null;
    }
    argumentSignatures() {
        return this.args.map(toArgumentSignature);
    }
    isCalleeMatched(currentNode) {
        if (!isCallExpression(currentNode)) {
            return false;
        }
        const callee = currentNode.callee;
        switch (this.callee.type) {
        case 'Identifier':
            return hasIdentName(callee, this.callee.name);
        case 'MemberExpression':
            const memObj = callee.object;
            const memProp = callee.property;
            return hasIdentName(memObj, this.callee.object) && hasIdentName(memProp, this.callee.member);
        default:
            return false;
        }
    }
}
const toArgumentSignature = (arg, idx) => {
    return {
        index: idx,
        name: arg.name,
        kind: arg.optional ? 'optional' : 'mandatory'
    };
};

module.exports = SigMatcher;
