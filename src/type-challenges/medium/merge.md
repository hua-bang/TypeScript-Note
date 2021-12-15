---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: merge
order: 21
---

# Merge

### 要求

Merge two types into a new type. Keys of the second type overrides keys of the first type.

#### case

```ts
import { Equal, Expect } from '@type-challenges/utils';

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >,
];
```

### 解析

我们判断一下 Key 是否在 S 里面，是的话，直接去 S 中 key 的类型，不是的话，则取 F 中的 KEY

### Answer

```ts
type Merge<F extends Object, S extends Object> = {
  [Key in keyof F | keyof S]: Key extends keyof S
    ? S[Key]
    : Key extends keyof F
    ? F[Key]
    : never;
};
```

### Tips

- [answer](https://www.typescriptlang.org/play?ssl=19&ssc=1&pln=16&pc=1#code/PQKgUABBCsCcsQLQQLIFMBOBzNkmIMLwCMBPCALQE0BlAL1IGcIAKAAWvqYEoIBiALZoAJgEsArgP4B7YgCs0AYwAuePHw0QAiuLSNlo6QDs1UdNjQRlAd2lXSABz0RRR5XYCGEI2mv2nAHQQANJoTBDSAGZWABaWjErGwv6W0gBumBiiws4A1mHMUbGWkaIY+ikBphAAfBAAaqK+EUYQAOKiygAS4sQAXBAxysoOjH3AwMqMijEBcowB0tjAcLBgIMBgW6AQAPr7B4cHEFTS4hgQAMLSORBdmJZHT-sQG1vKjpbmOAA8AGIQNAAD2UaCMwmYAHl5EplAAaCA0QEgsEQiDQhQqOoAXggAG88ABtULkVwQfKkIoAgA+5LCRRoAF0BiTkaDwcwKQyIAB+RHEsKMiAssJs1Gc+nRAF8v4C0hCgY+DIYADcYAAvlswDtnk8IAAVPTKK4eBLMXVHV6bUQCBxLY14iAAUQAjuIPAAbBFOoFOFQQdUQSIYaRSADkbA+TkQM09HrBOEYwHEBg9jDD70+ED+0jsuIJUA8iskxEwaqg-Qg+iyRiwavVaqjlgAQh4LvmSMWBKXVXhFANiLn4x4jPW1WAmxBFKbnLjCXgfX7lD9Xe6PT9vmh-rmEa2MDUEQSAJBF7wlstgI+Vozn3tH-sQQfSYejvDqmo1MCMrXakB7C3HH85zKHEFw0KCoz-gBuxWr+eB1DQMRtpYlLnFWz4poYRhjIMwyjOMkzTLM8yLMsqzACOjDWJg8ENE0fiMBhBjGDhQwjGMExTDMcwLEsWArPAwCMR6mEsbRKBLJYlxIR68a1noAxsfhnFETxpFYOsmxgEAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A599+label%3Aanswer)
