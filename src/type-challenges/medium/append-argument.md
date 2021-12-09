---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Append Argument
order: 13
---# Append Argument

### 要求

For given function type `Fn`, and any type `A` (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take `Fn` as the first argument, `A` as the second, and will produce function type `G` which will be the same as `Fn` but with appended argument `A` as a last one.

For example,

```ts
type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
```

### 解析

在这里，我们使用条件类型来判断函数的参数`K`和函数的结果`R`

```ts
Fn extends (...args: infer K) => infer R   // 这里就可以得到K和R
```

### answer

```ts
type AppendArgument<Fn, A> = Fn extends (...args: infer K) => infer R
  ? (...args: [...K, A]) => R
  : Fn;
```

### Tips

- [answer](https://www.typescriptlang.org/play?ssl=27&ssc=104&pln=27&pc=1#code/PQKgUABBCMCc0QLQQIIAc0FMB2ATVATgOYCuAtjgC6RKJ300BGAnhALICGAxgJaYBWEAMo8A1gHsCHCAAoAAmW59+AZzGSOASggBiCrh7ldHYuSoqaNHdYgBFEphWUe47JagAxSRCI8AbjgQAGYk2FzOrhCUzFgQAAYe2HEANBAceGnYrNGxcShxsumsPNhRABY8KhBcrpSYAB6UEBTpVQDumBC4rgDkTQSOlAQ84eWdOZip6fgAkl29TWUcARAlzSX4RVExnYC8G4CQe9pcAxx1aT44mMNc27FtFVxlEG08ADavURyinQlJaVWUMqdII8AhONKmCjYSipPIFDgAoEQFSYGp4KYZF7vCBoAjiXAkLjA0LhFylCbxADiBXuIyeWI+jHGSJUHAo-3iiQKjBITRegLSGBwuEwm0hVHi+Q50leCKarkwADp3BAvAQIA02WhXpMVXF9RMVMceGhqFAKYkIABeQoALgg2HITIIqUY9qcw2wRG0VoAfA6nVcVRSAEqOEivJo29BYPAocXQgA8iVd4nEOvS-powGAGvqWHCoogTLtAbIztd7qGJSIqXq9sYaYz2B9-sd5aDUH1cRV-oAKhUqgBHBxOMmrKpoSR1fBBPFkMYQADakh4vmwHA+JmcXB1AF0ZGVKJQ0CpbTmRX5FZRxMBFFw1BIpMAOLg-OkibhEIbjabEA0rl4FEVEQEdBjJRAABYoNgABWLhtBYZcFCUARHw0A8jxPM8c18QESEYRUajIO9UNUdQpE0XsIAANT4NoIEiSkeEoAAJAj7Sw09z2ASgjTKRVVEVSQiGAOBoDAEBgDAGTQAgAB9RSlOUpSIAATXEEh1QAYXxTpWKuToVOMxSICkmSKRjYV41IKFKGTbBUhQf0bUtBo6jwKoZEVHyTCIM9VmwIIrggABpVtAuC9UQwgAB+WQfMVPyAqXRLQqcvcIpi+1EgAbhksA5JM4yID7QYIG0hFHAU4rlLM6SeDIKcCCaABvCAAFER03VIOvzVEmgAX2CecIB6OQJkQR5Nx1L1HGAXk3hUHoLJ2CqqoQaMhTjBN7JkDh7XbCtiyrT1vWtNtAxdYsm0wTMwFDcNI020sjquStkWrL06wbW70git6CFW2JKpRAAma1UG23AbLMJMZAivxxB4XBUlCEUQWwUVfQetawxUCNKAhm0ZHrCB0cwTHRUR5HcGBzouCqqobSXGg+oLeyupITdE1BzBoFSfHCegX1fWSNn+vCRMuZ5vmwcFp6idF8W9wKwqQBq2rTI8LTARCoQ6lPTWtfq9WaH9IQlgGCBmE09UVHTRbXACricN4-jBJUYTiDE+AX2wFQOiBqB-TozAGId14nYDzjj24nM+MeT3vdE8TgEj6OLBD9hJE6bSlneHAiEcWPsJ4xOBKEkTJOksAgA)
- [other answer](https://github.com/type-challenges/type-challenges/issues/4826)
