---
nav:
  title: 进阶
  path: /advanced
group:
  title: 进阶
  order: 3
title: This类型
order: 9
---

# This 类型

This 类型(This Types)表示所属类或接口的子类型。

举个例子

```ts
class BasicDOMNode {
  constructor(private el: Element) {}

  addClass(cssClass: string) {
    this.el.classList.add(cssClass);
    return this;
  }
}

class DOMNode extends BasicDOMNode {
  addClasses(cssClasses: string[]) {
    for (let cssClass of cssClasses) {
      this.addClass(cssClass);
    }
    return this;
  }
}

const node = new DOMNode(document.querySelector('div'));

node.addClass('page').addClasses(['pa', 'sa']);
```

上述代码中，`addClass`或`addClasses`的类型签名分别是:

```ts
addClass(cssClass: string): this;
addClasses(cssClasses: string[]): this;
```

上述的函数调用中,`this`类型能够自动对应到所属类实例类型。

具体的，TypeScript 中的 This 类型分为两类

- 类/接口的（成员方法）中的 this
- 普通函数中的`this`

## 类/接口中的 this 类型

我们知道，在 JS 中，类的成员方法总是会指向声明该函数的类本身或子类的实例（即当前对象）。

所以，`this`的类型并不是固定的，取决于调用上下文。

```ts
class A {
  foo() {
    return this;
  }
}

class B extends A {
  bar() {
    return this;
  }
}

const res1 = new A().foo();

const res2 = new B().foo();

const res3 = new A().foo.call(new B());
```

类 A 中的 this 并不总是指向 A 类型实例（也有可能是子类），那么，我们应该如何描述`this`的类型。

```ts
declare class A {
  foo(): A;
}

declare class B extends A {
  bar(): B;
}

// error: property 'bar' does not exist on type 'A'
const res = new B().foo().bar();
```

意料之中的结果，当我们的``foo`函数返回`A 类型`，自然就无法找到`B`的成员方法。

我们改进一下

```ts
declare class A {
  foo(): A & B;
}

declare class B extends A {
  bar(): B & A;
}

const res = new B().foo().bar();
```

上方代码是可行的

`B` 类中的 `this` 既是 `B` 类实例也是 `A` 类实例，姑且认为 `bar(): B & A` 是合适的，但无论如何 `foo(): A & B` 是不合理的，因为基类实例并不一定是子类实例。我们似乎没有办法给 `this` 标出一个合适的类型，尤其是在 `superThis.subMethod()` 的场景。

因此，针对类似的场景，有必要引入一种特殊的类型，即 `this` 类型：

`this` 类型表现为所属类/接口的子类型，这与 JavaScript 运行时的 `this` 机制一致。

**示例**：

```ts
class A {
  foo(): this {
    return this;
  }
}

class B extends A {
  bar(): this {
    return this;
  }
}

const res = new B().foo().bar();
```

也就是说，this 类型就是 this 值的类型：

其实现原理，就是把类/接口看作是具有隐式类型参数 `this` 的泛型，并加上其所在类/接口相关的类型约束。

所以，`this` 类型就像一个带有类派生关系约束的隐式类型参数。

## 函数中的 this 类型

除了类/接口外，`this` 类型还适用于普通函数。

不同于类或接口中的 `this` 类型通常隐式发挥作用，函数中的 `this` 类型大都通过现式声明来约束函数体中 `this` 值的类型。

把 `this` 显式地作为函数的（第一个）参数，从而限定其类型，像普通参数一样进行类型检查。

**示例**：仅在显式声明了 `this` 值类型时才进行检查

```ts
declare class Person {
  foo();
}

const bar = new Person();

// baz 类型为 (this: Person) => any
let baz = bar.foo;

baz();
```

## 应用场景

### 流式接口

`this` 类型让流式接口（fluent interface）变得很容易描述。

```ts
class A {
  foo(): this {
    return this;
  }
}

class B {
  bar(): this {
    return this;
  }
}

const res = new B().foo().bar();
```

所谓的流式接口（设计层面），可以简单理解为链式调用（实现层面）。

简言之，流式接口式 OOP 中的一种 API 设计方式，通过链式方法调用让远吗具有可读性。

### 描述 this 的类型

普通函数中的 `this` 类型允许我们像描述普通参数一样限定 `this` 的类型，这在回调函数场景尤为重要。

🌰 **示例**：

```ts
class Cat {
  constructor(public name: string) {}
  meow(this: Cat) {
    console.log('Meow~~');
  }
}

class EventBus {
  on(type: string, handler: (this: void, ...params) => void) {
    /* ... */
  }
}

// Error: Argument of type '(this: Cat) => void' is not assignable to parameter of type '(this: void, ...params: any[]) => void'.
new EventBus().on('click', new Cat('Neko').meow);
```

### 追踪上下文类型

有了 `this` 类型，`bind`、`call`、`apply` 等场景也能正确维持类型约束，要求当前函数 `this` 与传入的目标对象类型一致：

```ts
apply<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R;
call<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R;
bind<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T): (...args: A) => R;
```

让类似的错误暴露出来（需要开启 strictBindCallApply 选项）。

```ts
class Foo {
  constructor(a: number, b: string) {}
  bar(this: this, a: number, b: string): string {
    return '';
  }
}

declare let foo: Foo;

let bind = foo.bar.bind(undefined); // Error
let call = foo.bar.call(undefined, 10, 'Hello'); // Error
let apply = foo.bar.apply(undefined, [10, 'Hello']); // Error
```
