---
nav:
  title: 基础
  path: /base
group:
  title: 基础
  order: 2
title: unknown
order: 4
---

# unknown 类型

所有的类型的值都可以赋值给`any`, 所有的类型也都可以赋值给`unknown`.这使得`unknown`成为 TypeScript 类型系统的另一种顶级类型。下面我们看看`unknown`的使用例子。

```ts
let value: unknown;

value = 1;
value = true;
value = 'ok';
// ...
```

但是，我们无法直接将`unknown`的数据直接赋值给其他类型的变量。

```ts
let value: unknown;

let value1: unknown = value;
let value2: any = value;

value = 23;
let value3: num = value; // error
```

`unknown`类型只能直接赋值给`any`与`unknown`类型本身。

当然`unknown`也不会像`any`那样有任意的方法和属性。

```ts
let value: unknown;

value.a; // error
value.b(); //error
```

但我们可以通过断言`unknown`来进行使用

```ts
let a: unknown;
a = 2;

let num: number = a as number;
```

---

**参考资料**

- [一份不可多得的 TS 学习指南（1.8W 字）](https://juejin.cn/post/6872111128135073806)
