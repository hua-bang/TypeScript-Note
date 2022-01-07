---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Shift
order: 28
---

# Shift

### 要求

Implement the type version of `Array.shift`

For example

```
type Result = Shift<[3, 2, 1]> // [2, 1]
```

### 解析

我们只需要保留后两位数字即可。

### Answer

```ts
type Shift<T extends any[]> = T extends [infer first, ...(infer rest)]
  ? rest
  : never;
```

### Tip

- [answer](https://www.typescriptlang.org/play?ssl=22&ssc=86&pln=22&pc=1#code/PQKgUABBDMAMBsAmCBaCBlAFgSwGYBdJUUTSiAjATwgCtsBDAOwHMBnTJiACgAE6m2HRgFsApvnoBKCAGIxAE2wBXYbPoAndfUpEiM-RACKS0a3zYA9o11QAksIAOAG1FjG+CPkyjPlBz4A3UXVWS0YIC1wIAANYgEFNbQA6djx8WOibCAAxC3UIUQAPekcXLIz8P1MAY3VsB0IoSv8IACVTJScPAF4MHAIAHgBtaAAaCERxgEYAXQA+CGBgCCHJiFmiDKyFgDVsUQB3CPCAcWx8AAklcgAuCEx8fAdWG6X8VmrMJJpWJLzmYBwJBgEDAMDg0AQAD6MNhcNhEAAmhYlPkAMIWeQ+C7BHzw-EwiCg8HNHxYNIDAAqBUK+FEjHkrAgTEoQ3mEF61KKdIZTKG2EYuGCEFw2BC+HGSSlAqF+XUpnwMwgAH4IPKzBA7oxREF1ABuCDgsCQgn4iCUhUQNH0VimaGmuFEsHYRx5DwAbwgAFEAI5KehOcZewr+aoS70h0Rh7IB23jAByFnwvv9TggAF8ReoLKoAOQ8UkoT4BlwsUzAJTmJysXMkqoQao2u29IZEYOh-ADFMBgbkwYjcZrWZzcarabzEdtyNhrt+nt9ztDXP0XPjXPkVcQXPVTe5+Sb+aj9e7ndr-cT0ZgGZG40ge0OwnZVFeYXoOnPe8Pp23ogLLAaHxKBRfJWAsJxKzCF57keZ5XmAd5Pm+X5-kBBBEGAJhWAOYJfwgPZDggUDwPMKwoIeJ4XjeD4vh+P51ABIF0KIiDSNwgBZPIfDRDgnFLZhTDucjYKoxDaP+EEwTAIA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A3062+label%3Aanswer)
