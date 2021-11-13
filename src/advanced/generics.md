---
dangnav:
  title: 进阶
  path: /advanced
group:
  title: 进阶
  order: 3
title: 泛型
order: 0
---

# 泛型

泛型(Generics)是指定在函数`createArray`,它可以创建一个指定长度的数组，同时将每一项都填充一个默认值。

```ts
function createArray(length: number, value: any): Array<any> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```

上例中，我们的代码不会报错，我们也确实得到了我们想要的数据，但是这个数据并没有准确返回类型。

我们预期是希望他能返回一个对应类型的数据给我们，但上述代码只会返回`any`给到我们。

这时候，泛型就派上用场了

```ts
function createArray<T>(length: number, value: T): T[] {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray<string>(3, 'x');
```

上述，我们在函数后添加了`<T>`,其中`T`用来指定输入任意的类型，在后面输入的`value:T`和`Array<T>`就可以使用了。

接着在调用时候，我们可以指出他的具体类型`string`，当然，也可以不手动指定，让类型推论自动推算出来。

```ts
function createArray<T>(length: number, value: T): T[] {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray(3, 'x');
```

## 多个类型参数

定义泛型时，可以一次定义多个类型参数。

```ts
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
```

## 泛型约束

在函数内部使用泛型变量的时候，由于实现不知道它是哪种类型，所以我们不能随意操作他的属性和方法。

```ts
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

上方，泛型`T`不一定包含属性`length`，所以编译时候报错了。

这个时候，我们可以对泛型加以约束，只允许这个函数传入包含`length`属性的变量，这就是**泛型约束**。

```ts
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

上述中，我们使用`extends`约束了泛型`T`必须符合接口`Lengthwise`的形状。

如果传入的类型无法兼容对应的形状，那么在编译阶段就会报错。

```ts
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity(7);
```

多个类型参数之间也可以相互约束

```ts
function copyFields<T extends U, U>(target: T, source U): T {
  for(let prop in source) {
    target[prop] = (<T>source)[prop];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });
```

上例中，我们使用了两个类型参数，其中要求 T 继承 U，这样就保证了 U 上不会出现 T 中不存在的字段。

## 泛型接口

可以使用接口的方式来定义一个函数需要符合的形状：

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
};
```

当然也可以使用含有泛型的接口来定义函数的形状：

```ts
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc;
createArray = function<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
createArray(3, 'x'); // ['x', 'x', 'x']
```

进一步，我们可以把泛型参数提前到接口名上：

```ts
interface CreateArrayFunc<T> {
  (length: number, value: T): Arrat<T>;
}

let createArray: CreateArrayFunc<any>;
createArray = function<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
createArray(3, 'x'); // ['x', 'x', 'x']
```

⚠️ 注意，此时在使用泛型接口的时候，需要定义泛型的类型。

## 泛型类

与泛型接口类似，泛型也可以用于类的类型定义中：

```ts
class class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber = add;
```

## 泛型参数的默认类型

在 TypeScript 2.3 之后，我们可以为泛型中的类型参数指定类型。当使用泛型时没有代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起起作用。

```ts
function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
```
