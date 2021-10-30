---
nav:
  title: 基础
  path: /base
group:
  title: 基础
  order: 2
title: 原始数据类型
order: 1
---

# 原始数据类型

JavaScript 的类型分为两种：**原始数据类型**和**对象类型**

**原始数据类型**：

- 布尔值
- 数值
- 字符串
- `null`
- `undefined`
- ES5 中的`Symbol`

#### 布尔值

```ts
let isDone: boolean = false;
```

#### 数值

```ts
let num: number = 2;
```

#### 字符串

```ts
let str: string = 'str';
```

#### null

```ts
let n: null = null;
```

#### undefined

```ts
let u: undefined = undefined;
```

#### void

void 可以等同于`undefined|null`

```ts
let a: void = undefined;
```

#### Symbol

```ts
const sym = Symbol();
let obj = {
  [sym]: 'semdsa',
};
```

---

**参考资料**：

- [原始数据类型](https://tsejx.github.io/typescript-guidebook/syntax/basics/basic-types/)
- [一份不可多得的 TS 学习指南（1.8W 字）](https://juejin.cn/post/6872111128135073806)
