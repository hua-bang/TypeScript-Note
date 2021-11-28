---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: Parameters
order: 13
---

# Parameters

Implement the built-in Parameters generic without using it.

```ts
/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #easy #infer #tuple #built-in
  
  ### Question
  
  Implement the built-in Parameters<T> generic without using it.
  
  > View on GitHub: https://tsch.js.org/3312
*/

/* _____________ Your Code Here _____________ */

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils';

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3312/answer
  > View solutions: https://tsch.js.org/3312/solutions
  > More Challenges: https://tsch.js.org
*/
```

### 解析

我们平时使用`Parameters`，很明显是为了拿到参数。

我们先来看看`Parameters`的使用方法。

```ts
type FnStr = Parameters<(args1: string) => void>; // FnStr实际上是一个元组

let a: Fnstr = ['213'];

let b: Parameters<(a: number, b: number, c: string) => void> = [1, 2, 'c'];
```

在这里，很明显，我们需要去使用`infer`

### Allow

```ts
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
```

### tip

- [Answer](https://www.typescriptlang.org/play?#code/PQKgUABBDM0IwCYIFoIAUCGAnDBbApgC75YDOkKyV1FARgJ4S4CWAJgPZbMBe+LEACgACLDl14sAlBADE+DKUYzmAOwBmJWYQCuABwA2+WbW3N9hZKooUZtiAEVt+UoWbsV1qAElcBvvhVCCEIACyMTMwtVdGw8IhJSAB4AFQA+CABzAJJmAGMIAHdmUPZtIO1SVQyIYoA6Twh0gDVmfAKIdwgAcWKACW1aAC4IEMJCXVJB4GBCUlyQ2oArUlrODOBYRDAQYDA90AgAfWOT05OIAE1SrAgAYXZWI16SIzO344gdvcJ6XSMAWXomBwBGIZBSEHwAA9iCpWKRBLUkdgMpMIBgVPRpABedIY+jpbFQZKQmEBeGI5FYVHDVQaG5oHF4zEQAD86AgwxU+AAbiQANz7EBHd5nCDJZxBW4KZwi0XnL7MXycIIAbwgAFEAI7aDD6AA0mqhf1yhENGuN+FNADE9aR8IaAHLsQja3X6CAAXwgaiw7FwEAA5EIfn9kPM9YYVFlSMAymZSIG9rl3C4fex2BAiQIUXBhi4uNHDSiEFztLhaCRJMMeew2Fn0qrPWAUyo07RsFnBLnhrQM4YMcXqaWIKqMMNAwBBQOe6sQWv13Gj5ut9sYbhdgRzhesBvL76-Iy5GUIokAbQoFpNhESbr1iUBwLiYKSofw7DU6fYqUNZ4LVUNFRy0rLAAF1Uh-S9LVNW8dXvR9YlBBJEjfD8IA7LAfwgM8+3YAcVENMcJ2nT1wMgqArytG8730B8gUQ+JwVQz8O24LCzzI-UwFAvYhTleVDgga1tCwUJNAAZWICZ+PlT5dlACh0nEkJsCMehrggUg8PjVNhlGcZJmmWZ5iWFY1g2eAEGADFSAKEhFIgFo2k07TXF0kYxgmKYZjmBZllWakLMQYAtP0HS2wc-5OCMW4VP0KMYz0zzDJ8kz-LWbZdjAIA)
- [others answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A3312+label%3Aanswer)
