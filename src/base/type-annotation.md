---
nav:
  title: 基础
  path: /base
group:
  title: 基础
  order: 2
title: 类型注解
order: 11
---

# 类型注解

## 类型注解

类型注解（**_Type Annotation_**），即我们可以通过编码方式告诉编译器我们变量的类型。

```ts
let str: string = 'str';
```

上方代码，表示我们告诉编译器，str 是`string`类型，系统就会进行对应的类型限制。

- **语法** ： `: Type`。如 `: boolean`。

- **作用** ：约定变量的数据类型。如约定 `bar` 为布尔值。

- **好处**
  1. 静态编译时检查类型。类型操作不合理时，编译器会警告，如： `Type 'string' is not assignable to type 'boolean'`
  2. 作为文档。在 VSCode 中将光标移到 `bar` 上时，会提示 `let bar: boolean`。

## 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

```ts
let num = 7;
num = '123'; // error
```

上方的代码会报错，因为我们没有明确说明 num 的类型，所以系统自动帮我们推断去类型`number`。故但我们用字符串赋值的时候，会明显的报错了。等同下方代码。

```ts
let num: number = 7;
num = '123'; // error
```

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：

```ts
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```
