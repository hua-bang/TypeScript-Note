---
nav:
  title: 进阶
  path: /advanced
group:
  title: 进阶
  order: 3
title: 类型兼容性
order: 2
---

# 类型兼容性

类型兼容性用于确定一个类型能否赋值给其他类型。

如`string`与`number`类型不兼容

```ts
let str: string = 'hello';
let num: number = 123;
```

## 安全性

TypeScript 类型系统设计存在一种情况，就是当编译器认为你是什么类型之后，他就允许你使用这个类型的行为,但这个往往不安全。

```ts
const foo: any = 213;
foo = 'hello';

foo.toPrecision(3);
```

## 结构化

TypeScript 对象是一种结构类型，只要类型匹配了，名称就无关紧要了。

```ts
interface Point {
  x: number;
  y: number;
}

class Point2D {
  constructor(public x: number, public y: number) {}
}

let p: Point;
p = new Point2D(1, 2);
```

上方代码不会报错，因为 TS 是结构化的类型。

这允许你动态创建对象，并且它如果能被推断（只要结构符合），该对象仍然具有安全性。

```ts
interface Point2D {
  x: number;
  y: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

const point2D: Point2D = { x: 0, y: 10 };
const point3D: Point3D = { x: 0, y: 10, z: 20 };
function iTakePoint2D(point: Point2D) {
  /* do something */
}

iTakePoint2D(point2D); // ok, 完全匹配
iTakePoint2D(point3D); // 额外的信息，没关系
iTakePoint2D({ x: 0 }); // Error: 没有 'y'
```

## 类

仅仅只有**实例成员和方法**会相比较，**构造函数**和**静态成员**不会被检查。

```ts
class Animal {
  feet: number;
  constructor(name: string, numFeet: number) {}
}

class Size {
  feet: number;
  constructor(meters: number) {}
}

let a: Animal;
let s: Size;

a = s; // OK
s = a; // OK
```

**私有的和受保护的成员**必须来自于相同的类。

```ts
class Animal {
  protected feet: number;
}
class Cat extends Animal {}

let animal: Animal;
let cat: Cat;

animal = cat; // ok
cat = animal; // ok

class Size {
  protected feet: number;
}

let size: Size;

animal = size; // ERROR
size = animal; // ERROR
```
