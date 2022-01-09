---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Reverse
order: 29
---

# Reverse

## 要求

Implement the type version of `Array.reverse`

For example:

```ts
type a = Reverse<['a', 'b']>; // ['b', 'a']
type b = Reverse<['a', 'b', 'c']>; // ['c', 'b', 'a']
```

## 解析

思路是递归，每次把最后一个字母，提取到前面。

## Answer

```ts
type Reverse<T extends any[]> = T extends [...(infer Rest), infer Last]
  ? [Last, ...Reverse<Rest>]
  : [];
```

## Tips

- [Answer](https://www.typescriptlang.org/play?ssl=23&ssc=103&pln=23&pc=1#code/PQKgUABBDMCMCcAmCBaCAlApgN0wJwGdNJUUzySAjATwgCsBLAQwDsBzAgC1YgAoABRqw7cWAW0wAXJgEoIAYgkATBgFcxCyaoAOAG2JQS84xACKqzAUkMA9ixIkAkmL2YJLSREmdMX6tt9cQlsWCBsAMwgAAxiAQTw8JmoAOjwcfCIYqIcoADEbPAhMAA8mF30ALhzomMl-SwBjPAZtSRI6gIgmCABeDHTCTAAeAG0AciYxgBoIMcoxgF0APghgYAhx+ZmJxfb6iEpe-qCiUZ3trdmGxZW1jbHri+nZyYWSLOqVgDUGTAB3MKhADiDEkAAlVJQKhBOJJJNoCBU1pICA1OMk6ARkgU2MA4EgwCBgGASaAIAB9SlU6lUiAATRsqkKAGEbEpfGD8L4aTzKRAiSSOr4sCdhgAVIrFSSYFhKAhdFjUEbLI4SkrS2XykbJHUMFjhfD9KwzPUGwoAGSYVgWEAA-BtLcaIDrkiKMsMsFYljbocqANwksBk3k8iBiyyeZlWywUkPU-nEhguAqeADeEAAogBHVRMXQzDPFAINSQFouYEu5PNEGYAORskmzud0EAAvhBwngbBoxvwhSg0Xn9OxLMBVNZdAQxoL9g1o-K+iMSIXi5Ihk280M3YMzpMnssZptnjtlkspsvyyX1znN9vTuM97NLg8boeX09tq8lkswG9A8G41pXImW8Q0AGVpQRWNAPJBMg3AKAVjA7g0ggahGUKAgbF0ccQkRGE4QRJFgBRNEMSxHE8QQRBgFYAg-nwEhvl+AEsJw6w7Hw2F4URZFUXRTFsTwXF8RotjcM4piIAAWQKXxmW4XRhzYSxoW4oi+LIwScUJYkwCAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A3192+label%3Aanswer)
