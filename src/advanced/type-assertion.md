---
nav:
  title: 进阶
  path: /advanced
group:
  title: 进阶
  order: 3
title: 断言
order: 1
---

# 断言

断言，相当于我们手动告诉计算机变量的一个状态（涉及的可能有类型，非空）。因为在大多情况下，ts 是无法 cover 到我们某些情况下，变量的具体类型，或者是否为空。这个时候，我们可以使用类型断言来进行指定。

TS 中常用的断言有三种

## 类型断言

有的时候你会遇到情况，但你定义了一个联合类型的时候，这个时候 TS 编译器确实是会帮你检测类型的，但有的时候你可能比 TS 更加了解在某个场景下变量的一个详细信息。

通常比如你比 TS 更加知道一个实体他目前的更确切地类型。

通过类型断言可以告诉编译器。“相信我，我知道我在干什么”。类型断言并不会影响你数据的类型，他只是告诉编译器，这个变量是什么类型。并且，类型断言只在**编译阶段生效**，运行时候是不生效的。

```ts
let a: any = 123;
console.log(a as string);
console.log(typeof a);
```

类型断言有两种形式：

- `as`语法

  ```ts
  let someValue: any = 'this is string';
  let strLength: number = (someValue as string).length;
  ```

- 尖括号语法

  ```ts
  let someValue: any = 'this is string';
  let strLength: number = (<string>someValue).length;
  ```

## 非空断言

有时候我们编写的代码中，某个变量的类型可以是带有`undefined`或者`null`的联合类型，在特定的场景下，我们可以知道这个是有值的，但 TS 可能无法检测到我们变量是否是有值得，所以我们这时候需要**非空断言**。

具体而言，一个新的后缀表达式操作符`!`可以用于断言对象不是`undefined`和`null`类型。具体而言, x! 将从 x 值域排除了`undefined`或者`null`

1. 忽略`undefined`和`null`类型

   ```ts
   function myFunc(mayBeStr: string | undefined| null) {
     const str: str: mayBeStr // error
     const ignoreNullAndUndefined:string =  mayBeStr!
   }
   ```

2. 调用函数忽略`undefined`类型

   ```ts
   type NumGenerator = () => number;

   function myFunc(numGenerator: NumGenerator | undefined) {
     const num1: number = numGenerator(); // error
     const num2: number = numGenerator!();
   }
   ```

   但注意，这里得类型断言并不会去检测你所作用得属性，他是否是`undefined`或者`null`，他只是跟编译器说明，这个属性是非空。

## 确定赋值断言

在 TypeScript 2.7 版本中引入了确定赋值断言，即允许在实例属性和变量声明后面放置一个 `!` 号，从而告诉 TypeScript 该属性会被明确地赋值。为了更好地理解它的作用，我们来看个具体的例子：

```typescript
let x: number;
initialize();
// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error

function initialize() {
  x = 10;
}
复制代码;
```

很明显该异常信息是说变量 x 在赋值前被使用了，要解决该问题，我们可以使用确定赋值断言：

```typescript
let x!: number;
initialize();
console.log(2 * x); // Ok

function initialize() {
  x = 10;
}
复制代码;
```

通过 `let x!: number;` 确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值。
