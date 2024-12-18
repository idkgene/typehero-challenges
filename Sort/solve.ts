type BuildTuple<L extends number, T extends any[] = []> = T['length'] extends L 
  ? T 
  : BuildTuple<L, [...T, 1]>

type IsGreaterThan<A extends number, B extends number> = BuildTuple<A> extends [...BuildTuple<B>, ...any[]] 
  ? true 
  : false

type Insert<
  N extends number,
  T extends number[],
  Desc extends boolean = false
> = T extends []
  ? [N]
  : T extends [infer F extends number, ...infer R extends number[]]
    ? Desc extends true
      ? IsGreaterThan<N, F> extends true
        ? [N, ...T]
        : [F, ...Insert<N, R, true>]
      : IsGreaterThan<F, N> extends true
        ? [N, ...T]
        : [F, ...Insert<N, R, false>] : never

type Sort<T extends number[], Desc extends boolean = false> = T extends []
  ? []
  : T extends [infer F extends number]
    ? [F]
    : T extends [infer F extends number, ...infer R extends number[]]
      ? Insert<F, Sort<R, Desc>, Desc>
      : never
