---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: string to union
order: 20
---

# String to Union

### 要求

Implement the String to Union type. Type take string argument. The output should be a union of input letters

#### For example

```ts
type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
```

#### case

```ts
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<
    Equal<
      StringToUnion<'coronavirus'>,
      'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'
    >
  >,
];
```

### 解析

我们只需要判断这个挨个挨个字符去做类型判断。

```ts
type StringToUnion<T extends string> = T extends `${infer A}${infer B}` ? A | StringToUnion<B> : never
```

### Answer

```ts
type StringToUnion<T extends string> = T extends `${infer A}${infer B}` ? A | StringToUnion<B> : never
```

### Tips

- [answer](https://www.typescriptlang.org/play?ssl=34&ssc=2&pln=27&pc=1#code/PQKgUABBCsDMCMEC0EDKAXATgSwHYHMJ0B7CAVV22N0mSXodoCMBPCAQVwBNMBTNgNKYAhgGdiAN1EBrNgAoAAkz6wADNJEA2AJwBjUQEoIAYgC2vLtgCupk1crUTorHny1axzxACKV3s6oaKFoASVMABwAbXnNcdCIAC140FwIiUgpAohZw3gA6CAAVHOT0YWlk5xw04Ux8G144gsKkiGIrdHCOiFEE9siuCCZk4Qh7LOIAMwg8Lvjo9HReTFF3KAAxYkwIXgAPYQjotYgAAzP0Vah0EqL-eIBeCAByeAAmWCeAblpr3IgAJX8VkiDxS1XwhWImWoAB5CncAHyfCDAYA7Xa5XRLQYkIbJABE8HxEAAPhB8a9iWT8bB8bQzidjgiIAA1bC8ADubVwEAA4th0AAJKxMABcEASi3ColFqIuugSeQAVqI8lt8MA4PAwCBgGB9aAIAB9E2ms2miAATXa2wAwsQuMlBctkua3SaILr9b9khhwZDobg4eiltxRD1UvhmY9CiHGlxwycACQAbzwk2WHAAvqn05mAEJZk4QAD8HFJYNcAYcQfzzPFuF4EmW3wNIGN7vNt2cEFtYn8Hc7Fq92AiW3iKYgAFEAI5WYSRAA004xvCxECzEEmmGItieCh9SAVC+iBH8wA62Eioie3puun74ceAG1aFPV1iYbP55EYX6q1CNYwvi+IIsujbNpgCJgW+H7oF+c4Ln+kbVoEwHoKBy74hh0GLrBmLwd+SH-gQqGwviSSRJExCYeSCRUuSvAMfikTMaxFb4jRuH4WuhGIb+JEQoBaH4roWzUMIEjYJgViiLRonMTRHGYIpzG4MxwjMRIzHYMxKkcVYzFydxAC6+ptoOQ5GhA6xWJg6BJNsGC8NKllDp6eqgLQzKoAktTJCwNo9MQkSXtQMoSlKMpyqICrKqq6qaggwDCLgogcss3msuyXLiKF6CBBFkqdNFwDyoqKpqnUSXwMAeVhWlWUALJbMktp+VRjT4P44rFdKsplbFFUJXUOp6mAQA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A531+label%3Aanswer)
