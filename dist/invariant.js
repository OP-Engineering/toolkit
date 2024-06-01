"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invariant = exports.InvariantError = void 0;
const genericMessage = "Invariant Violation";
const { setPrototypeOf = function (obj, proto) {
    // eslint-disable-next-line no-proto
    obj.__proto__ = proto;
    return obj;
}, } = Object;
class InvariantError extends Error {
    constructor(message = genericMessage) {
        super(typeof message === "number"
            ? `${genericMessage}: ${message} (see https://github.com/apollographql/invariant-packages)`
            : message);
        this.framesToPop = 1;
        this.name = genericMessage;
        setPrototypeOf(this, InvariantError.prototype);
    }
}
exports.InvariantError = InvariantError;
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
exports.invariant = invariant;
