---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Last
order: 6
---# Last

### 要求

Implement a generic `Last<T>` that takes an Array `T` and returns its last element.

For example

```ts
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
```

### 解析

这里的话，我们可以使用类似与数组解构的方式来判断。

即有下方关系

```ts
[1, 2. '3'] --> [...any[], '3']
```

### Answer

```ts
type Last<T extends any[]> = T extends [...any[], infer R] ? R : nerve;
```

### Tip

- [answer](https://www.typescriptlang.org/play?#code/PQKgUABBCMCsEFoIBkCGBnALhA9gMwgEEAnY1AT0kQRtqoCNyiA7TACx2aYDEBXCABQABVKzy8AlBADEAWwCmAEwCWvWTNSkKVKtL0QAir3lZlnHVAB8EACrkADvIDKAY2LL72ACwA6AAwQyugQxPIuOLIKzIpKgcwQ7EEQLmyoADZp8swA5vIWEACSsvaZUdioELnM8u4uEAAGaFgAPDaW9Qmp2JioANYmEKJEWkz1Nh2iiiHymLzEzMHKmMFpGNjypVmYPvncOMQQ8gAeqMWZ+fWXy1SYDvKDpNAQALwQANoA5KgfADQQH-Rfv8XB8ALo3O4PYgAJhe7wAzH9oX9oOCoBDHAlUMo0k9Xk1MM1NMRoNZgMBDkdHC5MLFMDgIPR7h8QRj7j0cbD8WsiaRoWSKcdqbSpvTGfdoFRLvV8tYAGrKeQAd1w8QA4ksABK8egALggbEwmHs6F15OWKR8ACt0D59tlgHAwCBgGA3aAIAB9b0+30+iAATRwcwgAGEcDEIJqavc-XHvRAXW7bpiCa1KbTosFROQ3qDrK8bBmsopgm8fBWc3m-spmHgahAAEoQUEQAD8TYg+uqADcagBuCBusAe+Nx2wmbChjADMd+xOu5TFfbYADeEAAogBHXjpP4bqlhbAAXwgeGIEX+QhT8gQKXSmRyJmAvEwOPQH2TkJcM+CrzeVAHsKzTbruaTNGmbyIhAyIwPmKKWJYPyAYeNIgTu6QQTybwCFIzzWNA0LQeuqD6lg7g5BAx7wRAJFkZgFHZFRiHIeCw6jnO-p8MQ7ANk4tIml6nEJkmoBUNYTipKEEDkMGBzoDgaSvmYCz6oaxqmua6CWjadrEA6cDAKI6BKjU4kQAqyoQApSlvpwpoGkaJpmsAFpsNatr2o6sDADZyn2eZACy+z3KGqQZFkuQOepzlaTpnn6c6rpgEAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A15+label%3Aanswer)
