---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: Awaited
order: 8
---

# Awaited

## 要求

If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type? For example if we have `Promise<ExampleType>` how to get ExampleType?

> This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)

```ts
/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>,
  Expect<Equal<Awaited<Z>, string | number>>,
];
```

### 解析

这里我们分析一下，并非只是取得`Promise`的结果，同时，当函数的`Promise`是新的`Promise`的时候，我们应该返回下一个`Promise`的结果。

我们首先来看一下，一般的`Promise`如何推导

```ts
type AwaitedSimple<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never;

type X = AwaitedSimple<Promise<string>>;
let x: X = 'str';
```

那我们如何实现进阶一点的版本呢？

我们只需要拿到类型后 做递归就行了

```ts
type Awaited<T extends Promise<any>> = T extends Promise<infer U> ? U extends Promise<any> : Awaited<U> : U : never;
```

### 答案

```ts
type Awaited<T extends Promise<any>> = T extends Promise<infer U>
  ? U extends Promise<any>
    ? Awaited<U>
    : U
  : never;
```

### Tips

- [Answer](https://www.typescriptlang.org/play?ssl=18&ssc=117&pln=18&pc=1#code/PQKgUABBCMAcCcEC0ECCB3AhgSwC4FMATSZJM8kgIwE8IBZTAY23wCsIBlbAawHsAnTBAAUAAQC2TFqwDOPAZgCUEAMT5MM2ioAO-XuOwz8JEirMQAigFd8M3Nl4A7E1ACSAMwjp8EABaYANx8hXGptH3RfbEZfCEMvQW1wwghQ8IgAGx4fAAU9AyMAOggACV50Lx9GTEcIAHN8XAgQsIiomLiZOMc5Qh9cXwjE5NTWgH4IADEBCHwAD0xxbQyfbE9vP0CfAAM8-UN8AB4AUQWllYAVVoA+bb9y1N56xohTxeX8K-CxlwhriAuUS6AEcbHYHLV4toBAQUu58qlBhAANoCbB1bCOTAZZr8eyMFYAXWEvlwuG0MgAXMBgH0AoVcLxgJJGHI+IJgJhCAEaowiEg0rZGPxsNpcEh5vh+MwjDIkKDbPYnEhoEgACwAVm4auUNBREikbDZCmJpPJVJpGIGVkohUY+mZhtk8kEil+-wAaiwKk4IABxPAlG2UvxkinU4C4GQxQqyQoCOrAODwMAgYBgDOgCAAfVzefzeYgAE1eFZ+BAAMK8PqlKU+AsN3MQNMZwVoLB4IiHC6zOYERyELp7ApHGrUa7-AC8AN7-cHEGHB0OmPcUogAFV-hN17P8AOh-kl2Ot+2cLDDpuICGdyHHPggvwANwQDNgLONhsAxWVjS2HMf-Nm3TbAlhhCAAG9XlBbEABpXjmcJGCaABfCB4X0CAAHJREFJAYmxFZHAaGRgCsewMhkTDW1aCAAA0IGnRcjEOOwRSI64wDbIsGIXQ9mMg9wWAyQhbyscRKDXZCOLbAAtHimKOBSWNwNi6ggAAfCBHDEiT+Anaj0mqWUeOREhTkQ3ATmgjJDgwM8u1o644NYzE6gnGCzIQ-AkKsqxsVsjtzyLJyILQoSRK0nTJPczyLN8-y7M7QhDhkkKXKIjTIvEqUYsJTNgAgHC5XmCyJX4PR+E4mipQqnjEvPbTsr0183xAf8AKbSYywGNcOAICl2o6oDWpIf4OH8fgfGoUtyxkXgMjIiEqVDc0IyjGM4wTJMEE5HpvEqqBPW9CA5oWpUehDM1wxpdbfFjGR434RNk2AU7FqcGRRvoAQfArfwMkI4jLrDC1I2jO7Nqe1N0zAIA)
- [others Answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A189+label%3Aanswer)
