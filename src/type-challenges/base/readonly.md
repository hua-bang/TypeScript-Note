---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: MyReadOnly
order: 3
---

# MyReadOnly

在之前的泛型工具中，我们介绍了`ReadOnly`这个泛型工具。那么我们如何进行实现呢。

### 要求

Implement the built-in `Readonly<T>` generic without using it.

Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

For example

```ts
interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
```

### 解析

`ReadOnly<T>`构造函数`<T>`，并将它所有属性都设成**只读**`readonly`,也就是构造出的类型的属性不能再次被赋值。

我们仅仅需要在将它的属性设成只读即可。

### Answer

```ts
type ReadOnly<T> = {
  readonly [key in keyof K]: T[key];
};
```

### Tips

- [Answer](https://www.typescriptlang.org/play?#code/PQKgUABBDsELQQEoFMCGATA9gOwDYE9J44TSiAjfCAQWwBcALHKgMQFcIAKAAVXoDM2ASggBiNAGcqo8mwCWuOnDnYxAJzRY80zOQBWyAMZKA1snwSiRUTYgBFNsgl05OK1ACSAWwAOuZF7I9BCMyBCyCkoqEAAGKBg4BAA8ACoAfDEQAOZByGpyhhAA7nKMmGx0EGwSKlkQpQB07hAAwjjOamzGEhCoIfg+YSWMvbi4ED5qmINqLk4QmPwQKRASyJV0mBAaCdoANBCBfLUhDGGT03lzPYunYYbtdJ3GyOj9gxCGfNiYleRhOwkNSy2FeTSgRBYmDUEGQAA9UL5-M0Yqi6JYoCo6Hl+KhDGEUpgsBAAN5EKAuOj+ABcqyetXJEHQTkM+R8LhwtI6DKgAF9mg9sM4QkTMLSALL4eJaZKErBpCAAXlJjMpNIgACIABLmDV7RnMiSsuTs1zYWka-iYXSoNQaoj8iEU0UNNVhZXa5BjTAaiDAYAQACiaimalpX2wP0qgOBqj6OxlVAuMzohGdWAahuNppwSs15FtUJ9foDwdD4e+v22kljvWruwIEymKbTsVRzQVADU5MgigtVABxUpatjkWkMOh0HwSan+9GGBgNPQSBrQrLAaBgEDAMC70AQAD6R+PJ+PEAAmuUYW1mRAdRpD6enweINvd6mPpLpYl8KkFcqySgBMfwgABtMwqGiCDbhSABdWkUnA8xYIAbjAfk9xAR9nxPZYnEqFpUDWHocNPV8dzkXxoUqEkgwARzYVBcAOQM4UGYwIF5CB+CmLwIAAcm4D9kDgBcmP8bAcgkYAKgUCR+PfAZ7iI+ZlVAohWPYugkkDBimKSL9NB-VJRQARjSA5v20EysHMtILLAWDdyxHE8QJMyVQpUp1W5SSiCzNkOXNOl8j8qAHiRdZXlpchrX8PgiECOhUFpQCoF6ComDDEKeU49Dd0w7DSJfdhZjOGEAGVsWnIrSPIsBQCIBUKoYW0wnwK9VkwXBZPacdJ2nWdgHnRdl1XNR12gYA+AkIo8iaiBu17LqeqCmcIAnKcZznI1RpXNcN2ACRut6oUFvFaEwhaVqxiCKT+q2oaRqXfaJq3HcwCAA)
- [others Answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A7+label%3Aanswer)
