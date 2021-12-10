---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Permutation
order: 15
---

# Permutation

### 要求

Implement permutation type that transforms union types into the array that includes permutations of unions.

```ts
type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', '
```

### answer

```ts
type Exclude<A, B> = A extends B ? never : A;
type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends T
  ? [T, ...Permutation<Exclude<U, T>>]
  : [];
```

### tip

- [answer](https://www.typescriptlang.org/play?#code/PQKgUABBBMCcBsEC0EAKBTATgWwK4BcBDfASwHsA7SZJWu6gIwE8IA5Qs-MiASQGtcFbgAoAAgAdCFACZSyJTAEoIAYmzppJXNlWDyVKNRXGIARVzoAzqUrVqPbOIA26dRXwRxWPERsUI+ExeAQAWxAGYUpYAZmQ4lhB6lAFBVhAk7tz4IegQhJiRLNnhGQDGTrjSaV44BMT6CWTRiRQNAHR2UAAGPYFelqWYJOL41H25NToAvGjedX4APADkAIJLEAA+EEsAQutbSwDCSwB8ANwQwMAQANqrSwA023tPR0sAupu396-Hr3ufLZ3F7bNa-D5fYGPbZ-UEQoFvV5g57w76w3bQ+7vag9LqdCAnCAANRI6AA7hBkgBxEj4AASuAYAC4ICF8PhxJYmVd8AMQm0AFaWNpxADmwDg8DAIGAYDloAgAH1lSrVSqIABNMi4TAQQ5kKoQOlYXJqs3KiAyuXjCAAUQAHuVKugFisnjtCTMVhB0Pb8OgZAkdhAAPwQCjoABuWAgLJWYBtGFqvn0CwAKk8AKoQGZpz23NOfX3+wO3CPRzCfMM3T4stM+v0B6QJevVjMQNqdpM+eqUBYOp1VBaZp55k6127Y+UgJXmtUQNNWDyHQiWNJz+dWkiOOIeADedoAjrhCE4ng6vKUPABfCDRTBkHRLUTjJClMJOFwUUVWYAEEhOJYSzWqkEClKuaQzDc1AXugV79sep4LN28ypvcJxPHcazvCcGEwfal74AhJ5OMhcwpn29xfBi1HHBh3zIhi4KAgxmLogCkJMXCzGcSCiJwixdzooxHEIuxmLYbhDz4YRxFIShFEUMsezUWstGnJhPwojxCKMeJglcVpbwGXxwmokJEmYqJaJWZZOF4VAsHwbaiGkQpvZKeWWD0TWUlgFO06zhuFoAGI6tkMYAMr+pyQXBZasqgNQhKRWEmC5Ew2q6pYZAVH4XKsuynLcsAvLvoKwpihKCDAFEZJYMlxKkhSOV5Q0LJshyXI8nyFUipg4qSsArX-pQliNQAsnEuSHB+X4-gVnXFT15VCv1orSrKYBAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A296+label%3Aanswer)
