---
nav:
  title: 进阶
  path: /advanced
group:
  title: 进阶
  order: 3
title: 泛型工具
order: 11
---

# 泛型工具

TS 中为了方便开发者使用，内置了一些常用的工具类型。比如`Partial`、`Require`、`ReadOnly`、`Record`和`ReturnType`等。在了解他们之前，我们先熟悉一些其他的相关基础知识。

## 基础知识

### typeof

在`TypeScript`中，`typeof`操作符可以用来获取一个变量声明或对象的类型。

```ts
interface Person {
  name: string;
  age: number;
}

const sem: Person = { name: 'semlinker', age: 33 };
type Sem = typeof sem; // Person

function toArray(x: number): Array<number> {
  return [x];
}

type Func = typeof toArray; // (x: number) => Array<number>;
```

### keyof

`keyof`操作符可以获取某种类型的所有键，注意返回的是联合类型。

```ts
interface Person {
  name: string;
  age: number;
}

type K1 = keyof Person; // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push"
type K3 = keyof { [x: string]: Person }; // string | number
```

上方可能你会有点疑惑，命名我们的键声明的是`string`类型，但是为什么我们的`keyof`会返回`string|number`联合类型呢？

在`TypeScript`中支持两种索引签名，数字索引和字符串索引。

```ts
interface StringArray {
  // 字符串索引 keyof StringArray => string | number
  [index: string]: string;
}

interface NumberArray {
  // 数字索引 keyof NumberArray => string | number
  [index: number]: string;
}
```

**当使用数值索引时，JavaScript 在执行索引操作时，会先把数值索引转化成字符串索引。**所以 `keyof { [x: string]: Person }` 的结果会返回 `string | number`。

### in

`in` 用来遍历枚举类型：

```typescript
type Keys = 'a' | 'b' | 'c';

type Obj = {
  [p in Keys]: any;
}; // -> { a: any, b: any, c: any }
```

### infer

在条件类型语句中，可以用 `infer` 声明一个类型变量并且对它进行使用。

```typescript
type ReturnType<T> = T extends (...args: anyt[]) => infer R ? R : any;
```

以上代码中 `infer R` 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用。

### extends

有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束。

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
复制代码;
```

现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：

```typescript
loggingIdentity(3); // Error, number doesn't have a .length property
复制代码;
```

这时我们需要传入符合约束类型的值，必须包含必须的属性：

```typescript
loggingIdentity({ length: 10, value: 3 });
```

## 常用泛型工具

### Partial 可选泛型

`Partial<T>`构造类型`T`，并将他的属性设为**可选**的。它的返回类型表示输入类型的所有子类型。

```ts
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {
    ...todo,
    ...fieldsToUpdate,
  };
}

const todo1 = {
  title: 'xxx',
  description: 'xxxx',
};

const todo2 = {
  title: 'xxx2',
};

updateTodo(todo1, todo2);
```

### ReadOnly 只读泛型

`ReadOnly<T>`构造函数`<T>`，并将它所有属性都设成**只读**`readonly`,也就是构造出的类型的属性不能再次被赋值。

```ts
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'hello',
};

title = 'hello, world'; // error
```

### Record 键值泛型

`Record<K, T>`构造一个类型，其**属性名**的类型为`K`,**属性值**的类型为`T`.这个工具可用来将某个类型的属性映射到另一个类型上。

```ts
type Key = 'home' | 'about' | 'contact';

interface Value {
  title: string;
}

const x: Record<Key, Value> = {
  about: { title: 'about' },
  home: { title: 'home' },
  contact: { title: 'contact' },
};
```

### Pick 挑选属性泛型

`Pick<T, K>`从类型`T`中**挑选部分属性**`K`来构造类型。

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPerview = {
  title: 'clean Room',
  completed: false,
};
```

### Exclude 剔除属性泛型

`Exclude<T, U>`从类型`T`中剔除所有可以赋值给`U`的属性，然后构造一个类型。

```ts
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;

type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

type T2 = Exclude<string | number | (() => void), Function>;
// string | number
```

### Extract 提取属性泛型

`Extract<T, U>`从类型`T`中提取所有可以赋值给`U`的类型，然后构造一个类型。

```ts
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
// "a"

type T1 = Extract<string | number | (() => void), Function>;
// () => void
```

### Omit

`Omit<T，K>`通过从`T`中选取所有属性，**然后删除**传入的属性`K`来构造新类型

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPrevire = Omit<Todo, 'description'>;
const todo: TodoPrevire = {
  title: 'xxx',
  completed: false,
};
```

### NonNullable 剔除空属性泛型

`NonNullable<T>` 从类型 `T` 中剔除 `null` 和 `undefined`，然后构造一个类型。

```ts
type T0 = NonNullable<string | number | undefined>;
// string | number

type T1 = NonNullable<string[] | null | undefined>;
// string[]
```

### ReturnType 返回值类型泛型

`ReturnType<T>` 由函数类型 `T` 的返回值类型构造一个类型。

```ts
type T0 = ReturnType<() => string>;
// string

type T1 = ReturnType<(s: string) => void>;
// void

type T2 = ReturnType<<T>() => T>;
// {}

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// number[]

type T5 = ReturnType<any>;
// any

type T6 = ReturnType<never>;
// any

type T7 = ReturnType<string>;
// Error

type T8 = ReturnType<Function>;
// Error
```

### InstanceType 实例泛型

`InstanceType<T>` 由构造函数类型 `T` 的实例类型构造一个类型。

```ts
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
// C
type T1 = InstanceType<any>;
// any
type T2 = InstanceType<never>;
// any
type T3 = InstanceType<string>;
// Error
type T4 = InstanceType<Function>;
// Error
```

### Required 必须泛型

```
Required<T>` 构造一个类型，使类型 `T` 的所有属性为必须 `required
interface Props {
  a?: number;
  b?: string;
}

const obj1: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
// Error: property 'b' missing
```

### ThisType

这个工具不会返回一个转换后的类型。它做为上下文的 `this` 类型的一个标记。注意，若想使用此类型，必须启用 `--noImpliciThis`。

```ts
// Compile with --noImplicitThis

type ObjectDescription<D, M> = {
  data?: D,
  methods?: M & ThisType<D & M>;  // Type of 'this' in methods is D & M
}

function makeObj<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx;   // Strongly typed this
      this.y += dy;   // Strongly typed this
    }
  }
});((

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
```

上面例子中，`makeObject` 参数里的 `methods` 对象具有一个上下文类型 `ThisType<D & M>`，因此 `methods` 对象的方法里 `this` 的类型为 `{x: number, y: number} & { moveBy(dx: number, dy: number): number}`

在 `lib.d.ts` 里，`ThisType<T>` 标志性接口是个简单的空接口声明。除了在被识别对象子棉量的上下文类型之外，这个接口与一般的空接口没有什么不同。

### Parameters

`Parameters<T>` 构造一个关于函数类型 T 的 **参数类型** 的元组类型。

```ts
declare function foo(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>;
// []

type T1 = Parameters<(s: string) => void>;
// [string]

type T2 = Parameters<<T>(arg: T) => T>;
// [unknown]

type T3 = Parameters<typeof foo>;
// { a: number, b: string }

type T4 = Parameters<any>;
// unknown[]
type T5 = Parameters<never>;
// any
type T6 = Parameters<string>;
// Error
type T7 = Parameters<Function>;
// Error
```

### ConstructorParameters

通过 `ConstructorParameters<T>` 类型，我们可以提取构造函数类型的所有参数类型。 它会生成构造函数所具有的所有参数类型的元组类型（如果 T 不是函数，则不返回）。

```ts
/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type ConstructorParameters<
  T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;
```

示例：

```ts
type T0 = ConstructorParameters<ErrorConstructor>;
// [(string | undefined)?]

type T1 = ConstructorParameters<FunctionConstructor>;
// string[]

type T2 = ConstructorParameters<RegExpConstructor>;
// [string, (string | undefined)?]
```

实例：

```ts
class Animal {
  constructor(name: string, age: number) {
    return {
      name,
      age,
    };
  }
}

type Result = ConstructorParameters<typeof Animal>;
// type Result = [string, number]
```
