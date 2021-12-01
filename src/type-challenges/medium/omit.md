---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Omit
order: 2
---

# Omit

### 要求

Implement the built-in `Omit<T, K>` generic without using it.

Constructs a type by picking all properties from `T` and then removing `K`

For example

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false,
};
```

### 解析

我们只需要去掉我们选中的字段即可。

### Answer

```ts
type MyOmit<T, K extends keyof T> = {
  [key in Exclude<keyof T, K>]: T[key];
};
```

### tip

- [Answer](https://www.typescriptlang.org/play?#code/PQKgUABBDMELQQPIFsCWAXS8491gRgJ4QCCAdugBYD2ZxAYgK4QAUAAgIYUBmjAlBADEyAKYATVI2RDGZVLSH5GqADbo4qMliyDdEAIqMRAZ3TytULAElkABxUjRFCFREQlq9ZogADFBgAeABUAGggAaQA+HwgAcxEyEQAnVABjCAB3DBpGdAhGY01YiAwAOm0oAGFaUyTGVPRjCA4XQls3IghbNIBrIuaVFS6k6naksxMIbhHpHyCYrjEXSgSIJMdqADd+n3CfCoh6aiSIEQAPDjsHA59bxqxNdGTuDlS3IOoxaggAbywoMzoBwALggtSK-wgYhMqRStjMtFB4LIsUhqWoVxETzEoPw1GoDi4WAAvgd0G13p9qAAFdbbEQZCAAXggAFlCP50MEqWEAOTQ4yw1Dw8y8iAAHwgvMBDl5kQO6LIphcVNBHy+tJE9MZLL+UCg6Mx2NBLxUxhEIRJWFu+0sUEiEAAaqgGRAFABxDAACUY+FBlHQ6FsxmBwGAjVSlFKACtjKVjrFgNAwCBgGB06AIAB9HO5vO5iAATWojBO1WhEC9yTc+drOYgqfT5PabI5aC5oQipzOTzIYiaPREhGo3AgQQduqwAG1B8RvABRM6pFSMaEBWcjsdhKIAXTVM6HO4A3GBSRmQNm6-mxyY8pUOOamlfr43UHZjnkfhB5wBHRgcFQwkXdoGggYkphmKU2GbEQ4EjACHBRExgFyVRjF5JsKQgVIH0mFkpywYCRAaAJf3-FRSLOEDsQARjCdlOW5L4+QFIURVoOVIkiS0oCIkiyIAyjqPEAAmei20CdVqBYmE4QRMgxUlXlDXsLFxE4+Ud3TR5nleSkvl+LAZREJF0BSFEsFYuTzFM8zUQNDFVONdx8UJLQzx0pIXjeb8qOI2jDIBDAQTBMyIQco1xFxVyRCJDyKF0ny+OxETApcYKTNCuzT3Tc9L2fesmHGFYTgAZSeYN8oKhs01ALAHVKygOHWCBh1LMECVQmp-UDYNQ3DQUo1jeMkkTaBgC4YwMmSeqnRdRljE6+SQwgAMgxDMMIyGuMEyTYBFpXZbZtZY43EqJrBgSeIVrWvrNsGmMdtGlM0zAIA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A3+label%3Aanswer)
