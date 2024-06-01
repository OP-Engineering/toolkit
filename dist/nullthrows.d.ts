export declare class NullthrowsError extends Error {
    framesToPop: number;
    name: string;
    constructor(message?: string | number);
}
export declare function nullthrows(obj: any, message?: string | number): asserts obj;
