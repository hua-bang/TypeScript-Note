---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: IF
order: 9
---

# IF

### 要求

Implement a utils `If` which accepts condition `C`, a truthy return type `T`, and a falsy return type `F`. `C` is expected to be either `true` or `false` while `T` and `F` can be any type.

For example:

```ts
type A = If<true, 'a', 'b'>; // expected to be 'a'
type B = If<false, 'a', 'b'>; // expected to be 'b'
```

### 解析

这里的话，我们首先应该会想到用条件类型来进行相关判断。

这里有三个泛型参数，并且我们知道当第一个类型为`true`，返回第二个类型，否则返回第三个。

### 答案

```ts
type If<C extends boolean, T, F> = C extends true ? T : F;
```

### Tips

- [Answer](https://www.typescriptlang.org/play?ssl=23&ssc=59&pln=23&pc=1#code/PQKgUABBBMBsAcEC0ECSAzSyk91gRgJ4QAKAhgG4CmANhAOI0CuAzgBYDWA9hRABQABAA5l2TAC4cAlBADEVUcVkSAljRZYss7RACKTKi3EquAO01RUAWyE0qVqqfEQyEVeogADDJ4gB3NhUAYzYXIKCqIXEWCCCzABMVYzMvAGFPABoXCHEAJwk2YlyqcSZc0xzCISovABVMl1N47PQydSKSsorxKprPADFPADo03xUYqgAPaqDxKmbxLgh8GqoktipcrzyDXy4tz1b1Kl8AtT76xuaB3yCyCpXG4h7qoYsIfv2IKbIbOwAud6eYHRLAvGoAQQgAF40OgADw7KhZADkZBRqPwKIAfFBgMBvtMqLN5jklo80Siwb0IAAhGFw+FHFjIiCUzE4iD4wkzOYLck1FFYrDAzzvXEANRUVD8EBS9CSAAkmPh-hA2OJxEIWP98dEQkMAFYsIb7ADmwDg8DAIGAYHtoAgAH0Xa63a6IABNLhlCCpLjxGqKzY1d1hl0QW328GM1KEuZNGL4LhcOz3LK1LL9XGwuNTBPxGJIiAAfggtQgav6AG57WBHeGw+XDM5UqJDM7G27I3aVDZ9s4AN4QACiAEcmG0siOibMIABfCDoXJcKxsgTgpAhNp2UxmwzAdwsKlgGN3FkxWEAbSwM958PHk5o8IwiPyrPZbKx2NR6OxP9vWdxAfCc2hfBFmQ-dEsmgH8YH-DIwAAXQdAkNxYJApl5TDchXXJTxpTY8IZV9TCYGgaF-DEvxxOt6xATsuwjfoynEDYtgAZTmbVGKYnt6KwXEOLYMhiggQgfS2FhU1UMwdXVTVtV1YB9TYI0TXNS0EGAe4WD8TZBIgKUZQgaTmGSUx5I1LUdT1FgDWNU1cgtK1gDM2TLMMgBZfYalSESKMcfcrMU2yVPstTHPNG07TAIA)
- [others Answer](https://tsch.js.org/268/solutions)
