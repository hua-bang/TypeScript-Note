---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: PartialByKeys
order: 27
---

# PartialByKeys

### 要求

Implement a generic `PartialByKeys<T, K>` which takes two type argument `T` and `K`.

`K` specify the set of properties of `T` that should set to be optional. When `K` is not provided, it should make all properties optional just like the normal `Partial<T>`.

For example

```ts
interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User, 'name'>; // { name?:string; age:number; address:string }
```

### Answer

```
type PartialByKeys<T, K = keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
} & {
  [P in keyof T as P extends K ? P : never]?: T[P]
} extends infer A
? { [P in keyof A]: A[P] }
: never;
```

### TIP

- [answer](https://www.typescriptlang.org/play?ssl=37&ssc=9&pln=29&pc=1#code/PQKgsAUABFBMDsBWeUC0UAKBDATgFwEssAbAIQE8BpAU3IGdIZVmXVGoAjcqAKyIDsA5nQAWWflAAUAAT7jhY-gFtqeLAEooAYhUATAgFcl2gPYce1AMZ527LfagBFA9TqET-W9CgBJJQAdiahV+PCgsKEFqfmocAksoAANsfCIyKlo6AB4AFQAaKEoAPkSoAHcReJEoNQBrVxqykxryf2pwnEEjaLDEnNLxXSTKRIA6LxhEkag6NssCADNuPBF2ulUoEwWofxwTNtSGraT+mrEw0RMDYiH1sLxmjnb9934SUagAdVWJKdKCOhQfgmMK7EwANwIumougKBAuIiuNygSiw9XCxGIOz2B0IR38rxIvAMbigxAI6JW7WBOFRWOSuEIJFyJXG3nYADETDgoNQAB5YAJBCZJRKJPCtVyWOIE9gEUKxBZYSztACq6x5AG92DA3ioAFwzPBxIQ68JRQ38IxPHBmrC6XQ4Vx0Q1uE2CdgAXxFEraUHVsRSTOIADlBe0ALyYRlpCg0ehZAM4AoAcj11BTRSgwGAUE1QPDAH59W75YIANzm6j6q1KG2V+2O50l41lqDe7xixIirMANQI1DKmwkAHF4QAJAwcQ0iPB4fwunN4OiWESjHh0UbcwTABDISAgYCQY8QUBQAD6l6v16vUAAmlceQBhEzQqDj2LtG-fy9QQ8nyBfXaINYwyBN8kKKAo3qchjhyLMo21bwAG0MCgeUoBguDwkBND+TwaJdEBSgoELIFqHBWIoENDAAF1DRyVDaMgT0oAAMjzdhUPQiQsO2HIcMwXk+QI-giMgsi0MtCjYlo4soEYuiWOE0TxPlBYqIAQUgMj824jC+KgTT6KMpj20gaTKJwcsANPEALx-G8FNcMInywdZAUcpz-wgAgAm5MJ8wAUQARwMEgCiCvk5jwSLoqsPAORIdYChDEFQvCrFWIWPZjBTaQgNQVcSCCIRXGAAxCGIOgUxPeUCJwJUVX9DVOO8dNXVbU1vCwC0gWtWJ2EbJ06BdI13RYuqFUa5U1Q1ECSDDFQ2t1ItOomnq+trG0hodEaxtLIQoEmiBIHqxVZpawMY0W8NNLEzSohWgsVHkw6PU26h5O2waer25txrbE7AMlKBLHchoo2Q9gopirIMuZBb0njbIk1TdNMwKJMkaW6giiKPIYfi6x4bCxGbuRzJEw1dHwxTKAAB8oBTAx+FqYEyn4TGrpwHHw3xwnvFhhLScyrIkbjKm0eZjHGeZ3qMwJnm+ZUe7dEevGCaJuGEeIcWKclhMkyVpHqdifGtYgZjTptyAzy868oA5Ax8FWHkAGUCIXByHfPP8jzs9gs3dsQnSgWCXZmExiEqggPDG2d50XYBl1XddN23XckHgYBxDoMpfpgPsByHOho9j+OZznBd9SXFc1w3LdOiz5BgDLmPXgYbwswAWW5donzETFoiiBPq+T1OG4zzoDwDyAgA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A2757+label%3Aanswer)
