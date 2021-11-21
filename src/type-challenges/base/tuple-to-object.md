---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: MyPick
order: 2
---# Tuple to Object

### 要求

Give an array, transform into an object type and the key/value must in the given array.

For example

```ts
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

const result: TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

### 解析

这里的话，我们首先要明白，`Tuple`实质上在`TS`中也是数组，只不过这个数组有索引上的类型限制。

这里我们使用索引签名取获取元组中的值的联合类型，即`T[number]`.

以上方的为例子。所以，这里的`T[number]`为`'tesla' | 'model 3' | 'model x' | 'model Y'`

这个时候，我们只需要取构造一个类型。让索引和类型对应即可。

### Answer

```ts
type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key;
};
```

### Tips

- [Answer](https://www.typescriptlang.org/play?#code/PQKgUABBCM0QtBAKgVwA4BsCmEAuB7CAeQCMArLAY10gXnodpIE8IBnASwDt98uIAFAAFOPPgEoIAYiwBDNq1q0pKiAEUUWNrg58lUAOIcAbjln9ZAJ0uzmAGjw2ubAGb5LAWwjcCEcxHxyKlw8ZjQzLgATPAALHABrLGZgY1kMTQgPFG1vflw4iABzEywLa1sAOn0IADF3CCwAD1kPTCxqgAMu3DZaSj4c3HRsCABeCABtAHJcLQxZKYcpj3xIrAwIAGZFiGXV9YgADR29tY2ATSmAXT82CH7nGig+gZDLLRQMXAAuZGGsJD4UgUagAHlwYSw+BceH+AD4IMBgA1GuFqFhogBvPBzWS-Ga4k4rM5bKb44kHbZLCkbY7k-a0okMiCXekky4AX1oXQ61QRADUOFgAO4BfhGXAACRQJF+MVwuDQbG+SJ6lBiFTIbAq7kKwFgYBAwDAJtAEAA+pardarSz8ChLBAAML7CCSrDvC0273miBGk0Q8J-NqA4HBUFIFGzKJ3d6ySJ8DCsczMCZXBHjTG0CaJVjcZATLgoDwkD1XK6-XMAbjAXNNIC9PutyC0ISd8i0jablr9xo4rXcIWxAFEAI4oNIOYeo4IQDkQFyWfBeKZCQNYeDqtLYLiFLTAFA6DBsKYmh6Df5jSYEtjzJkkqm7GlHe8HS43eT3V4ByH3Dt3cYJloac0VwUExwnDAI3+UMgjBddoVhNo4QcbFZlvPFdnQu8qyfZltjZSkplw04DjpPCSWOEjn1ZCi3ymDk4RQsArhNMB1waax6nGVAQyBOCwImCZoAcAAmK5UI5dM2LAM1u2bGoHXyD0IAAZVmJUu27XtZPAKAEVUmIrBwZh7UdNh8HSHQBjlBUlRVYA1Q1LUdUsPVYGAcw2GFD1aAFIVRQsqzdGcWzFWVVU2HVTVtV1fVoGAILDxC3p9IgABZdwcCdIyMB3PdlQgeVwocpyYtcwpDWNMAgA)
- [others Answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A11+label%3Aanswer)
