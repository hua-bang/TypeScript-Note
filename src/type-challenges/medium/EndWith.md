---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: EndsWith
order: 27
---

# EndsWith

### 要求

Implement `EndsWith<T, U>` which takes two exact string types and returns whether `T` ends with `U`

#### cases

```ts
type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
];
```

### 解析

例如`EndsWith<T, U>`，我们只需要判断这个 T 中是否在有 U 即可。

```ts
type EndsWith<T extends string, U extends string> = T extends `${infer R}${U}` ? true : false;
```

### Answer

```ts
type EndsWith<T extends string, U extends string> = T extends `${infer R}${U}` ? true : false;
```

### TIP

- [answer](https://www.typescriptlang.org/play?#code/PQKgUABBBMBsCcBmCBaCBRAdgEwM4HUBLAFwAtJUUrqKAjATwgCtCBDTAc11PYgAoAAi3ZcemALYBTYqwCUEAMRTshAK7jFxSeIAOAG1ZaUekpIBOrPRQoLbEAIqrJuYoQD2ma1ACSuvdslMYggAAyw8IjIAHgAVABoIAFUAPhCIAHdSQgBjUggZAGtnfPS3CEkAD1Zs4JczQk58+h1i9mwIM2lVM0xcDNJpAbNQmLTAvAySPJDEkK8IZIgANUJJdIgPCABxEgAJVVoALghSYmIdXEPgYGJcXIA6Jlx7tzMOYDgkMBBgMD-QCAAfWBINBIIgAE03N0IABhNzYSQQXbmJFg9HAiA-P7EZpI8IEKaxcoVLQ4Pp1BocBKJElkiaUziLAC8EBidPGfRCABIAN4NABm5ggACUAL58xJitIAfnyZicEGOAssuEkAG4-mAARj0WznMFYaw1X1dWCsb9CLpXsFeRgAI6qSwJdAVFo1F1uyQ1ABiqskCQAcm5iOhHZYIGKIAKzG4NAByAS4looXKWfycZzAVSuPS4eM4vEQbLG4qsgDaFFd7uIUTDTr0dfJkVIUXjrFo2XjCXjnfjyQSxAVkmSA6rXpqdfDjYJLbbHa7PYX-cHw9HcXHNanDabESJ7b7PewK+j-vXYAAulrtSAgWbwT7umRhQBlLQXO-3wEWm8URYvnhOggehoWGXA3D0HN3F6Y5TnOS5rluB4nheN4PgQRBgHYXB0nMP9llWdZwMg1wPEuE4zguK4bjuUhHmeV53k+TDiKgsj8IAWVeJFYR4PQMw4ZxYMohCaOQhi3m+X4wCAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues/5550)
