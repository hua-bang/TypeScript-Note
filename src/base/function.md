---
nav:
  title: 基础
  path: /base
group:
  title: 基础
  order: 2
title: 函数的类型
order: 7
---

# 函数类型

在 Javascript 中，有两种常见的函数的定义

- 函数声明(Function Declaration)
- 函数表达式(Function Expression)

## 函数声明

函数需要有输入也要有输出，在 TypeScript 中做简单约束，输入输出都要考虑参数的类型定义

```ts
function sum(x: number, y: number): number {
  return x + y;
}
```

注意，不符合参数类型或个数，是不被允许的。

```ts
function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2, 3);

sum(1);
```

## 函数表达式

如果要我们写一个函数表达式的定义

```js
let mySum = function(x: number, y: number): number {
  return x + y;
};
```

不过事实上，这个并不是函数表达式，而是变量声明，而且类型也是通过类型推论的出来的。

```ts
let mySum: (x: number, y: number) => number = function(
  x: number,
  y: number,
): number {
  return x + y;
};
```

不要混淆 TypeScript 中的`=>`和 ES6 中的`=>`

在 TS 中,`=>`表示函数的定义，左边输入类型，需要用括号括起来，右边输出的是类型。

## 用接口定义函数的形状

我们也可以使用接口的方式来定义一个函数的类型

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
};
```

## 可选参数

前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？

与接口中的可选属性类似，我们用 `?` 表示可选的参数：

```ts
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}
```

```ts
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```

需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了：

```ts
function buildName(firstName?: string, lastName: string) {
  if (firstName) {
    return firstName + ' ' + lastName;
  } else {
    return lastName;
  }
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName(undefined, 'Tom');

// index.ts(1,40): error TS1016: A required parameter cannot follow an optional parameter.
```

## 参数的默认值

在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：

```ts
function buildName(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```

此时就不受「可选参数必须在必需参数后面」的限制了：

```ts
function buildName(firstName: string = 'Tom', lastName: string) {
  return firstName + ' ' + lastName;
}

let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');
```

## 剩余参数

在 ES6 中，可以使用 `...rest` 的方式获取函数中的剩余参数（`rest` 参数）：

```ts
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);
```

事实上，`items` 是一个数组。所以我们可以用数组的类型来定义它：

```ts
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);
```

## 重载

重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。

比如，我们需要实现一个函数 `reverse`，输入数字 `123` 的时候，输出反转的数字 `321`，输入字符串 `'hello'` 的时候，输出反转的字符串 `'olleh'`。

利用联合类型，我们可以这么实现：

```ts
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(
      x
        .toString()
        .split('')
        .reverse()
        .join(''),
    );
  } else if (typeof x === 'string') {
    return x
      .split('')
      .reverse()
      .join('');
  }
}
```

然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。

这时，我们可以使用重载定义多个 `reverse` 的函数类型：

```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(
      x
        .toString()
        .split('')
        .reverse()
        .join(''),
    );
  } else if (typeof x === 'string') {
    return x
      .split('')
      .reverse()
      .join('');
  }
}
```

上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。

注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。

---
