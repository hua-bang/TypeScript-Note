---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: IsNerver
order: 23
---

# IsNever

### 要求

Implement a type IsNever, which takes input type `T`. If the type of resolves to `never`, return `true`, otherwise `false`.

For example:

```ts
type A = IsNever<never>; // expected to be true
type B = IsNever<undefined>; // expected to be false
type C = IsNever<null>; // expected to be false
type D = IsNever<[]>; // expected to be false
type E = IsNever<number>; // expected to be false
```

### 解析

这里我们只需要判断`T`是否是`Never`类型即可

```ts
[T] extends [number]
```

### Answer

```ts
type IsNever<T> = [T] extends [never] ? true : false;
```

### Tips

- [answer](https://www.typescriptlang.org/play?ssl=27&ssc=54&pln=26&pc=1#code/PQKgUABBCMAMAsAmCBaCBJAzgOQKYDdcAnSVFci0gIwE8IALASyIHsaBDCRxgLwFcA1pwAUAASasO3fkICUEAMQBbXABNGfJYr4A7Rix3aALowA2mUqQXWIART65MJg5ajolAB1O4VOoxE4jGg9cDBwCYgAaCAB3JgBjeggjdgFHLh0PPn8gkIgAAwAVfIA6UnQAM2T6UNzQliqiRxZTQkxklgKdCKJ86KajPiJDfKMiBz6IFiMaohjGTFD8ivZzXFLXCAAxFiIIXAAPdk9vAC5N-MujCyg6iABBCABeMLxCIgAebveAPihgYD7A4heJGNQdCBUWrjXCkO4AIWerx6H10qlwFUY3VUfwBQJBYNUEKhEBWazhwVCAGEkVg3sQvnxTKZcYDDgTwUZOiSyYsKXkACK08LvD4AbQAuqz8bhQZzuaFebDbpSIABRYX0z46TRQojS9mywnExWrPlQS75TZ-ABqjFwMSmhgA4owjAAJPhUU4MIxGDyYU4A66JEoAK0wJV2AHNgHAkGAQMAwCnQBAAPqZrPZrMQACaLCGECpLHREHdxFCOermYgSZTdzpKMKfxeYsKEqBYJ0qnaYu+xE7AH5kjCID6lQBuFNgNM16sQQqOfxU9iLdrznN15OMTy7fwAb3VAEc+KtomrgUaIABfUmsLQAclEdRQiVW3h00ccwGyZkwj4Nqq8RrukbakJeBIfGqp6rB8TaigO+rRGMDg-D8kQQVeoLQbBpjwSKDJIRAAA+EBOEQWLRhhpJmrg6GYVAkFGrhZ74QhDIAEScTRSoMVhUEwWxBFaqiPYYliai8XR-FMdhRisXBHHakyLLRHxGECSxQlKYRnyStJayyeq8mKexekfAeN6GYs-ESjOs4gBmm65lsQwzMQEAAMpggGzkuem26OaQfxefQ7BNBANCFnsmAtH+BiBr6-qBsGmChhGUZELG8aIMA7A6JgMTECFEB2g65Hxc4hU+vQfoBkGwAhvQ4aRjGcYIHlcWmAlhWlQAsrs1LhcyuBfo4tX1alTXpS1mUxomyZgEAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A1042+label%3Aanswer)
