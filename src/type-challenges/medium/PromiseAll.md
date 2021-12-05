---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: PromiseAll
order: 8
---

# PromiseAll

### 要求

Type the function `PromiseAll` that accepts an array of PromiseLike objects, the returning value should be `Promise<T>` where `T` is the resolved result array.

```ts
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, number, string]>`
const p = Promise.all([promise1, promise2, promise3] as const);
```

### 解析

我们知道 Promise.all 返回的结果，应该是返回一个`Promise`,它期望的值是数值。

```ts
declare function PromiseAll<T extends any[]>(
  values: readonly [...T],
): Promise<
  {
    [Index in keyof T]: T[Index] extends Promise<infer R> ? R : T[Index];
  }
>;
```

我们判断索引中的每一个是否是`Promise`是的话，通过`条件类型`返回它的值，不是的话，直接返回即可。

### Answer

```ts
declare function PromiseAll<T extends any[]>(
  values: readonly [...T],
): Promise<
  {
    [Index in keyof T]: T[Index] extends Promise<infer R> ? R : T[Index];
  }
>;
```

### tip

- [answer](https://www.typescriptlang.org/play?ssl=29&ssc=3&pln=27&pc=1#code/PQKgUABBBMAMEFoIAUBOB7AtgSwM4FMA6AQwBtTJEFqbKAjATwgEEA7AFwAt1WmAxAK4QAFAAFiHAGYCAlBADEmfABNsAzAuKpUxJvLoDspdgmytKleVYgBFAflztsPC1AAqDAA74IXH9NYAYyceCAADNCw8fGZyMN9OYnYIYkDA-E92XBTWFO1dCHRJFAwcAgAZbABrH3Q6ACt8YNwAGgSfVHx2AVRWMwBzCAA3MnsIXG4BUmUIOh8I0uiAHjcAPniAd058TvC3eLx2iE7cdFIhlWOHKeStHQZCV3CwsKzKQJ5HCE9FggBGCAAXhKUQIhBOZwuwgAzDIANzvT7JH6g-DQIEQAAs0ARUA+rC+KLK+GhGNY+A2IOJS0cqAGq2Ewgh53wbU6jWCckBqwgAG9KFACOw3NglOgBOwmQ5IayIH9YLA2gBySTodBK+GUAC+mqglGAwAg+AAHt5gpd2OhZvNItSANqsdRzVBtR2YZ1tWkDAC660RBORGNt0RI5GEdqJ0T+bUjBGgMd+JO9KWy+McMkoLzCTx5ADVsBTCrkAOLYdgACQEdAAXBBOOx2J5cNWDVlApxCPVcIR0Kh+sA4GAQMAwKPQBAAPpT6cz6cQACa4tQEAAwuhlD5yzsfLPd1OIMPRxvAqQtP4BEEQrlgwRYqQVkbjex8KxlNkJAw7b7hCNSPZm1cxDKDwpBMHahAQRAbjejItY3vgSz8lAdoAJKviaEBmBANQMEUUHerWbioehxrJiaz6vtk8FLGYkg7BAABKPIAPyMRAhHERupFgFqqxjiAk57rOUEOMkK7EAQ2RCcJh6ip4vbJLyEAAKIAI4CGQbTKaaTTJFqECSKUEBKqI7BePgCDtmQpAvv0DjABKRi4Eqo5psiiZ3m4okAsC8F3uG0YwG00LJhJEBuRmbnfB55BeY46K+TFpABW08ZUiGzJQrCoWpkikVItFqKeaJpKJUVYZ2oFaXweC0osjCMgwaOZneOFEkOBidqUNpZrsEsakafeLX4HhsYxLF3ltNRlWpcFvqrKsLTdTpwT9epZBLMNo1JXF7DVYmSwzUFEBus682LctvVrYNm3mdt5WkLt0JTQdDpOjsrrvS6J1fedYDeqO-GCdJ+6CKgfjLgAys+TbAyDB4jqAlA8pDiS7LhPTjGcjmfLW9aNs2ra4O2nbdr2-ZwMAEi4BsOzIxA+aFqcf5XgB+NNi2wBth2XY9n2A6wMAzM4wS9MALK9j4K6JOQtkOHjDYc0TJO8+TQ4jmAQA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A20+label%3Aanswer)
