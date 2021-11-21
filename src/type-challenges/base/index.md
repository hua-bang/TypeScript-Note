---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: Hello, world
order: 1
---

# Hello, world

这个简单的提问希望让你可以快速上手 Type Challenges。在这里，我们使用了一些神奇的技巧让 TypeScript 通过自身的类型系统来实现自动判题。

在这个挑战中，你需要修改下方的代码使得测试通过（使其没有类型错误）。

```ts
// 期望是一个 string 类型
type HelloWorld = any;
// 你需要使得如下这行不会抛出异常
type test = Expect<Equal<HelloWorld, string>>;
```

答案：

```ts
type HelloWorld = string;
type test = Expect<Equal<HelloWorld, string>>;
```

---

- [答案链接](https://www.typescriptlang.org/play?#code/PQKgUABBCMDMEFoIAkCmAbdB7CB1LATugCaSIIWVkBGAnhAIIB2ALgBZZP0BiArhAAoAAgENWAM14BKCAGJAtw6BquIhkys9REAZGYDu3VVDSYsAGjyESAQj0RAm-GAqOUAB3oFVlQCFugBeNAd6mAYPUDY5oErowAbygPfKgKdygNf6gPgJgFBygNJGEAAqtAAOqBAAwmwimKhMAOaoAM6AQAyAFOrWgDOJgDD-gIhGgDdygP7ygBSugGFygABygNlygHqegOKazoABRoDnur7xSagAygDGBACWiSwQgFgJgOPxgFeBis6A3j6A0eqA3z6A+36ApuaAedqADc7LgBVKgCRKmoUqUGSltoCIxoAYRoC0chX+gADpgIGRgHfygJymgGg5QCdps5AMdygEAPOqAdP1ANK2gFXopaACH+6oA3RUAhTaASHMtoBMVMA99GASH-ClYAAZklj5MjAYAQQD45t5APRmLVsEHyLGmuQgWzILBGKAw2HwRGIEAAvBAxLQyGSSaTyZSoNSIF9vjDAEGagOsgBkIwCwcoAseUA2UaAL8VAED6gA49Hl8lgFObigCiAA9kuMWAAeO0AR14mVdBkFZmIJjZHJyAD5Q9KyVZAJ0OgG-FSKgiAkwClxoB15ReJIggAB9QDTmoA0fwhgEB-wCjpoAUBMAkIahQtWUMQYoQADiU3YvGoEEigFPzQDQ7oAsf7YLBYiXyAC5qRTxmwAHQAK3yk8IOWAcGAAC82AhUgA5MAgYBgfegCAAfRPp7Pp+V4Ihx-Pt6PEF3+95yX5hiFJDFrPZU05StQTtQF1UBFFgcGoFIRC-EN9zAQ871vCAEQaQBo+RveCL0fKYAFtEkIOYAG8IE9b10BMR1nRYExNywFhmHoABfCBxAILAsIgAByIRn1QBAJ0ydBsjyfJgF4FgpnQfJ2KfPlxhEfICk-ABtMhyMAt1qNorhfQFLB32IcMjBUgCXXdL0fT9XSAyDb9cnDMAAF0YNgkA0PQ+9ARaQBTa1c9CHz3UAyFrQAwJUAarl-GcQBjyMAFW8+wHIdR2Accp1necCEXZcxHyAB3VACFXdct0CiBu2i2LBxHMd8gnGc5wXJdYGAfIsHQUSpk4BUIFrQAXs0ALE0dDK+LKuqlK6rXDdt0fMAgA)
- [题目来源](https://github.com/type-challenges/type-challenges/blob/master/questions/13-warm-hello-world/README.zh-CN.md)
