---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Flatten
order: 17
---

# Flatten

### 要求

In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

#### For example

```ts
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
```

#### cases

```ts
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>,
      [{ foo: 'bar'; 2: 10 }, 'foobar']
    >
  >,
];
```

### 解析

这个类型的本质，无非就是条件类型+递归， 每次判断第一个元素是否是数组，是就递归打平。

```ts
type Flatten<T extends any[]> = T extends [infer First, ...(infer Rest)]
  ? First extends any[]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : [];
```

### Answer

```ts
type Flatten<T extends any[]> = T extends [infer First, ...(infer Rest)]
  ? First extends any[]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : [];
```

### tip

- [answer](https://www.typescriptlang.org/play?ssl=39&ssc=2&pln=31&pc=1#code/PQKgUABBAsCsCcEC0EBiAbAhgF2wUwDtJklSziAjATwgC8ALAewFcqBLAWzYIHMIAKAAIBjehQBOjAJQQAxBzwATNsw5zM48ZirFis-RACKzPAGdsbRkSjEAkgQjZ6bUxFGZ06QjzwAaCFQsEADuLOiKEAR4So6MIeJs+BCYjlQADniO9DiOmADWZskOGlo0mAQReFy4MU6ZAGZYNcWa2qkZAHS6UKiM4hB4AB6YHGleAFzdEAAGs9imxNjpDU34DgC8aKuEADwA2gCM-gBM-nsAzP7QALpne3uw10-XAHwQwMAQhyf+lzD+j2Is2mUzeADU2HhghArBAAOKJAASzAo4wg9FwaVM4w+81EHQAVqYOn0eMA4PAwCBgGBaaAIAB9JnMlnMiAATRY-QAwoxFJlEXhxJlWaKmRBqbSlhktjg1hAdgAVAaDNaKVzlKh7V4QTbEZVDNWuPbcepCtBscTmfwdW2m80AJTM2GuEAA-BBiKhLeYVUailrXR7iHtbR0MHLdt6rdgXjbbRHmjsneYXq60SHo9aIGHE2tk860xAM1BtQBuT10kCMsWsiCK50QbmYUyFWt1yWcNJ9bAQADeEAAogBHZgefyDwYZYS9gC+EHqkjUAHJBNK8Eh3J5vGZgMwLOhTMupcs3C3Cps9sRJ9PsDsR2P0Ds87ttXGvq849ep3gZ-fRx4z7bAQ+xHBApwQH8Nzvt84G-Fcn6+N+t7-o+QGRiBsF7McTwwWBOEvF+UA3r+d4PoBL6YfhZxQbcXz3I8zx4T8kFXACiHIaRqEUcB+x9vUjCMGiy4UBoy4VscaIHAADLO-jLgJjCieIy6vGc-GCcJynieBUmyfJinaRx1y0lWNbtuKqDMOIdT9AAyvgWLmRZEo0qAxBvHZ2TCgEXIQKYjDoPulgENi6KYtiuKmPiRIkuIZIUsA5SmMEQoeRAEJQv5gXBVYYUYtgWI4sAeL0ISxKkuSCDAAFQUWHl6UALJ9Jk3LZNuvBmGiBVFVFMUVfFVI0mAQA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A459+label%3Aanswer)
