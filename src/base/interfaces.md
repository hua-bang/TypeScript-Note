---
nav:
  title: 基础
  path: /base
group:
  title: 基础
  order: 2
title: 对象和接口
order: 8
---

# 对象类型和接口

接口是对象的类型

Typescript 的核心原则是具有对结构进行类型检查。（鸭式辩型）。

## 什么是接口

面向对象中，接口是一个很重要的概念，是对行为的抽象，而具体的行为实现需要类去实现。

TypeScript 中的接口是一个灵活的概念，除了可用于对类的一部分进行抽象，也常用于对**对象的结构**进行描述。

## 基础用法

```ts
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'tome',
  age: 12,
};
```

我们可以看出，我们约束了变量和接口的结构一样。

定义的变量比接口少一些属性是不被允许的。

```ts
interface Person {
  name: string;
  age: number;
}

// error
let tom: Person = {
  name: '123',
};
```

多一些属性也是不允许的

```ts
interface Person {
  name: string;
  age: number;
}

// error
let tom: Person = {
  name: '123',
  age: 12,
  gender: 1,
};
```

变量的形状需要和接口保持一致。

## 可选属性

有时候我们并不希望能够完成匹配形状，我们可以使用可选属性

```ts
interface Person {
  name: string;
  age?: number;
}

let tom: Person = {
  name: 'tom',
};

let mike: Person = {
  name: 'mike',
  age: 12,
};
```

理解：可选代表可以不存在。

但仍不可以添加其他未定义的属性。

## 只读属性

有时候我们希望对象的某一属性不可被修改。

```ts
interface Person {
  readonly name: string;
}

let tom: Person = {
  name: 'tom',
};

tom.name = 'hug'; // error
```

注意，只读的约束只存在于第一次会给对象赋值的时候，而不是第一次给只读属性赋值的时候。

## 任意属性

有时候我们希望一个接口运行有任意的属性，可以使用以下方式。

我们可以使用索引签名的形式满足上方要求

```ts
interface Person {
  name: string;
  age?: number;
  [prop: string]: string;
}

let tom: Person = {
  name: 'tom',
  age: 14,
  xxx: 'xxx',
};
```

上述我们只要求了对象中的字符串属性的类型必须为字符串。
