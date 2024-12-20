export type MyAwaited<T> = T extends Promise<infer P>
  ? P extends Promise<any>
    ? MyAwaited<P>
    : P
  : T extends { then: (onfulfilled: (arg: infer U) => any) => any }
  ? MyAwaited<U>
  : T;
