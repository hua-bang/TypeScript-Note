---
nav:
  title: 基础
  path: /base
group:
  title: 基础
  order: 2
title: 类型别名
order: 10
---

# 类型别名

类型别名用来给一个类型起名字。

```ts
type Name = 'string';
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}
```

上方就是我们用`type`创建的类型别名。

类型别名常用于联合类型。

### 联合类型

联合类型通常与 `null` 或 `undefined` 一起使用：

```ts
const sayHello = (name: string | undefined) => {
  /* ... */
};

sayHello();
sayHello('213');
sayHello(231); // error
```

通过这个示例，你可以凭直觉知道类型 A 和类型 B 联合后的类型是同时接受 A 和 B 值的类型。此外，对于联合类型来说，你可能会遇到以下的用法：

```ts
let num: 1 | 2 = 1;
type EventNames = 'click' | 'scroll' | 'mousemove';
```

以上示例中的 `1`、`2` 或 `'click'` 被称为字面量类型，用来约束取值只能是某几个值中的一个。
