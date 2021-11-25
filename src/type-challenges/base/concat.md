---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: Concat
order: 10
---

# Concat

### 要求

Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

For example

```ts
type Result = Concat<[1], [2]>; // expected to be [1, 2]
```

### 解析

这个时候呢，我们可以使用解构的语法。

当我们向复原一个数组类型的时候。

```ts
type ArrType<T extends any[]> = [...T];

let a: ArrType<[1, 'a', false]> = [1, 'a', false];
```

这里，我们注意到，实际上是两个数组的合并。

### Answer

```ts
type Concat<T extends any[], U extends any[]> = [...T, ...U];
```

### tip

- [Answer](https://www.typescriptlang.org/play?ssl=22&ssc=64&pln=22&pc=1#code/PQKgUABBCsDMsQLQQMIHsB2BjAhgF0iUWJMICMBPCAQQwBMAnAUyoGkGcBnNAN04GsqACgACZZrAAM-DgDYAnFk4BKCAGImXKmpwMOFQoTXGIARQCuTTngCWmQ1ACSAWwAOAGybOmGPBDwAFkwQAFI4PDgAylgMNq5+AAbUejgUAHRYmLh4CRAAZubYtpgQNhj+Qf4UrsGcFNZeaTRVNf44-FYVwXgA7mgQugDm5t6+nE0AKpVo5niusxCcATPudBBkwTgQGEw9AylUgfil2O7mdJ1l83icJxDueAwQaAwXDA4QAGIvEEwAHjg3J4PglQTdCHhqsEAEpWcwPCAAXlQWXwAB4ANoARgAugAaCAYgBMOIAfBBgMBfn8alg8Ew1nh+htCViCSTCKCEh9yQA1Gy7Z7lADiNjwAAlzGQAFwQAJ4OacaWUm5YAJpABW4xeg2AcFgYBAwDAJtAEAA+pardarRAAJozJ7oC4QcVMZgWm1e80QI0myGtdDYdETan0+i3HAYCgY-EQACqYZ8dEj0dj5ORGIgaRzEwJ2Zz8ZxAG4TWAzd6vRAJlY-CguJ1KzbfcabG4Xn4AN4QACiAEdzDh3ASezSmHSIABffIMNDOCAAchEAaYiDVQ88GEGVmAsxs7k4C-9UIguE4nUzhFHtLwaP7g-caKD2UxcfTBPTpLxV7HdLvA6HJ9UVvWMP1xL9WTJL8fxvf8HyA4MQLZCASQ-WACQAFjJMD2QJdCICw0loKga9x1ve9AOfdEMQXLEF1wxdYAXN88iHc8CTINA0E8KMCQXDDmIgmi6IYhcmIJViDyYDiuJ4jA+IEqDvxxMtyxAT0m0tL5zAYQJ3QgSJ6VcW5NNtP1QEIclIgCXRggoR1Fm4vdMCVOUFWM5VgFVdUtTSHU9XgYAo04Hp3UsiB+UFbgzmKDBXPlRVPO8zVtQYXV9WAaLnLi8KAFkXmCFAbPcTdt3i9ylRVTg1RSvy0sNY0wCAA)
- [Other Answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A533+label%3Aanswer)
