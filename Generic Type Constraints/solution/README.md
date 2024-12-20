## Understanding the `AllowString` Type

**Problem:**

The goal is to create a generic type `AllowString<T>` that only allows the type argument `T` to be a `string`. If any other type is provided, TypeScript should raise a type error.

**Initial State (Default):**

```typescript
type AllowString = unknown;
```

**Solution:**

```typescript
type AllowString<T extends string> = T;
```

**Explanation:**

1.  **`type AllowString<T extends string>`:** This declares a generic type named `AllowString` with one generic type parameter `T`.
2.  **`extends string`:** This is the generic type constraint. It specifies that the type argument provided for `T` must be assignable to the `string` type.  This means `T` can be `string` itself, or a more specific string literal type (e.g., `'hello'`).
3.  **`=`:** This indicates that we are defining the structure of the `AllowString` type.
4.  **`T`:** This means that the `AllowString` type itself simply resolves to the type argument `T`.

**How it Works:**

-   **`AllowString<string>`:** This is valid because `string` extends `string`. The type resolves to `string`.
-   **`AllowString<'hello'>`:** This is also valid because the string literal type `'hello'` extends `string`. The type resolves to `'hello'`.
-   **`AllowString<number>`:** This is invalid because `number` does not extend `string`. TypeScript will raise a type error.
-   **`AllowString<boolean>`:** This is invalid because `boolean` does not extend `string`. TypeScript will raise a type error.

The `extends string` constraint enforces that `AllowString` can only be used with string types.

## Understanding the `AllowNumber` Type

**Problem:**

The goal is to create a generic type `AllowNumber<T>` that only allows the type argument `T` to be a `number`. If any other type is provided, TypeScript should raise a type error.

**Initial State (Default):**

```typescript
type AllowNumber = unknown;
```

**Solution:**

```typescript
type AllowNumber<T extends number> = T;
```

**Explanation:**

The structure and logic are very similar to `AllowString`:

1.  **`type AllowNumber<T extends number>`:** This declares a generic type named `AllowNumber` with one generic type parameter `T`.
2.  **`extends number`:** This is the generic type constraint. It specifies that the type argument provided for `T` must be assignable to the `number` type. This means `T` can be `number` itself, or a more specific numeric literal type (e.g., `123`).
3.  **`=`:** This indicates that we are defining the structure of the `AllowNumber` type.
4.  **`T`:** This means that the `AllowNumber` type itself simply resolves to the type argument `T`.

**How it Works:**

-   **`AllowNumber<number>`:** This is valid because `number` extends `number`. The type resolves to `number`.
-   **`AllowNumber<10>`:** This is also valid because the numeric literal type `10` extends `number`. The type resolves to `10`.
-   **`AllowNumber<string>`:** This is invalid because `string` does not extend `number`. TypeScript will raise a type error.
-   **`AllowNumber<boolean>`:** This is invalid because `boolean` does not extend `number`. TypeScript will raise a type error.

The `extends number` constraint enforces that `AllowNumber` can only be used with number types.

## Understanding the `CreateLogger` Type

**Problem:**

The goal is to create a generic type `CreateLogger<T>` that represents an object with a `log` method and an `exit` method. The type of the `log` method should be determined by the generic type argument `T`, which is constrained to be a function that takes a single argument of type `number` and returns `void`.

**Initial State (Default):**

```typescript
type CreateLogger = unknown;
```

**Solution:**

```typescript
type CreateLogger<T extends (a: number) => void> = {
  log: T;
  exit: () => void;
};
```

**Explanation:**

1.  **`type CreateLogger<T extends (a: number) => void>`:** This declares a generic type named `CreateLogger` with one generic type parameter `T`.
2.  **`extends (a: number) => void`:** This is the generic type constraint. It specifies that the type argument provided for `T` must be a function that:
    -   Takes one argument named `a` of type `number`.
    -   Returns `void` (meaning it doesn't return a value).
3.  **`=`:** This indicates that we are defining the structure of the `CreateLogger` type.
4.  **`{ log: T; exit: () => void; }`:** This defines the shape of the `CreateLogger` type as an object with two properties:
    -   `log`: The type of this property is determined by the generic type parameter `T` (the constrained function type).
    -   `exit`: The type of this property is a function that takes no arguments and returns `void`.

**How it Works:**

-   **`CreateLogger<(a: number) => void>`:** This is valid because the provided function type `(a: number) => void` matches the constraint. The type resolves to `{ log: (a: number) => void; exit: () => void; }`.
-   **`CreateLogger<string>`:** This is invalid because `string` is not assignable to the function type `(a: number) => void`. TypeScript will raise a type error.
-   **`CreateLogger<(a: string) => void>`:** This is invalid because the argument type of the provided function (`string`) does not match the constraint (`number`). TypeScript will raise a type error.
-   **`CreateLogger<(a: number, b: number) => void>`:** This is invalid because the provided function takes two arguments, while the constraint specifies a function with only one argument. TypeScript will raise a type error.

The `extends (a: number) => void` constraint ensures that `CreateLogger` can only be used with function types that adhere to the specified signature, enforcing type safety for the `log` method.
