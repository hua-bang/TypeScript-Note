---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Absolute
order: 19
---

# Absolute

### 要求

Implement the `Absolute` type. A type that take string, number or bigint. The output should be a positive number string

#### For example

```ts
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"
```

#### cases

```ts
type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>,
];
```

### 解析

我们只需要把数据字符串化，并判断是否带有负号，即可。

### Answer

```ts
type Absolute<T extends number | string | bigint> =
`${T}` extends `${infer First}${infer Rest}` ? `${First}` extends '-' ? `${Rest}` : `${T}` : never;
```

### Tips

- [answer](https://www.typescriptlang.org/play?ssl=40&ssc=2&pln=29&pc=1#code/PQKgUABBCsBMCcEC0ECCAjAzgewDYFcAXAU0mSQsrPQE80A7AEwCdi6BpZgQxwDdMA1nQAUAAXSsAzAAYB3AGzwAxpgCUEAMQBbYowCW+LZq1dCAC00ktAB1yniSXHpLdcZMhs8QAivmKZCPWx6dygASRtcYh16QghzYggAAwwcAhIk+JprYgA6NCyc+LNTeK4BRIDmPXoAcwAaCHpDdGJmCGx29D1amsJ8gBUzROwiayIITDNR3EYIVoguCGtsTGc9XkTmrVb2qpra0IgAMU6IYgAPLkjSKDIkh8JMMkJsxIH-OIBeZABGaWkAG4Xm8IAAlfz4XDfNBYPBEYgAHg+AQAfICIMBgOcLjklCQ5oRsPNEgAif7SUn3B5HVEQABqemIAHcOvQIABxZwACXw6AAXBAzIRCNZMPysU8lGZcgArTC5Tq1YBweBgEDAMBa0AQAD6+oNhoNEAAmqN2gBhbCMRLctqJI2O-UQDVa15FVLwkjInEkJiYJotNoQAA+k0I1TqofmPT6dJ+YCSABIAN4DAC+mUufsYAeTKZqADNg8c9MwAunU0XgxCK5kAPzJVOl8uETO+4j+iAAciQ3YgjfztbbmUF+Yzo6axE2zGBYB1TsdEBRcQtPH8esXhpdmr0Nk6cRTEAAogBHfBcXCNY+44j4iDpiCF5jYIzd0TuhzSy9ROr+YBEHouCYN2bqgko64Bj8ADaZA3nihCImeF64IinrpEi0ioo03bSN2qLYXBt74kh56XmhcIYYiSBYTheEEfUREIaRKEUWkCKIv82E9v8+GEVA8F3ohyHkehHFINA3HdtAfGMQJxHCWRqFid6uH4XRslMUJLGiZRHG9vRGkMVpJEicpemqbxUlWfxJ4KTp5nsapEnqT2MnGfJzFmWxXpIkgvy6gC0iBQC9DWUFQWaZ52neSpSLwLq8BJWFOFJUlmkALpatqICbluzrHPgzAJO0ADKJBinl+U7vO4BQHSpUlKwEA0OakxekE9DikKIpihKwBSjK8qKswyqqsAXBdcybRkHSjIsu16Sdd1wqiuKkqYNKcoKkqKoIMATnLbNEAALKdIkFolLgv61P4gqrX1G1bcNSrqpqYBAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A529+label%3Aanswer)
