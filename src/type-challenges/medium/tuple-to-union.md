---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Tuple to Union
order: 5
---

# Tuple to Union

### 要求

Implement a generic `TupleToUnion<T>` which covers the values of a tuple to its values union.

For example

```ts
type Arr = ['1', '2', '3'];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
```

### 解析

这里我们可以看出，我们只需要拿到元组的**联合类型**即可。

### Answer

```ts
type TupleToUnion<T extends any[]> = T[number];
```

### tip

- [answer](https://www.typescriptlang.org/play?ssl=24&ssc=47&pln=24&pc=1#code/PQKgUABBCMAMEFoIBUCuAHANgUwgFwHsIBVAOwEsDTJEE76aAjATwgEFS8ALK1gMVQQAFAAEAhpwBmqAJQQAxAFtsAE3KpFC8qUnYATgrwYcC1BSo0a86xACKqbAGc8lalBoBJRVmzLOEMQgAc2xSfXIAYwgAAzQfZAIyVwAeZAA+aIgAdy5IrggIggA3fUd8LlwisUwHMoJJAPxjXEIIcjwyqpqnCDNXADpLKD4CA2wADzFvHCGY6OiOmjxmdFw2PQMAXggAbQByaD2AGgg9gCZj04BmPYBdWeXVlCc8CG24nASkqmT1vTSIMBgBAJqsInhVPgiIxcAc9hAAD6nC6I657GjzaKzAEANXI2CyECoEAA4u0ABKoRgALggXDweHQjmpQI6ES4-QAVo5+qMgsA4GAQMAwKLQBAAPpS6Uy6UQACaBFQBgAwgQVLhyfpcLLdVKIMLRY9cB9sF9zKRUiDxhDSCoyhJmDtbgD3jtSBoYXp7mKQJK9bLns4ICqxI4egHA4byN5Rq8AN4QACiAEdUNUTknxmDXgBfCCSPQETR7ETGhDs6o4UghRzAVAuTCOdFgY0FMM9bY7GhZnPJVPpzCpZrmlI7aBnK4nPYAFgArAA2S54PQOF0nCdXVGzxfwpErhxpNJHHvZ7Dg-tp6rD+KJC3JceT9cwSdHk8+33+yP6gR6bj6CAAGUISZL9vwNEVQBoAFAK4MQ9FwZglQMRwCBqFwqGZOkGSZFlgDZDluV5PR+TgYAJEcLJ9GgiA8QJCBUPQ1wsPpRlmVZRx2S5Hk+QFWBgEYhtmJogBZUZcBVODMGrWtaVY3COK4oi+SFEUwCAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A10+label%3Aanswer)
