---
nav:
  title: 进阶
  path: /advanced
group:
  title: 进阶
  order: 3
title: 类型守卫
order: 2
---

# 类型守卫

类型保护是一种检查得表单时，确保类型在一定的类型范围中。

总得来说，类型守卫可以保证字符串是字符串，数字是数字。同时，这种“保证”在同一个分支作用域下都有效。

类型保护（Type Guards）就是通过一些表达式，在运行时检查以确保在某个作用域内的类型。

## in 关键字

```ts
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type UnknowEmployee = Employee | Admin;

function print(emp: UnknowEmployee) {
  if ('privileges' in emp) {
    console.log(emp.privileges); // 此处已经推断出时Admin
  }
  if ('startDate' in emp) {
    console.log(emp.startDate); // 此处已经推断出Employee
  }
}
```

注意，'in'会根据你的字段，已经你的变量的一个类型去进行一个相应的推断。

## typeof 关键字

```ts
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```

`typeof` 类型保护只支持两种形式：

- `typeof v === "typename"`
- `typeof v !== typename`，

`"typename"` 必须是 `"number"`， `"string"`， `"boolean"` 或 `"symbol"`。 但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。

## instanceof 关键字

`instanceof` 类型保护和 `typeof` 类型保护用法相似，它主要用于判断是否是一个类的对象或继承对象的。

两者主要区别是 判断的变量的一个类型（原始/引用）

```ts
const foo: Date | RegExp;
if (foo instanceof RegExp) {
  // 正确 instanceof 类型保护，自动对应到 RegExp 实例类型
  foo.test('');
} else {
  // 正确 自动对应到 Date 实例类型
  foo.getTime();
}

interface DateOrRegExp {
  // 这里表示构造器无参，Date 类型的类
  new (): Date;
  new (value?: string): RegExp;
}
let Foo: DateOrRegExp;
let foo;
if (foo instanceof Foo) {
  // foo 从 any 到 RexExp | Date
  console.log(foo);
}
```

`instanceof` 类型保护是通过构造函数来细化类型，其右侧要求是一个构造函数，TypeScript 将细化为：

1. 此构造函数的 `prototype` 属性的类型，如果它的类型不为 `any`
2. 构造签名所返回类型的联合

## 自定义类型保护

`typeof` 和 `instanceof` 类型保护能够满足一般场景，对于一些更加特殊的，可以通过自定义类型保护来对应类型。

```ts
function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function isString(x: any): x is string {
  return typeof y === 'number';
}
```

我们举一个简单的例子

```ts
interface Req {
  url: string;
  host?: string;
}

function isReq(req: any): req is Req {
  return req && req.url;
}

let req: any;

if (isReq(req)) {
  console.log(req.url);
}
```

这里面其实是通过判断，我们告诉编译器通过`isReq`就的判断就是`Req`的类型，编译器通过类型为此`paramterName is Type`得知，`isReq`返回`true`则`req`是`Req`类型。
