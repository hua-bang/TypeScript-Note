---
nav:
  title: 基础
  path: /base
group:
  title: 基础
  order: 2
title: never类型
order: 6
---

# never 类型

`never`类型表示那些用不存在的类型。特别的，`never`可以时永远不返回的函数的的返回值类型（error，无出口），也是变量在类型收窄中不可能为真的类型。

举个例子

```ts
function err(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

`never`类型的特征

- `never`没有子类型。
- 没有类型可以赋值给`never`，本身是`never`除外
- 函数如果终止点是无法被执行到或者异常时，这个函数会被类型推断为`never`
- 在一个明确指定了`never`返回值类型的函数中，所有`return`语句表达式的值必须为`never`类型，函数不可达到终点。

`never`是 TypeScript 的底层类型，下列是一些自然被分配的例子

- 一个从来不会有返回值的函数（函数中含有`while(true){}`）
- 一个总是会抛出错误的函数(如：`function foo() { throw new Error(''not implememt) }`),此时返回类型为`never`

```ts
function infiniteloop(): never {
  while (true) {}
}

function error(message: string): never {
  throw Error('message');
}
function fail() {
  return error('something error');
}
```

由于`never`是所有类型的子类型，在联合类型中始终被忽略，并且函数只要有其他的返回值，那么推导出来的函数返回值类型就会忽略。

## 与`void`的差异

`void`表示没有任何类型，`never`表示永远不存在的值的类型。

当一个函数没有返回值的时候，返回了一个`void`类型，但是，一个函数根本就执行不到终点或者抛出错误，就返回`never`，`void`指可以被赋值的类型，但是`never`不能付给其他类型，除了`never`

---

- [一份不可多得的 TS 学习指南（1.8W 字）](https://juejin.cn/post/6872111128135073806)
- [never](https://tsejx.github.io/typescript-guidebook/syntax/basics/type-of-never)
