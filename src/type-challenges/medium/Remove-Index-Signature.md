---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Remove-Index-Signature
order: 25
---

# Remove-Index-Signature

### 要求

Implement a type `Remove-Index-Signature`, which takes an input type `T` and returns whether `T` resolves to a union type.

For example:

```ts
type Foo = {
  [key: string]: any;
  foo(): void;
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }
```

### Answer

```ts
type RemoveIndexSignature<T> = {
  [P in keyof T as string extends P ? never : number extends P ? never : P] : T[P];
}
```

### Tips

- [answer](https://www.typescriptlang.org/play?ssl=32&ssc=1&pln=29&pc=1#code/PQKgsAUABFCMDMA2A7FAtFASgUwLYHsA3bKASQDsATbADygGUBLAc3IEMAXAVwCdtIYaIcLQCoAIwCeUABaMe+SWyiNGALy4BrZQAoAAnIVLVG7QEooAYlzZKjLrihixl11ACKXbAGcOjfOTO0GS4AA4ANnjY5BxQAAY4BMQU1DRMrJy82AA8ACoAfHFQADRQtADG4VzUUBwyJIxUtFDeLOzcfFAAZgqO+OIAVtjlsRySoT4AdEEwAGL4PGU0bGGRAFwz8XFxm2MTUPP4UAC8UADeYjAA2prYkmstHDyNzAC6D2zkkgDcl934+B0ZgehHwjEov2CAF9duMSABBE5YPBEbApWjpdpZbKHfIwYDAJYTEa2c7-QHAqCg8FQGHBMTbHb04J4gBqjGwAHcoAEoABxRgcAASXHEDxkHA4oW8awJHG85RkkwG3kmC2YwAQKEgIGAkH1EFAUAA+qazeazVAAJr4XhQADC+BqQuwnQt7tNUF1Br2JESqPRaTamT4eTxpwuwSuAAUVOQoLdJPgulBclA2N5Hs9yMwlhxopRM7GAPxQcjYYiLB7kBziV15gtFqCl8uVqAPaOvdupmOvb5OCB0g1Gj3u1M+WL2jM+E2j81evUQRhhBaxM5QACiAEcuGxwqUNzRibEod1elAAOR6X1oRV7yI5nzALh+cLeC8GyC+g4ApGR66Jg8vjZm8HxfJCMBdACQIgmCEKQEOEBfnCUAAEJsIsEZiDcdzVrWrrvOm4FiOIGEwVScGQoh37oWof4kWRlLUvBwSkWoQFPC8CGfhA37lNOmanFcYiHse2Tbru4TZMiSRok0QYZB0OS4qU65QRSsE0lC+T5MUIlHsMHDiTue7Sf6yTyZiIY5OhPC6WSpE8ORzG0jpenBKJhnGZJZkohZqRWUp2S0fZ66Oc5cGlGxHEga5+SQK8PGQCOc6WrMvB1PW9D5tKs6pcaC7JeALIMDIGEkEmdrePgVR+AEMqyJK0qysA8qKsqqrqpqSDIMAnzeJyrpiGyHLctVtX+OQDUSlKMpygqSoqmqPAalqvXjS+k3eMNUAALILCQ9pleED7MD44pNXNrULR1y3MDqi6QEAA)
- [other answer](https://tsch.js.org/1367/solutions)
