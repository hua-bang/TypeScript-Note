---
nav:
  title: 类型体操
  path: /type-programme
group:
  title: 概述
  order: 1
title: 类型编程
order: 2
---

# 类型编程

类型系统不止`Typescript`,别的语言也有。那么为啥`Typescript`被叫做类型体操呢。

静态类型语言都有自己的类型系统，从简单到复杂可以分成 3 类：

## 简单类型系统

变量、函数、类都可以声明类型，编译器会基于声明的类型做类型检查，类型不匹配会报错。

这是最基础的类型系统，保证类型安全，但有些死板。

但当我们遇到下面这种情况的时候，却要进行重复的逻辑声明和编写。

```ts
function createArray(length: number, value: number): Array<number> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

function createArray(length: number, value: string): Array<string> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
```

这个时候，我们会发现，他的逻辑代码完全一眼，但我们因为类型，从而编写了两套一样的代码，这种不是我们所希望的。

所以，就有了第二种类型系统。

## 支持泛型的类型系统

泛型（Generic Type），通用的类型。

给了类型系统增加了一定的灵活性，我们可以修改上述的代码。

```ts
function createArrat<T>(length: numvber, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
```

会在调用的时候再确定类型。

但这里我们目前只能定义`T`，要是我们能对`T`惊醒逻辑处理就好啦。

于是，就有了第三种类型系统。、

## 支持类型编程的类型系统

实质上，就是对传入的类型参数（泛型）做各种逻辑运算，产生新的类型，这就是`类型编程`.

举个例子

```ts
function getProps<T extends Object>(obj: T): keyof T {
  return Object.getKeys(obj);
}
```

这里的`keyof`就是对类型参数`T`的处理。

`TypeScript`的类型系统就是第三种，支持对类型参数做各种逻辑处理，编写复杂的类型逻辑。

**TypeScript 的类型系统是`图灵完备`的，也就是能描述各种可计算逻辑。简单点来理解就是循环、条件等各种 JS 里面有的语法它都有，JS 能写的逻辑它都能写。**

对类型参数的编程是 TypeScript 类型系统最强大的部分，可以实现各种复杂的类型计算逻辑，是它的优点。但同时也被认为是它的缺点，因为除了业务逻辑外还要写很多类型逻辑。

## 总结

`TypeScript`给 `JavaScript` 增加了一套类型系统，但并没有改变 JS 的语法，只是做了扩展，是·`JavaScript` 的超集。

现在 TS 的类型系统是图灵完备的，JS 可以写的逻辑，用 TS 类型都可以写。

但是很多类型编程的逻辑写起来比较复杂，因此被戏称为`类型体操`.

## 参考

- [ TypeScript 类型体操通关秘籍](https://juejin.cn/book/7047524421182947366/section)
