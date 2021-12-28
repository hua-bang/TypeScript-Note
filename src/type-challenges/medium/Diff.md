---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Diff
order: 21
---# DIff

### 要求

Get an `Object` that is the difference between `O` & `O1`

#### cases

```ts
import { Equal, Expect } from '@type-challenges/utils';

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
];
```

### 解析

我们这里，需要找到，两个对象中不同的属性即可。

实质上，就是两个对象不同属性之和吧。

我们先来说如何得到 O 上 O1 没有的属性

```ts
keyof Pick<O, Exclude<keyof O, keyof O1>>;
```

同理得到 O1 上 O 没有的属性

```ts
keyof Pick<O1, Exclude<keyof 1O, keyof O>>;
```

### Answer

```ts
type Diff<
  O,
  O1,
  OT = Pick<O, Exclude<keyof O, keyof O1>> &
    Pick<O1, Exclude<keyof O1, keyof O>>
> = {
  [key in keyof OT]: OT[key];
};
```

## tip

- [answer](https://www.typescriptlang.org/play?ssl=18&ssc=3&pln=16&pc=1#code/PQKgUABBBsAsCsEC0EAiBLAZpyyn4NwCMBPCALQE0BlALxIGcIAKAASrsYEoIBiAWwCmAE3QBXfnwD2RAFaCAxgBdcuXuogBFMYIZL0UgHaqoAcUFKIAQ0MQABgHk5ipXYhKAFlcvomnwRCi2IIAToKGCgFEFgDuguH2Dm4AZIkAjHYmEAB8EABq6IIxEEYQpuhKABJiRABcEB5KSgAODLXAwEoMCh4AdLIMvVIhAObAcPBgIMBgs6AQAPpLyyvLEJRSYiEQAMJSwgGVoQGrp0sQ07NKJM0BGNgAPA4ANBAOaa8OACoQALwQAAV0AoANZPV4AUQAHgoADZiA4PEGCEhSTBvV7I1Ho97ZXKpIGgp4fCDQuEIwRIlFot4krE0hx43L-ADeuAA2liIOhbPScV8ALr1b6clECgDcYAAvhBZmB5mdThAvrpLDsrAxdItFSsLjN0PxmsNLCzSQBHMRWWGQqG3ZQQGWYEJSSQAclY11uSB6Vth4RGumAYn0sIYrquNwCADEpFI-hA2VBDFYhPU9CEeSNcFYA2mlBnDFmpWBPQEAEJWbas3DJ1MQdOZ7O5+v5xtQAOGA4heqGCTRELSiO3CAKDVa-7s3DQu1KB4Qi1Wh73TAPGNSV4VkLZV6mjtdnt90IOvHPKe2lxzhewpdYFeb55r7cJiB70IH-j94-ZMACuXykDajq5xRls-jbNQSiCK0gFAXq-64Lk1BeGEECols9ZSPC+hGG0DRNK07SdN0fQDEMozjAgwA2AwcQDlAuQFEUGFYQYhi4Y0LRtB0XQ9P0gzDGMEzAAwmHBqxDAIRAACywwBDsXiwn6ha6PUHEEdxxF8WRWaXGAQA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A645+label%3Aanswer)
