---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Trunc
order: 32
---

# Trunc

## 要求

Implement the type version of `Math.trunc`, which takes string or number and returns the integer part of a number by removing any fractional digits.

For example:

```ts
type A = Trunc<12.34>; // 12
```

## 解析

我们需要使用条件类型判断即可。

## Answer

```ts
type Trunc<T extends string | number> = `${T}` extends `${infer Left}.${string}` ? Left : `${T}`;
```

## Tips

- [Answer](https://www.typescriptlang.org/play?ssl=22&ssc=98&pln=21&pc=1#code/PQKgUABBCsCMAsAGCBaCAVATgVwHYGNJUUTSiAjATwgCsBLAQ1wHMBnACyYgAoABepm064AtgFMALgwCUEAMTiAJnWwj5EsSIAOAGwYaUOuhswMdRInKsQAitjGsJdAPa4LUAJLadmsbgkQEuxigZRaIQBuYpisLrgQzgBmEAAGaQCy+uwAdBI4BGkpADQQAO7sdPjsgQwA1g4Qjph0LAmYELiq5NEQTIoQmJLYmLisgcEQLRrMPVoMmAFJvR1dPVQDms4RLcy9uNSJpvhOrmYQyszGrNnuEABizu1iAB4M3mIAXLeFEmEO+M0tBIiL9whAAIIQAC8GHy+AAPLAAEzZADM8AAfBBgMAIMiiIVbliAGp0MSlBLxADixgAEthyB8IOwJBItKwPjiJKwqtkaNdHsxgHAkGAQMAwJLQBAAPpy+UK+UQACazmGEAAws5FCFadEQorDXKIOLJaCQlg8Aj0BAXhpcIoxk0dhAAD4rETdTBYmEpAAkAG90ABfFK2572x2pQMtRI9AAyYkSEmD2UDzpYoYgAH4IInkxAmf6g6GANySsDSo2GjAOAIahisBrVxUmiV0bSPAIBiAAUQAjtgzCVe89wscR2OxMc7mYmyUAHLOCQDoc6CDBiCHZxqADkvHNKCqZh8LAcwGwTh0rF3Zr+EHwjYaMIA2kRR+OJPDV2Z4ZaCPCiDZLAGIlLuiC7hioHvlOxzfoOv7-gisDZEi6KgRAu6wJB0FQB+05fj+Oh-nCiIoui0AYVhSI4UUMGfvBa4kVa8IoNAwFUWxtH0QRjGIaRWGoeikFgdhUF0XhsGEQhxFIfCu4oLAQFofAImYYpEHiTxcFEcxAFKVRSncQAuhWlYgLKLZKncwxBD0ADKGjspZVkym25lEFi9mcIMECUGq7SsM4OiXnEHLMqy7KcsA3K8vy2SCsKCCIMATCsKU0SeRApLko0wWha44UsmyHJcjyOTxYlIopUFIUnKMWXpI8IQapwOinjMRWRaVMXlXyAqYMwYoSmAQA)
- [Other Answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A5140+label%3Aanswer)
