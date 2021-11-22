---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: Exclude
order: 7
---

# Exclude

### 要求

Implement the built-in Exclude<T, U>

> Exclude from T those types that are assignable to U

For example

```ts
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'

type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // 'c'

type T2 = Exclude<string | number | (() => void), Function>;
// string | number
```

### 解析

我们知道`exclude`的用法，剔除相关的字段。

那我们这里如何实现呢？我们可以使用条件类型。

### Answer

```ts
type MyExclude<T, U> = T extends U ? never : T;
```

### Tips

- [Answer](https://www.typescriptlang.org/play?ssl=17&ssc=48&pln=16&pc=1#code/PQKgUABBAsDMEFoIFEAeBjANgVwCYFNJEETSiAjATwgC0ALfRgOwHMIAKAAQC8HmWAlBADE+AIYBnasPLYAlpgAuCOUyJFhmiAEVs+CYrkB7NVCIBJALYAHTPkv4miiIoYRZC5apQYcBADwAKgA0EACqAHxEET5YePgQAGYATkaWEIEudEYSCYqU1vpZYs5iyQmSEnIsTGLkdi5G4epQMQBqcvgA7hAmEADicooAEtjkAFwQdIqK1hLjwMCKEuh0AHQAVhJrRskswHBgIMBgp6AQAPpX1zfXEACaRtjJEADCRgQQw-jll7f-Fwgx1O+UKEAAspQ0HEAiFwjEALwZCD4VCKRy4CThCAAfggTHwADcfhBJoEANynMDnAH-DL6ZyvSRFWm3IEnOQ2XbOADeKAAjtgxJhQmhCuhnABfJKpdIAck4oPwCFWwrsrH0wGwhkwEjlIIKCXQzKxSIA2kQoGL8BL-MhBcL-JDoX58P4AERid0QAA+EHd5G9fvd6HdoU97oiot88Q9Xt9-sDCZDYf9XoiGeClp84sUdodmCdUJjAQjyaTwdD4fjwcDUdirrjQcTzZT1dbdcz2ettvtQsLzpLboMyVUbD9TGwlnIJL97HYQgRMUJRjkuAEoQAYtgmBLjEx6y7YyOxwnJ9PZxwFxAlxAV2uNxBt7vDCYM1GwABdKnUkB-VlXE+zyuCSADK6JzP+AHsr+0QQKBdBlAklBPC8EhGDgr5MPMUwzHMCxLCs6xbDsewHLAwBiNhXQ-HBHTdBA6GYfuOHTLM8yLMsqybNsuz7HAwBMdqLFweCuwJK8iGYOqLD6JMbH4ZxRE8aRLBHCcYBAA)
- [others Answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A43+label%3Aanswer)
