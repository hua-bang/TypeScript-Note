---
nav:
  title: 进阶
  path: /advanced
group:
  title: 进阶
  order: 3
title: 联合类型
order: 5
---

# 联合类型

联合类型（Union Types）是具有或关系的多个类型组合而成，只要满足其中一个类型即可。

```ts
let val: string | number;
```

上述示例代码表示 `val` 值可以是 `number` 类型或者 `string` 类型的其中一种，联合类型使用 `|` 分隔每个类型。

```ts
val = true;

// index.ts(2,1): error TS2322: Type 'boolean' is not assignable to type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
```

这里将 `val` 变量赋值为布尔值 `true`，既不是定义的 `number` 类型也不是 `string` 类型，因此会被编译为错误。

## 访问联合类型的属性或方法

当 ts 不能确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：

```ts
function getLength(val: string | number): number {
  return val.length;
}

// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
```

上例中，`length` 不是 `string` 和 `number` 的共有属性，所以会报错。

访问 `string` 和 `number` 的共有属性（方法）是没问题的：

```ts
function getString(val: string | number): string {
  return val.toString();
}
```

联合类型的变量在被赋值的时候，会根据 [类型推论](https://tsejx.github.io/typescript-guidebook/syntax/advanced/type-inference) 的规则推断出一个类型：

```ts
let num: string | number;

num = 'seven';
console.log(num.length); // 5

num = 7;
console.log(num.length); // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
```

上例中，第二行的 `num` 被推断成了 `string` 类型，访问它的 `length` 属性不会报错。

而第四行的 `num` 被推断成了 `number` 类型，访问它的 `length` 属性时就报错了。
