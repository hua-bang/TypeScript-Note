---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Pop
order: 7
---

# POP

### 要求

Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.

For example

```ts
type arr1 = ['a', 'b', 'c', 'd'];
type arr2 = [3, 2, 1];

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]
```

### 解析

我们先思考一下数组的`pop`操作。我们只需要返回原本的元组去除最后一个元素即可。

那我们如何获得元组除去最后一个元素的类型呢

```ts
[...infer R, any]
```

这里的`R`即为所求。

### Answer

```ts
type Pop<T extends any[]> = T extends [...(infer R), any] ? R : never;
```

### Tip

- [answer](https://www.typescriptlang.org/play?#code/PQKgUABBCMBsEFoIAUD2AHSiE91gRgJ4QCCAdgC4AWqZxAYgK4QAUAAgIaUBmjAlBADEAWwCmAEwCWjYUI4AneR0JYsg9RACKjUQGcKk2qqgA+CABVC6UQGUAxvMnoKEACwA6AAwRJuiPNE7VGExMnEJHzIIal8IOyoOABtE0TIAc1FjCABJYXQU0JcOCAyyUUc7CAADNHQAHnMTKuiElwoOAGs9CC5SRWVq82aucX9RCkZ5Mj9ekn7iAHdJalRGF2WAcj9Ejn0IUQLUincs+lR5fYAPDjyUrKqHil0sCitRHsVoCABeCABtDYcDYAGggG3wILBdkhG3EGwAui83h95AAmH7-ADMoNRoOgiKgSOsYy+v1qdQU8mgZmAwCu1jsFAiFFQEHw7wBQNB4Jh0IJ0WRAXRZIwFMUqJpdNElwZTNGLLZHOxEFR-IeVSyIBAAFFLhQlFqAFwQGySYSSHbyRKEUF2XqEVY+W6iQrVGxUSTcChVUE1Ri6KjDMLVACq0w9XuGfgWB0SAH4smYAGqSUQLCC0CAAcWWAAlGPhjVQKBR0LpDbSnvF3AArXTuc5pYBwMAgYBgDugCAAfV7ff7fYgAE1VhcAMKocIQXPld4D+e9iBtjuvYnk8xXJlhGZ0P7wsy-DfSrfiPx-dwXyRkbjlCAAJVBXEI8IgcfvEGNZQAbuUANwdsAuwXecLD0Fwx12bpgIHJd2zNdBzhcABvCBtQAR0YJJQV1WUIAAXwgbh5GCME2FXUQEHiJIUnSPRgDWC1dA2FdkTtXRul+P4sBwwIKDqdDMMSOpyT+ZVcRgfdQVEnF9xMYFuJlXj+IwpJhNFTkYQhbloW5OFQUk-5AU03kERMOSwERACgOgwcmHkahbxsJkyx7GzF2XUAsDMd0FHeB1JggXRUESBjaHLCBi1LctK10as6wbeQmzgYAuF0GN5C8iAUzTQLgtC6YixLMsK2AKsqFretG2bWBgCCkKDDCzKAFlzneMcEmSVIMnCyLipiuLKsS1t2zAIA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A16+label%3Aanswer)
