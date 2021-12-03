---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: DeepReadOnly
order: 4
---

# Deep Readonly

### 要求

Implement a generic `DeepReadonly<T>` which make every parameter of an object - and its sub-objects recursively - readonly.

You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on are no need to take into consideration. However, you can still challenge your self by covering different cases as many as possbile.

For example

```ts
type X = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: 'hey';
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: 'hi';
  };
  readonly y: 'hey';
};

type Todo = DeepReadonly<X>; // should be same as `Expected`
```

### 解析

这里我们看到，我们只需要去递归遍历属性，设成只读参数即可。注意，这里的函数，我们并不需要去遍历。

### Answer

```ts
type NotNeedDeepReadonlyTypes = Function;

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Object
    ? T[P] extends NotNeedDeepReadonlyTypes
      ? T[P]
      : DeepReadonly<T[P]>
    : T[P];
};
```

### tip

- [answer](https://www.typescriptlang.org/play?ssl=44&ssc=2&pln=40&pc=1#code/PQKgUABBCcELQQCIFNkAcICVkEMAmA9gHYA2AnpPHNTZQEZkQCCRALgBbGMBiArhAAoAAjjYAzXgEoIAYgC2yPAEtec2QCdchUoxkE6AK2QBjVnADWyMgGdZeVGkqUZLiAEVeya6yXEnUAEk5NBJkBTYIHAgAc2QiZHUlYwgAAxR0bHxicgAeABUAPhSIAHd2JPYIORxLCGQANwTGNBx1HAVWBIgCMUiibsMTVng+vAglVltrXjo4fSNTW01jXnVrJUbyEc0snQA6fwgATQJ+Y1FI62mFCA4cYZLkSM1unQh7HBIlImjSicqAPKDRbjfocJS2YzsT6hH7IPbMdRtGwAGggfCIpl8RGsaIAwiQcFcvKMINYCK9nk8iBT4opbhTWDUnt9WBTjMR1vY2j5iAiABIER6NdRosinCDnfreJQkEiS6FyuKxCDi1Zk5AkXoMSUEEXfX7KMRiBJxYbnawkolVUSMa1oAhXOiy+GHbgEdR1AAe7RCyEOKUDk0orDIaCeAA0IABeCAAbwglCgXoAXPHE1BM5E0wBGJOZuhpgDk5SL+YAvvmyMX2FYy1BK1AQ2GngBRL3h0z02MJ-M7bRbVPp-NQfvZO25kcQMdvQsQEtKeuZxuZmdbavz2tkIsZiAr5vhiB5AiEGNIByZAdkHIRgoQYDAMmcXgkMZ0J7WdpPa0pdudzp4CklCBkBTZQHeABqSjICUlIAOITPyMxpuwrCsGg1gpg+kxQnsBjWHsHrRMA0BgCAwBgJRoAQAA+nR9EMfRxynJ6eInk8-KmrRjE8TREDkZRoaHgAcgQrDCageDpGgl7jnkLa2LGGJYn4YBCU80myTo+R3j2lBrowADaAAKoIQJY4q9HkAC6aZ5CZ1nep0RB4LYQILMMAD8R4OU5cSuRAoniZJmlaHJCkQN59nGY5aahbsuTRdZd52Q5YCVlRIDcbxDFHl4wx4kSJI5Yx-EUUowQesMCatgAjrwnxon+Qx7hAYjqAQahFkI6lwFCMLKl4wC8D4JDWGWaktpKRWKRAhmUM1pg5HVDUkDk8VXjeBRNR2QyKAU21gNZglTVGelQDgaYCNI0Z3gATHd9Bpt4iQ-JQxhpnG+Z4GmdAEAQoSiPmyCfVO0Sg1mWbsBDkNZkoaasOonhTlmBjFi9BpLrDK6w+YNaaiQBBY8uFaUJWGXqRAi0AWeX2jmFbyXYIN33Y99MJYwc4Y297NXpKMO8+O7y-f9gNEH2DNbCD8ZTgZMQC5DcvQzLsNZnL8O3Ej-qq6ukuMGj87c9ExNZjjit6+Z+NykTU5myu5OUZl2UlXxfDqBwXQAMqdBhzslWVYCgJQd6e9CLxqp65IkCN2KYRAqHoZh2HWLh+GEeoxHQMAojWI86jBxAUEwWSAMx5yKFoRhWHADh7B4QRREkcAUdlziBcALIek8eKKrCsRxwnVfJ6nDcZ2RFFgEAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A9+label%3Aanswer)
