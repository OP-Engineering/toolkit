const genericMessage = "Nullthrows Violation";

const {
  setPrototypeOf = function (obj: any, proto: any) {
    obj.__proto__ = proto;
    return obj;
  },
} = Object as any;

export class NullthrowsError extends Error {
  framesToPop = 1;
  name = genericMessage;
  constructor(message: string | number = genericMessage) {
    super(
      typeof message === "number"
        ? `${genericMessage}: ${message} (see https://github.com/apollographql/invariant-packages)`
        : message
    );
    setPrototypeOf(this, NullthrowsError.prototype);
  }
}

export function nullthrows(obj: any, message?: string | number): asserts obj {
  if (obj == null) {
    throw new NullthrowsError(message);
  }
}
