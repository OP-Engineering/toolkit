declare function marker(i?: number): void;
declare function debug(...params: unknown[]): void;

interface NodeModule {
  hot:
    | {
        dispose: (cb: () => void) => void;
      }
    | undefined;
}
