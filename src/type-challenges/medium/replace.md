---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Replace
order: 10
---

# Replace

### 要求

Implement `Replace<S, From, To>` which replace the string `From` with `To` once in the given string `S`

For example

```ts
type replaced = Replace<'types are fun!', 'fun', 'awesome'>; // expected to be 'types are awesome!'
```

### 解析

首先，我们得判断`From`是否为空，空的话直接放回字符。

```ts
From extends '' ? S : ...(From有值的情况)
```

接下来，就是`From`有值的情况

```ts
S : S extends `${infer Start}${From}${infer End}` ? `${Start}${To}${End}` : S
```

### Answer

```ts
type Replace<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer Start}${From}${infer End}` ? `${Start}${To}${End}` : S
```

### Tips

- [answer](https://www.typescriptlang.org/play?ssl=22&ssc=169&pln=22&pc=1#code/PQKgUABBCM0GwQLQQEoFMAOAbAhgYzUiURNKICMBPCAQQDsAXACwHs7qAxAVwgAoABHIwBmXAJQQAxAFs0AEwCWXaVIZpp2HGsRYFagE44sRIpLMQAilzQBnBgrYmoASQ1Z1aRhAAG6TQQAeAGUAGggOfRZpMIAVFgA+bwgAdyYFPCYIfUxcAghmNAg7fQU6AHMfCKik5L1M7ziktjzS-KZCsoUAN08ihhLynyDvJ3CWfQg0AA8cN0IoIm8lhhsiBkoMQuz-eQgAXlQc-DQAgHJ1zZsIHGyIUToAQlOw0-vniFOcZNsotFP4iDAYCTKabPBqOT5FgQciFc4bWzXW5fH6yJ6LJajAEANQUaGSEDYEAA4noABJccgALggTAYDAwNipQJWGQAdAArGxs8ZlYCwOBgEDAMCi0AQAD6UulMulEAAmiwuBMAMIsOSFMloW6y3VSiDC0UXQp+XInIIgtR0ORXYqlMphKoqaZWm19AYOiBxS2eN128oAg5On3Wq6nU4QAD8EAtNItLt9V28ABIAN6lYTamMMG4MAC+aadBfTdEzEwAota80loynU0Ec-p82m4sXK3JqxA46KwOK9bqvbYGBAVTgbIj+7KDSKFBpxsPUxBywBHLhGMLl0FocEQPN3SIqU78Y2IDJGdzlWzALj2LA2U5GhEQPBjxEHADaRE3YIYARXa6wAJTWOM5hBYFhyBud5Tkg-RoLAlh-heBCEP+eIQi-LdwT-VcjCAo5AlecDYNg6DSOQ8CkI+FDiKg+J0Mwn8cIA-CdlA2j9HIj54Mo9DqI40j6IwqBv23X9-zw4DCIQkioJechDB4xC+KIiCbkEhiRKw8TcMAqSTnDF5oKo8MhLAABdHtexASVJzlbgm3aCYG0wK47LlQ1QCIAEgiYG5CkoJUJhsFgsBvBw6CZWl6UZZlgFZJhOW5Xl+XgYAhBsb59G8iBcXxIpQvCtgorpBkmRZGx2S5Hl9D5AVgBCsL7GKnKAFlxkKFU-KwC8ylsGlStiiqquS2qhRFMAgA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A116+label%3Aanswer)
