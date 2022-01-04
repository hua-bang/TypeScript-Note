---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: StartsWith
order: 26
---

# StartsWith

### 要求

Implement `StartsWith<T, U>` which takes two exact string types and returns whether `T` starts with `U`

For example

```ts
type a = StartsWith<'abc', 'ac'>; // expected to be false
type b = StartsWith<'abc', 'ab'>; // expected to be true
type c = StartsWith<'abc', 'abcd'>; // expected to be false
```

#### cases

```ts
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils';

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
];
```

### 解析

例如`StartsWith<T, U>`，我们只需要判断这个 T 中是否在有 U 即可。

```ts
type StartsWith<T extends string, U extends string> = T extends `${U}${infer R}` ? true : false;
```

### Answer

```ts
type StartsWith<T extends string, U extends string> = T extends `${U}${infer R}` ? true : false;
```

### TIP

- [answer](https://www.typescriptlang.org/play?ssl=34&ssc=2&pln=28&pc=1#code/PQKgUABBBMBsAc8IFoIGUAuBDAThgzgOoCWGAFpCstTZQEYCeEAVsVgHYDm+ZHEAFAAFWHbr3YBbAKbYAlBADE0gCbEArhMUYpEgA4AbLNuT7SUnFn2VKC2xACKaqfgzEA9u2tQAknv06pdgwIAANMXAIScgAeABUAGggAVQA+EIgAdzJiAGMyCGwAa2cCjLcIKQAPLBzglxxiLgKGXRKOZQgcGTUcdnxMshlBnFDY9JcI-ozSfJCkkK8IADE3EaqsPylFkJ2MFuccht0MSj3WiCwIAF50bDwiGeiAciw6HKfEl-eUiGBgCsqrVqUg6GHKdCkEAAZpZ8FsoGdIXRrrdJlEyM9Xu9Pq8nj8-gCgdpQeDIRgcE5TvsIDkUeF7ujMW8PhAXm9lHjfv8qkSQQVSdDYfDQjtFj8AGrEKQZCAeCAAcVIAAk1HQAFwQMgYDC6fBqv4EPIAOmY+CNq04wDgiDAIGAYAdoAgAH1XW73W6IABNNw9CAAYTcykhSvMkI9EddEDtDsRqIZj1iAO07GU-XqjU4iSSycCaYgGa4PxuSaqKfzIQAJABvJIAXxrjSh5ggACU6+kAPwFCmQjUw-RwgDcDrATsjEYgsWcwX9WDh-QnHuj9uIelWwWrEAAogBHNSWRLbwFSWpHk+1JZCxIAOTcGD3B-0EDr0Jwbk0T0EiOQeUs-i4ZxgDUVxByeWNqRyecShuABtShjyJaJH0saJ6UiR42WxVkajxRIBzhFIUniBCLwwZD91Q9CHhiLCWTZPCeycIiSKgRDT3IlD9DQu4MNorF6KxDliMFQcpBYsAAF1RzHEAXSXT0lh6cgW0wKRdXkhTnRXWTKB+NBeC6CAGF9EZ8DcfQQPcPoNS1HU9QNfBjVNc0cEta14GADh8Aycw9IgSVpQLCyrI8PVNW1XV9WAQ0yBNM0LStBBPPMyzXDC-yAFlVkhf1eH0ADOGcWzIocmKnLilyLVte0wCAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A2688+label%3Aanswer)
