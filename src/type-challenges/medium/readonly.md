---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: ReadOnly
order: 3
---

# ReadOnly

### 要求

Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.

`K` specify the set of properties of `T` that should set to Readonly. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.

For example

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
todo.completed = true; // OK
```

### 解析

很明显，这里我们需要接收两个泛型`MyReadonly<T, K>`。

并且我们知道这里的话的`K`实际上是`T`的键值的联合类型,故`MyReadonly<T, K extends keyof T = keyof T>`

我们去筛选出`T`中含有`K`的类型，并转成`readonly`,故有

```ts
interface ReadonlyKey<T, K extends keyof T = keyof T> {
  readonly [Key in K]: T[Key];
}
```

但这个时候，还是不够的，我们得保留`T`中除`K`以外的键的属性,这里我们直接用`Omit`即可

### Answer

```ts
type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> &
  {
    readonly [Key in K]: T[Key];
  };
```

### tip

- [answer](https://www.typescriptlang.org/play?ssl=40&ssc=2&pln=38&pc=1#code/PQKgUABBAcELQQEoFMCGATA9gOwDYE8IAmSeOci0gI0IEFsAXACx0IDEBXCACgAFVGAMw4BKCAGIAtsnQBLDpIkAnNFjyFxmKgCtkAYwZwA1snwBnUqXHWIARQ7IzDWTktQAkpIAOuZNMYQqBAA5sjYyEqyehAABgCy+CgYOAREADwAKgA0EADSAHwxEADuTFFMEAyoJmaVxZiV+F7IgUrBCmEMsRlFAuixuTEAdG4DRWbNerKChMwtZshdmIIQXkqYzUrOjhDL3UXMqF1mLBy4-QtdDA1JagRDEADqTGFjELK12Jhda5gAbrJ0DIcrJjqdzhBJNUWqhcLhVutNttaipkuoINoOE4ILhZCZKi8IF8lFD4TFbil8JlCiMoKQ2JglBBkAAPVDeXyjGLchgWKCyRgRQSoPQtDKYLAQADepCgzgYvgAXBAnJFsMFZRAgWY9JEvM4cMrVQKNVAoHpMBzFjJlVRMJhfAJSABfUYW7DY65YZUJCnqdLirA5ADk8t8wYgAB8IMHtbrZPqXNhg-kIABeaWasPIZUAIgAEqZc1lNXG9QbsHnBPaqKglMXNRarQwbRBhbgFiWoK66XKJZghtn0xAC8g4ZhcxBgMAIABRJTrJTKvQCL5dVFmMyyYLYQIQVF3Qi-JH4UhegdlhMV4e52tKBkTqcz+eL5er777tCb7e7oIHykIhsEQMKefZYEMTY+Na-QZgwSgOE+EAAPK5KQ3IxKMqYAGqyMgxS7LuADioL5hwVDKkwDAMF4ZiKtOvJ6EwQzaGYQyMsEwDQGAIDAGAfGgBAAD6wkiaJIkQAAmpgHBMgAwhKLSFioQliapgkQDxfEgc0EC+qolIBjkuTMiyLbYOgtQmPgewZMOVk2amGZIZIoKZEZqYAGSZlA-7ogA2rkpjvLuuQALrKhkAWmKFYCumAAlqapEAZI4XSyagCy1IlYkabxsjeIyXRShAtC4iYOSziykxdM6bbrIowa8NpyBwIxsK+OqjjABwzgdsGWlNC0K6ZcOfmkJV1VpKVeLIGkeloqkmT9gAjPkOR+gQS1YKt+RreNVX6AwU1lbN82HgGK0htmEbRrGjjxomOAphVB0GDIu1dnOr1HdNJhzYk+n+ltmBEFdoLhlGMaXo9yZrV91XvXtMVgAKLZKMKorJSt3mVODOYqnBJqkNDFYAPxGoT6qkJBvgtugtr2o62CxXxqNCiKYr9kQOO+QQuMKvjxpU1AJNJuTBNqqaEA09BDMOmgzNxWz6Mc-Dh0yDzgN89mFOS6QvOEKLODi0LUsy3TctMyzfHxSAKnZcJECcFsLxMgAyi2NH2w7uW26QqZu0wdYtNZMkqg6PVJrRECUdRtH0TqTEsWxbSccAAhmMUET+xAOF4eHuCRzg0exzRdHAAxSesexadmBHFZ8hAqZxIyLSyUHcJhKEJdUWXCeMcx1dtNxvFgEAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A8+label%3Aanswer)
