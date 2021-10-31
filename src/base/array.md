---
nav:
  title: 基础
  path: /base
group:
  title: 基础
  order: 2
title: 数组类型
order: 7
---

# 数组类型

在 TypeScript 中，数组类型有多种定义方式，比较灵活。

## 数组成员类型

最简单的方法是使用[类型+ 方括号]来表示数组

```ts
let fibonacci: number[] = [1, 2, 3, 5];
```

数组的项不允许出现其他的类型

```ts
let fibonacci: number[] = [1, '2', 3]; // error
```

数组的一些方法的参数也会在定义的时候约定的了习性进行限制

```ts
let fibonacci: number[] = [1, 2, 3, 5, 6];
fibonacci.push('8');
```

所以上方只允许数组中传入`number`类型的参数，传入字符串的话，会报错。

## 数组泛型

我们也可以使用数组泛型(Array Generic)`Array<elemType>`来表示数组。

```ts
// 表示声明的数组必须是数字类型
let fibonacci: Array<number> = [1, 2, 3, 4, 5];

// 表示数组可以是任意类型
let foo: Array<any>;

// 表示声明的数组是某个类型的时候
let bar: Array<{ name: string; age: number }>;

// 表示数组元素必须为name的对象，age可选
let baz: Array<{ name: string; age?: number }>;
```

## 用接口表示数组

接口可以用来描述数组

```ts
interface NumberArray {
  [index: number]: number;
}

let arr: NumberArray = [1, 2, 3, 4];
```

这里的接口表示的是：只要索引是数字，那么值的类型必须是数字。

## 类数组

类数组(Array-like Object)不是数组类型，比如`arguments`

```ts
function sum() {
  let args: number[] = arguments; // error
}
```

实质上，`arguments`实际上是一个类数组，不能用普通的数组方式来表示，应该用接口

```ts
function sum() {
  let args: {
    [index: number]: number;
    length: number;
    calle: Function;
  } = arguments;
}
```

在这个例子中，我们除了约束当索引是数字是，值得类型必须是数字之外，我们也约束它还有`length`和`callee`属性。

事实上常用的类数组都有自己的接口定义

```ts
function sum() {
  let args = (IArguments = arguments);
}
```

其中`IArguments`是 ts 中定义好的类型，实际上是

```ts
interface IArguments {
  [index: number]: any;
  length: number;
  callee: musi;
}
```

### 任意值的数组

注意，要和元组进行区分

```ts
let list = any [] = [1, '2', true];
```

---

**参考资料**

- [数组的类型](https://tsejx.github.io/typescript-guidebook/syntax/basics/type-of-array)
