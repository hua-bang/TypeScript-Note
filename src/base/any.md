---
nav:
  title: 基础
  path: /base
group:
  title: 基础
  order: 2
title: Any类型
order: 3
---

# Any 类型

在 TypeScript 中，任何类型都可以归为 any 类型。any 类型时类型系统的顶级类型。

```ts
let notSure: any = 666;
notSure = 'semdLinke';
notSure = false;
```

## 任意属性和方法

`any`本质是个类型系统的逃逸舱。给了开发很多的自由，对于 any 类型声明的编辑能量，TypeScriprt 不会去进行任何形式的检查。所以，我们可以调用 any 类型的**任意属性和方法**。（编译过程不报错，**开发过程**可能会报错）。

```ts
let value: any;
value.a();
value.b;
```

使用 any，确实可能得到比较宽松的环境，但很容易在编写类型中出现错误代码，如果我们用 any 的话，相当于 TypeScript 不会提供我们的检验机制。

故尽可能不要使用`any`类型。

## 未声明类型的变量

变量如果声明的时候，不用类型注释指定类型，则 TypeScript 会指定任意类型。

```TS
let something;
something = 1;
something = 'a';
```

等价于

```ts
let something: any;
something = 1;
something = 'a';
```

---

**参考资料**

- [any](https://tsejx.github.io/typescript-guidebook/syntax/basics/any)
- [一份不可多得的 TS 学习指南（1.8W 字）](https://juejin.cn/post/6872111128135073806)
