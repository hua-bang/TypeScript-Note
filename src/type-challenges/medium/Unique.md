---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Unique
order: 30
---

# Unique

## 要求

Implement the type version of Lodash.uniq, Unique takes an Array T, returns the Array T without repeated values.

```ts
type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2 = Unique<[1, 'a', 2, 'b', 2, 'a']>; // expected to be [1, "a", 2, "b"]
```

## 解析

我们每次用条件类型把参数分成两段，并且判断一部分类型是否在另一部分有出现。

## Answer

```ts
type Unique<T extends any[]> = T extends [...(infer Rest), infer Last]
  ? Last extends Rest[number]
    ? Unique<Rest>
    : [...Unique<Rest>, Last]
  : [];
```

### Tips

- [Answer](https://www.typescriptlang.org/play?ssl=26&ssc=13&pln=22&pc=1#code/PQKgUABBCsDMBsAGCBaCBVAdgSwI4FcBTSVFM8kgIwE8IAFbTQgQwAdWAbQiACgAEGTNp0KIAnAEYxASggBiALaEAJtnwL5zAE5bm1EiTlGIARSIBnAC7YA9pgNQAkgpFLMliJYAW3S9VbcAG6EWua2mBA2AGYQADI2yszmXgB0+Di4ADQYGUQAPAAqAHyezADWhOYQzBEAgjp6EAXZWoSW+FqYVd7c9bq0BRAA7tjeNvgerQHMlioQgcwcFikOEAAGG5bmJH4BEABKlRAAvDl4+QDaEtnXEABM2Q8QsNmwALpFANwQwMAQhAAPAIAY1myk8NgglG4V0erzeO383EO5gkJzOBEIeVh91e2QALATstBsvBsgB2D7fX7-IGEUFzSyQ6EQHFPF4QQkwUkUhFQXbIyp3dFYc5YnEAImYErhEAllBluLl0qpPz+gJBYIhUJhtyliqe8olfPWG1WJQAathCENIhEAOKjAAS+EoAC4IF5LJZWOY3b8tsDUgArcwpGxaADmwDgSDAIGAYCToAgAH10xnMxmIABNcZaCAAYQS3CdIW4Wcr6YgCaTAox+UGgNmmGUVRq1AuH3RTYBLbbrJSQ8YURCB0qlmyI7HsSSljeEBIAH44nPaf2qijLBdMOpoVoFyQoCvRZi8luSkeoBAPRchylT-kL9lZ1ZD9fr7e3t8k2AU1XKyaCciySI4AKzGtE2wFwIw8ABvCAAFECEWbJELpUEIAAXwgKItBsDQAHI+AFFAg0WLhMEjSpgAmbAOHMQi6yRCBgVAqpTguEh0M1PJkPwRY8kfcVbluJ52XhIpsjZSSpO4jDLD4lCOCE3IRNlDkuS5EkIDJCBKSk1kxLxTliR5fSPjkqAePpRT+ME4TsT1aVZSNVyVUMyUXKVI1LLABFf3-cDswAMQ6HoCwAZVmX002C6ta1AEgSkirxtG4ah8wgcwbCWaw7D9T1vV9f1gEDEMwwjaNY0QYAanMIYQmSiArRtbLcrogqPS9H0-QDcwgxSUNwyjGMEFqnK8vCbYoBKABZCNuELNKOEo6jCp6kr+sG4aqvjRMwCAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A5360+label%3Aanswer)
