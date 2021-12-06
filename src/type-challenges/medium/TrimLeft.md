---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: TrimLeft
order: 9
---

# TrimLeft

### 要求

Implement `TrimLeft<T>` which takes an exact string type and returns a new string with the whitespace beginning removed.

For example

```ts
type trimed = TrimLeft<'  Hello World  '>; // expected to be 'Hello World  '
```

### 解析

我们要判断类型是否有空格，如果有，则可推断出去空格的之外的类型，如果还有，则继续使用``TrimLeft`,直到左边没有空格为止。

如何获取推断后的数据

```ts
T extends ` ${infer R}` ? TrimLeft<R> : T;
```

### Answer

```ts
type TrimLeft<S extends string> = S extends ` ${infer R}` ? TrimLeft<R> : S;
```

考虑`\s`,`\t`情况

```ts
type TrimLeft<S extends string> = S extends ` ${infer R}` | `\n${infer R}` | `\t${infer R}` ? TrimLeft<R> : S;
```

### tip

- [answer](https://www.typescriptlang.org/play?ssl=22&ssc=111&pln=21&pc=1#code/PQKgUABBCMAMBsEC0EAqAnAlgWwgGQFMAzAF0mSUqvICMBPCAQQDsSALAe2YYDEBXCAAoAAgENWRPgEoIAYmwEAJpj65ZJAtgAOAG1EakOzBvSid5crKsQAinwIBnEpi4WoASW07NBVhAAGGDiEpAA8qAB8-hAA7myYAMZsECSiANaOEOIQBAAeogkkEE5YzADmKXRaBFnMihDoBCR86MwOWRDMBDHFJKUVMcbJ7DVxxo5aBTU0BGWYzMzzFY3YHABuSgB0bhA8HOg5+V4EO-5nJA7kJFU1fThKEAC8aFjYISShAORQABIEOjoOBAAOr7HT1CCfCIQYDAQ7VQoPEhAmaQv4AoGg9DgqCfchnfw7aEANUw3QgXAgAHFjD8+DQAFwQNgkEhaBwM2EXJKbABWDk2+zKwDg8DAIGAYCloAgAH15QrFQqIABNDgtCAAYQ4ihqf0acqVRtlEAlUuu1RewWIHwAyocNHV2iUltDnva8o7FO1ogASADe8yIBAOACUAL7RAA+AQAOswA0GQxAI9G4yRE8xg2HIxAAPxWt420Kh6FM20AbilYBlxqNaEcRU1ogcmTrStNkpwWn2RX9EAAogBHPhmAA0g9yCKK4YgRHQHFwn2EFoISCSZm85UcwD4zh0DjxYFXEASLcyzwA2uQB1OCIVQsPRzpwq93l8SlCJ59PxEImObzvB8nzMV9rTCb5f2-X9-0A6dHxHUCgiLCCoDQqDIRggCoFveCQJfZD32+NDegOEiv0wvoSMhP9sMnPDEIIt9i2IiB41jIoiA4FFRAOCjPi4ni+NosAAF1qxrEBDXbeVdhaEYDltDR2WkmTO0k8hoVtNheJqOh1QOBwOB0PcXDaJkWTZDkuQcHl+UFdBhVFYBxAcGIQ00iBSXJIyTOcLgOWZVl2U5YBuTYPkBSFEUEGAXzTICzyAFl9hqTUdIBXwykcCzgussLbIi+yhXFSUwCAA)
- [other answer](https://tsch.js.org/106/solutions)
