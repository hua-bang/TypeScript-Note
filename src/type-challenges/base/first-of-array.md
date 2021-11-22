---
jinav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: First of Array
order: 5
---

# First of Array

### 要求

Implement a generic `First<T>` that takes an Array `T` and returns it's first element's type.

For example

```ts
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
```

### 解析

这里其实我们得分两种情况

- 数组没有元素的情况，则类型为`never`
- 数组有元素的情况，则类型为第一个元素的类型。

### Answer

```ts
type First<T extends any[]> = T['length'] extends 0 ? never : T[0];
```

### Tips

- [Answer](https://www.typescriptlang.org/play?#code/PQKgUABBCMAsEFoIDECWAnAzgFwgewDMIBBddAQwE9JEE76aAjSkgO2wAs9WXkBXCAAoAAuXYE+ASggBiAKblMLGeTJUaNGVogBFPnJypuGqAEkAtgAcANnPNz2EchADmDuelQBjCAAM0WNgAPAAqAHy+EJzkuNjkANYGTqwkaiy+IZFiACYQ6HLYfOismBCo2ADkpQQYOBBytvbsVVGUlnIAdCYoeOj1AB7kVrbdvmPYmDTYbXJOZNAQALwQANoV5BUANBAVjFs7XhUAulMzc+gATEurAMzbF9vQJ1Cn7RAcCtkLywE4QaroaBhCDAYADdpebByXLYPAQRizdYVV6zD7kbJXH61YIAi7A0HguSQ6FROEIiA3GhjXzdYEANVQcgA7vgUgBxcoACT4jAAXO9sNhLJheaCJl4OB0AFaYDq9FzAOBgEDAMBq0AQAD62p1up1EAAmngihAAMJ4bKzTkeWZ6u3aiAqtXTN6-YIhAZQ1jZUpiSgrI7A5YhFYAIlsrBcnFDR09Dh9EAADBAAPwQVhyABuHgg-JDiaOAG41WANfa7RAQgZcKbFEly3rHarUFZergAN4QACiAEc+ORrNsu-0IbgAL4QAjoPDmHbCF1yBASgcRtyYYB8bCoayYZFgBcQLx10rLFY0YejoK9-vWIJuoIrO4QB4wQPbG5hMKbc8jonBa8Dne2IPoI0iLMC0AXE+nbkPyOCeJGEBjm+QhgRBUGft+UAXn+V59oB94Bl+6ZZh4mE-peAG3oRfDenINQZtkKG0ZaDHQp+YAnCWZYNvq-DoJwOYAMpQsKWq8Q6TqgDQwJCRwqizJQxp9JgeDWJuRglPyHCCsKorAOKkoynK6AKnAwBiJgTIeDJEAMsyECqepW7cCKApCiKYqYBK0qyvKiqwMATkaa5tkALK9LMprydYq4GNpumeQZ3lGX5pnKqqYBAA)
- [others Answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A14+label%3Aanswer)
