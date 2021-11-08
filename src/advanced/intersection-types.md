---
nav:
  title: 进阶
  path: /advanced
group:
  title: 进阶
  order: 3
title: 交叉类型
order: 4
---

# 交叉类型

交叉类型（Intersection Types）是将多个类型叠加合并组成新的类型，新类型包含了所有被合并类型的所有属性。

交叉类型使用场景：Mixin、不适合用类来定义的场景。

例如：下方代码描述`Foo & Bar`同时具备`Foo`与`Bar`两种类型的成员，就是说这个类型的对象同时拥有了这两种类型的成员。

```ts
interface Foo {
  name: string;
  age: number;
  sayName: (name: string) => void;
}

interface Bar {
  name: string;
  gender: number;
  sayGender: (gender: string) => void;
}

let Tom: Foo & Bar;

console.log(Tom.age);
console.log(Tom.gender);
```

我们常在 Mixin 或其他不适合典型面向对象模型的地方看到交叉类型的使用。

```ts
function extends<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let prop in first) {
    (<any>result)[prop] = (<any>first)[prop];
  }
  for (let prop in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[prop] = (<any>second)[prop];
    }
  }
  return result;
}

class Person {
  constructor(public name: string) {}
}
interface Loggable {
  log(): void;
}
class ConsoleLogger implements Loggable {
  log() {
    // ...
  }
}
const tom = extend(new Person('Jim'), new ConsoleLogger());
const name = tom.name;
tom.log();
```

上述代码相对比较简单，但可能对下面这段代码会产生疑问：

```ts
(<any>result)[prop] = first[prop];
```

既然 `result` 已经被断言为交叉类型，那么 `first` 所具有的属性 `result` 都是具有的。

为什么还要将 `result` 断言为 `any` 类型呢，因为交叉类型可能导致类型冲突。

🌰 **示例**：

```ts
interface Foo {
  x: boolean;
  y: string;
}

interface Bar {
  x: boolean;
  y: number;
}

type Baz = Foo & Bar;

type X = Baz['x']; // boolean
type Y = Baz['y']; // string & number

declare const baz: Baz;
declare const foo: Foo;

baz['y'] = foo['y'];
```

上面的代码中，`Foo` 和 `Bar` 接口中，`y` 属性类型冲突，那么最终 `y` 属性类型为交叉类型 `string & number`，同时 `string` 类型或者 `number` 类型无法赋值给交叉类型 `string & number`，最终导致报错。为了解决这个问题，可以将 `result` 再断言为 `any` 类型，这样 `result` 所有属性均为 `any` 类型，那么赋值就不会报错了。
