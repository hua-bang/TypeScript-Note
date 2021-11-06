---
nav:
  title: 基础
  path: /base
group:
  title: 基础
  order: 2
title: 声明合并
order: 12
---

# 声明合并

如果定义了两个相同名字的函数，接口或者类，那么他们会合并成一个类型。

## 函数的合并

其实可以理解为函数的重载。我们通过重载定义多个函数的类型。

```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(
      x
        .toString()
        .split()
        .reverse()
        .join(''),
    );
  } else {
    return x.split().reverse.join('');
  }
}
```

## 接口的合并

接口中的属性在合并时会简单的合并在同一个接口。

```ts
interface Alarm {
  price: number;
}

interface Alarm {
  weight: number;
}
```

等同于

```ts
interface Alarm {
  price: number;
  weight: number;
}
```

注意：合并的属性的类型必须是唯一的

合法代码

```ts
interface Alarm {
  price: number;
}

interface Alarm {
  price: number;
  weight: number;
}
```

下方不一样 会报错

```ts
interface Alarm {
  price: number;
}

interface Alarm {
  price: string;
  weight: number;
}
```

接口中的方法的合并，和函数的合并一样

```ts
interface Alarm {
  price: number;
  alert(s: string): void;
}

interface Alarm {
  weight: number;
  alert(s: string, n: number): void;
}
```

相当于

```ts
interface Alarm {
  price: number;
  weight: number;
  alert(s: string): void;
  alert(s: string, n: number): void;
}
```
