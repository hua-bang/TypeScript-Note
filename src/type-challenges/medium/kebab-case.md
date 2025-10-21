---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: KebabCase
order: 36
---

# KebabCase

### 要求

Implement `KebabCase<T>` which converts a camelCase or PascalCase string to kebab-case.

For example:

```ts
type Result1 = KebabCase<'fooBarBaz'>; // expected: 'foo-bar-baz'
type Result2 = KebabCase<'FooBarBaz'>; // expected: 'foo-bar-baz'
type Result3 = KebabCase<'foo'>; // expected: 'foo'
```

### 测试用例

```ts
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo'>, 'foo'>>,
  Expect<Equal<KebabCase<'user2Name'>, 'user2-name'>>,
  Expect<Equal<KebabCase<'userName'>, 'user-name'>>,
  Expect<Equal<KebabCase<'getUserInfo'>, 'get-user-info'>>,
  Expect<Equal<KebabCase<'myAPIKey'>, 'my-a-p-i-key'>>,
  Expect<Equal<KebabCase<''>, ''>>,
];
```

### 解析

这道题的核心思路是：

1. **递归处理字符串**：逐个字符检查
2. **识别大写字母**：当遇到大写字母时，需要在前面添加 `-` 并将其转为小写
3. **边界处理**：字符串开头的大写字母不需要添加 `-`

关键技术点：
- 使用模板字面量类型进行模式匹配
- 使用 `Uncapitalize` 工具类型将首字母转小写
- 使用条件类型判断字符是否为大写字母
- 递归处理剩余字符串

实现步骤：
1. 首先将首字母转为小写（使用 `Uncapitalize`）
2. 递归处理剩余部分，遇到大写字母时添加 `-` 并转小写
3. 空字符串作为递归终止条件

### Answer

```ts
// 辅助类型：将字符串转为 kebab-case（递归部分）
type KebabCaseHelper<S extends string> = S extends `${infer First}${infer Rest}`
  ? First extends Uppercase<First> // 判断是否为大写字母
    ? First extends Lowercase<First> // 排除数字和特殊字符（它们的大小写相同）
      ? `${First}${KebabCaseHelper<Rest>}` // 不是字母，直接拼接
      : `-${Lowercase<First>}${KebabCaseHelper<Rest>}` // 是大写字母，添加 - 并转小写
    : `${First}${KebabCaseHelper<Rest>}` // 小写字母直接拼接
  : S;

// 主类型：处理首字母并调用辅助类型
type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Uncapitalize<First>}${KebabCaseHelper<Rest>}`
  : S;
```

### 知识点

- **模板字面量类型（Template Literal Types）**：使用 `${infer First}${infer Rest}` 进行字符串模式匹配
- **条件类型（Conditional Types）**：`T extends U ? X : Y` 进行类型判断
- **内置工具类型**：
  - `Uppercase<T>`：将字符串字面量类型转为大写
  - `Lowercase<T>`：将字符串字面量类型转为小写
  - `Uncapitalize<T>`：将首字母转为小写
- **递归类型**：类型定义中引用自身来处理不定长度的字符串

### 扩展思考

这道题还可以扩展为：
1. **SnakeCase**：将驼峰转为蛇形命名（`foo_bar_baz`）
2. **CamelCase**：将 kebab-case 转为驼峰命名
3. **PascalCase**：将字符串转为帕斯卡命名

### tip

- [playground](https://www.typescriptlang.org/play?#code/PQKgUABBBMELQQJYGcoE8AOAnApmgRwBcALAewFcACAGwCMB7OegIx2CIDsBzKRqgJQQAxAFtkXAJakipAE74A5sqWkqAK2QBGalQDWyRtXoAzZM0KkKAGmQBDAK4AOSrP0AeeVAA8t0MAXv-UBqcKgEHRqAq0xAhZCojQKAv-qA6PKgPJyoBJsqAwPKgIjyoAw8qAhK6gG9yoDe8qAEXKgIPqGmpaAkHKgBdyoAXcqAhxKIhraAz7KgKDy-jj4hlLYCAAA4ewAJk0AZzUQBl7QAsMfMhiIAa9cARbuhMRV6oCq8qA6ov2JcVAZHlQA15UBkeVAHHlQHx5K0dAIwVQDcDJzkq0AOqgOpyoCY8qApPKgBTyoD+CoC08qA-gqAoPKgEYKoAU8qAmfKgJjyoC08qAZgqgBTyoAU8qA1PKgPYKoBCCoC2CqAXK6gJYKK6A6nIN3h6gCoKoBmCsN3R6AFvKgBTyoCCDo8kx6AxPKgITyoB88qAfq6A2PJfJyASQrU8tgFrymqAkAqgP4K5xU3QCaFUBweVAOQUbqpFR6AFPKgODyTyengByCoAqCs93O5-J4Af59AeHk3hpAJIVQEp5UBneXOFiBYOIiKhEOAADIBgOJDlJJMMNQDQ8qIroAAckAr0BYACpJAAabLMvC86DXpjXRtAi9AdHlQDMFA8JYAkRWb7c-oB15UAkDpuBWJ5eLXgFkAM51-0AxgAAqQBAAC2sDAAFsFj7ECB1Aoe0EGNgAHk-AAI1cABHABVfxfAAt2IAAtJ1AdwR3xAwAGZAIccC0NnFhEAgnDB0ANiQ2dAGwkNcANcAAtQPTQABxDxBxDYA0Cg3c92PU9j1PEA7xXABJI90JfBckL3fclw3dDd0vfCbwfW8EALUB3VCUj31PJAACHZ0AP8CMP7MBABAWAA1U8nIAI3c3AXTYABvQDXGwTydP0gDyDAQBgB1fVADsHC8p1XQAQEBRJABtKzPLc9yADYAPctBPJ0gBWbzPIAZh80D3Kw7zPIADgc0D3KwmcCAGOdQF9FUVQKp9QLPYAYAATyAQtlL6UACJ0kBGz85oAAqQAyp1ALHstx2dVytPdDKstyzLsvq0CPO8nzquM0yzNAQoAF0yrSUjqsqqrXFqgBZNqopwTzPJALrXLsvrQB61rzMAwBWBx8iAABZMhyBYcgRwQBxFGAbBHAoABdAApAh6FwOAxEmvqgA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A612+label%3Aanswer)
