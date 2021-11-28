---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: Includes
order: 14
---

# Includes

### 要求

Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.

For example

```ts
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>; // expected to be `false`
```

### 解析

这里的话，我们可以直接使用**索引签名**和**条件类型**来判断。

我们通过**索引签名**，能够得到相关的联合类型。

```ts
T[number]; // 'Kars', 'Esidisi', 'Wamuu', 'Santana'
```

这个时候我们在用**条件类型**来判断

```ts
type Includes<T extends any[], U> = U extends T[number] ? true : false;
```

### answer

```ts
type Includes<T extends any[], U> = U extends T[number] ? true : false;
```

### tip

- [answer](https://www.typescriptlang.org/play?#code/PQKgUABBAcCc0QLQQJIDsDGAbArgEwFMBnSJRci0gIwE8I0cssIAKAAQGsa0CAzHDgEoIAYgIBDInRHiATrPE1SpEaogBFHMQAuASwD2aZVBQBbAA5YCpgmm0RtACwIQAUuIBu4gMoZZu83sAAwBBeUUAOl1MXEIiIIh+TD1DCGiHZwcacxcpIm1rCIgQrJyHcQ5iDJdtAHd9CDkAcxwbOyIigBVM-Rxtcz6IIkderDwIKhdxCf19K3E0CCDtWS0E-Vkl3nEsIgIgiOMIADENiAIAD3ELKyOg++0SKG1sl10iAAVdJjkAWVsIABeVAxfDEAA8AG0AOQAaTkRGhABoINCAKJEXR4d66ZGogDq1xwODx0O8C20C3E0IAuijoQARAzQgB8EGAwHOFxyGAK420DUmWx2eyCpHuYqgpDZADVdARahBUgBxXTaAASOCoAC4II5tP0iNqOY8MI4IgArDobJrAODQMAgYBgF2gCAAfU9Xu9XogAE1epsAML6QgQdUEWQuH0xz0QJ1gF5ldDYMFEcGdLkFNB4IgQKPiPCGLB0HBoDhofS1NCQukQACqbOBAG8IJCUGlFpUaPpeBBOjTdWiAI44HYZ9t1xsQAC+kIYpkmshpWdsucSIpcAH4N7sXLqVloXWA3bGY-2dBAg5IqmeffHnboLBt7K2R2OsCi0dyCLzZ4lZH0UxUTYJMCEQM0disNAmmIYA+m+REXTAiAMBvPNgUhUhvx5bRwXfccU1iCEYXhWREXpDEsRxUlCVMYlSXJOwqVpekyMRFkUUPAgWU47Cf15fDR0I0E4ihOEEVJKjsUxZFoTohj6SYyk0GpOtGWZTjdz2XikX43ChI-cEiLTKEAEYUQAJhRABmFEAFYUQANhRAB2OtXK07jdP0388IIrBjNEkiLIgayIDsiBHIgFyIHclEABYtO2PcfKgHC-MMkTUzEyFQvCmy60srzVh4vj0oE-zhMCkzcvy2y6zMkqtDSiAMsEgKgpykjmxnOtW3EXVoRCaFZ2SzdWvaqqjNqkiqFmeY0Cs2yHOcty6xSnSUU2sq9IqgzOtm9NIW45aItWmL1pRea5gkNBxtS8q2sqrKauC46drOyLoti+LtJ4rjSsml7DveqEBqGkbZ36-MJCLNAS0aSHRpnB6dKeqbXq64jjtbAt4cRwbUShvqUQh4mUbR3awBpY8TxAD0719Y4cFkJxIwgbwCnMPMmd9BNQGlTnHDkFwe1ZoY5gQwwjT1A0eeNYBTXNK0IhtO14GABYiFqSMhblBVJdwFI0Fl-VDUV5XLWtWRbXtYAiClk2nggNlfg2FwgxFphbFgs35aNE0iDNa21dtx1nTAIA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A898+label%3Aanswer)
