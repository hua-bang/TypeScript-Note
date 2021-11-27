---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: Unshift
order: 12
---

# Unshift

### 要求

Implement the type version of `Array.unshift`

For example

```ts
type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
```

### 解析

这相当于 push 的反向操作。

### Answer

```ts
type Unshift<T extends any[], U> = [U, ...T];
```

### Tips

- [答案](https://www.typescriptlang.org/play?ssl=22&ssc=48&pln=22&pc=1#code/PQKgUABBDMAMBssIFoIFUB2BnAFgSwDMAXSFZci0gIwE8IArPAQwwHNcWIAKAAUZfY4WAWwCmRJgEoIAYlFMsdGUwBOKpjVKkZOiAEUArqKxE8AewxaoASWEAHADaixGIhCI5R7mna8A3URUscwwIMwIIAANogEE1DQA6A2x8YmjIqwgAMTMVCFEADyZ7J0z0oh9jAGMVPDsSKArfCAAlYwMHNwBedBTCIgAeAG0ARgAaCAAmAF0J2AA+CGBgCCHYCfGpsenSdMzFgDU8UQB3MNCAcTwiAAkDKgAuCBwiIjssB+WiLCqcBPosAlcqxgHBEGAQMAwNDQBAAPoIxFIxEQACaZgMeQAwmYACZeG6BLzIkkIiCQ6FNLyYXD9AYAFXyBSIogwuKwEBYNCGs3Qix6Q3QEwSIsZ0wA3NCwLDSSSIPTjG4sQpjPDZUjyVC8PZcm4AN4QACiAEcDEwHBNDQVfFUiJbraJbVlzVhRBMAHJmIgms0OCAAXwgBBUZmEEAA5DwqchfuanGxjMADKYHFhw5TKhAqiqOQLSFabYMfeaBjTUoMeRt5hNRtN5tX8w7bQNiw5S31iMNNjM5tXVusIN3tvWxo3Cy3TSWy3ShuGRuGJpMJuHoOHZlQzGYnCw+0MN1v5Bhl-PF8vV3WGzspTL1SispiPIEIABlFnvNW3uGa6XgKCLZ9CCoXg0BieRYFuyYhB8zyvO8nzAN8vz-ICwKgggsDACwWAnIEpCHMcZzgQ4kEWNBLxvB8Xw-H8AJAioIJghhREkdgeEQAAsrkXhYkIDjxqwxhPORcFUUhtHAhCUJgEAA)
- [参考资料](https://github.com/type-challenges/type-challenges/issues?q=label%3A3060+label%3Aanswer)
