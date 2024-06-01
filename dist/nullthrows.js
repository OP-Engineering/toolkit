"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nullthrows = exports.NullthrowsError = void 0;
const genericMessage = "Nullthrows Violation";
const { setPrototypeOf = function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
}, } = Object;
class NullthrowsError extends Error {
    constructor(message = genericMessage) {
        super(typeof message === "number"
            ? `${genericMessage}: ${message} (see https://github.com/apollographql/invariant-packages)`
            : message);
        this.framesToPop = 1;
        this.name = genericMessage;
        setPrototypeOf(this, NullthrowsError.prototype);
    }
}
exports.NullthrowsError = NullthrowsError;
function nullthrows(obj, message) {
    if (obj == null) {
        throw new NullthrowsError(message);
    }
}
exports.nullthrows = nullthrows;
