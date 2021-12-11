---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Permutation
order: 16
---

# LengthOfString

### 要求

Compute the length of a string literal, which behaves like `String#length`.

### 解析

我们可以推断，当 Next 条件为空的时候,`Result`的长度即为所求

```ts
type LengthOfString<S extends string, Result extends string[] = []> =

S extends `${infer First}${infer Next}` ? LengthOfString<Next, [...Result, First]> : Result['length'];
```

### Answer

```ts
type LengthOfString<S extends string, Result extends string[] = []> = S extends `${infer First}${infer Next}` ? LengthOfString<Next, [...Result, First]> : Result['length'];
```

### tip

- [answer](https://www.typescriptlang.org/play?ssl=19&ssc=103&pln=18&pc=1#code/PQKgUABBBMCcAcEC0EAyBTAdgcwC4AsIB7AMwgGVcAnASx0mSSeYYCMBPCABRuwgDEAhjggAKAALYkABwA2w9AEoIAYgC26ACY0ArmtW50auYMNJZNQ1UGyGDFQ4gBFHegDOuGkUx2oAYSJjHUMIAnQIWSw8QlIIQQgPWhELKxsAGggAd3waAGNCVnR8QQA3dwiaAGtwgANKJOwVSJwCGoA6XwgAPggANRp0TOJMCABxSwAJHVYALgh8XFxpNxngYFw3fLaAKzc2oipsYDh4MBBgMEvQCAB9O-uH+4gATSIdKggAzXCJ9Cpwx6Au4Qc5gNahdjScIYFr4ADyJHqdGwAB5yBB0AAPQyYTRuBLUZEZABK7h0slwGOxWDxBIaAG0ALoQAC8ECZPTZYOAFCpONpNQAJABvOgkP4CGhUDwAXxFYolADksbgZTUIAB+NBRAgIpE4FHK7EZeltM2ktzk3AZfhSjyMnpzC1W+kAcma0VdjMuuEh0J18MRhIN6JVNPxiSJEGdFL54bpyKZrPZDtZYFD1Nx+KFosw4o+tulqvleaVKrVmu1sL1wdRRut7LNbRjDcL9sd0bJFLdHoIXoA3JcwSBbkDHhAACruSl+QRucpj8egmjGA6U4UQACiAEcdOkt5ioblKTKICQqIEIK7xL6oUh8jYPe5gMEaLI3K6fX6ILk5+U2fSDCboe6DHiiO57rIKIwtENYNCirqul0GQAAxdMhQEgWBEE2NBAZwciCGVHoVREEhGQAGzoWkmFHrg4G7rhMG6kG8Guv8dCCOREAAKzUbRoH0ThUHMYG+qoq65BvLiACEW46NI+DeLoajcQAjFRGHekO1yLg8AjvGEHyUOgyyjnpNwghcoAMD05DFP8EDsG8HxuEQsivt4KzzIsyyrOsmz4DsewHEcJzAMIbiZH8tl9AMQxuR5nheXMCxLCsawbFsuz7IcxwIMAiWeZgbixQAsgc4R+MUshPt5aV+ZlgXBbl2BnBcYBAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A298+label%3Aanswer)
