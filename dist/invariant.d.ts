export declare class InvariantError extends Error {
    framesToPop: number;
    name: string;
    constructor(message?: string | number);
}
export declare function invariant(condition: boolean, message?: string | number): asserts condition;
