## Awaited

If we have a type which is a wrapped type like Promise, how we can get the type which is inside the wrapped type?

For example: if we have `Promise<ExampleType>` how to get ExampleType?

```ts
type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
```

> This question is ported from the original article by @maciejsikora

This challenge was ported from Type Challenges and was authored by maciejsikora
