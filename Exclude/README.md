Implement the built-in `Exclude<T, U>`

> Exclude from `T` those types that are assignable to `U`.

For example:

```ts
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```

This challenge was ported from [Type Challenges](https://tsch.js.org/) and was authored by [zheeeng](https://www.github.com/zheeeng)
