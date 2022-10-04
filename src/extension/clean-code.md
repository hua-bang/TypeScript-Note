---
nav:
  title: 扩展
  path: /extension
group:
  title: 编码规范
  order: 1
title: clean-code
order: 1
---

# clean-code-typescript

> 原文链接: [clean-code-typescript](https://github.com/labs42io/clean-code-typescript)

## 简介

这并非是一个代码风格指南，而是一个让`TypeScript`编写可以更加可读，可重用的，可重构的软件的指南。

我们要在以往的代码中，进行反思，但我们不必过于自责，行动修正远比自责重要。

## 变量

### 使用有语义的变量名称

变量要有使用的语义，让读者知道变量的区别是什么？

<b>Bad:</b>

```ts
function between<T>(a1: T, a2: T, a3: T): boolean {
  return a2 <= a1 && a1 <= a3;
}
```

<b>Good:</b>

```ts
function between<T>(value: T, left: T, right: T): boolean {
  return left <= value && value <= right;
} 
```

我们要给变量赋予相关的语义，有以下两个好处：
1. 代码更加清晰明确。
2. 增加易读性，别人使用的成本低。

### 使用可拼读的语义

如果你不能把它读出来， 那你又真的理解了吗

<b>Bad:</b>

```ts
type DtaRcrd102 = {
  genymdhms: Date;
  modymdhms: Date;
  pszqint: number;
}
```

<b>Good:</b>

```ts
type Customer = {
  generationTimestamp: Date;
  modificationTimestamp: Date;
  recordId: number;
}
```

### 为相同类型的变量使用相同的词汇

<b>Bad</b>：

```ts
function getUserInfo(): User;
function getUserDetails(): User;
function getUserData(): User;
```

<b>Good</b>：

```ts
function getUser(): User;
```

### 用有语义的常量代替魔法数字

我们编码的时候，很多时候会使用魔法数字，如 24, 60, 100等，但我们并没有明确地指出其中地语义，这是糟糕地。

<b>Bad</b>：

```ts
setTimeout(fn, 86400000);
```

<b>Good</b>：

```ts
const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;

setTimeout(fn, MILLISECONDS_IN_A_DAY);
```

### 解构也要保持变量的可读

<b>Bad</b>：

```ts
declare const users: Map<string, User>;

for (const keyValue of users) {
  // iterate through users map
}
```

<b>Good</b>：

```ts
declare const users: Map<string, User>;

for (const [id, user] of users) {
  // iterate through users map
}
```

相比于Key, Value id, user更为可读。

### 避免心理映射

清晰的代码往往是最好的表达。

<b>Bad</b>：

```ts
const u = getUser();
const s = getSubscription();
const t = charge(u, s);
```

<b>Good</b>：

```ts
const user = getUser();
const subscription = getSubscription();
const transaction  = charge(u, s);
```

### 避免不必要的上下文

如果你的类/类型/对象名有意义， 不必在变量名上再重复。

<b>Bad</b>：

```ts
type Car = {
  carMake: string;
  carModel: string;
  carColor: string;
}

function print(car: Car): void {
  console.log(`${car.carMake} ${car.carModel} (${car.carColor})`);
}
```

<b>Good</b>：

```ts
type Car = {
  make: string;
  model: string;
  color: string;
}

function print(car: Car): void {
  console.log(`${car.make} ${car.model} (${car.color})`);
}
```

### 使用默认变量替代短路运算或条件

默认参数通常比短路运算更清晰。

<b>Bad</b>：

```ts
function loadPages(count?: number) {
  const loadCount = count !== undefined ? count : 10;
  // ...
}
```

<b>Good</b>：

```ts
function loadPages(count: number = 10) {
  // ...
}
```