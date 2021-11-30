---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 1
title: Get Return Type
order: 1
---

# Get Rerturn Type

### 要求

Implement the built-in `ReturnType<T>` generic without using it.

For example

```ts
const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"
```

### 解析

在这里，我们使用条件语句即可。

### Answer

```ts
type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;
```

### Tips

- [Answer](https://www.typescriptlang.org/play?ssl=29&ssc=106&pln=29&pc=1#code/PQKgUABBBMELQQOIFMAuEBKaCuAnAdhACoCeADspPHDbVQEYkQCC+qAFgPb5MBi2EABQABAIZsAZtgCUEAMQBbZABMAltgXzV+Cclzz62VQBtUcbVSpzrEAIrZkAZ1SrulqAEkFZY8iVsIDmQIQxMzbQgAAyxUPHxSCgAeIgA+SIgAc2R8PVUAYwgAd1UOTmx0bEdtDIgSgDp3CF5OfWQAD1FvX0bI3tRHKjzuZwgJQgBeIQA3AC4Qzk5fcVlxlIgAbyooVQlp6S2oCFwcAggARgPkY0dKQ8Pj2NPoKgBfRtRyYNEISYBZEhicQSyESHwonF2YzWwGAEEcXGwxmUIWCACIzhAAD4wVFUXqRRprABqqmQhQg3CQJQAEth6HN2KhUGRHDMYf08uw6gArRx1FoZYDPEDAMBi0AQAD60plsplEAAmmV9ABhTjKYLUvTBOW66UQEVisHBf6AgjA5IQdqobLKRxCOqO0S4DKsiDiEgAbQAuis1h61pMiFa2jb8HaHU6XW6PT6-bUdHpMBAAPzJuY5KZ6ADcEDFYAlet1xCc6BVohu9qLcoNotU3ha6HWEAAogBHbCiYwAGlbbQoeXQL1GuE4mgA5MJjXBOV3fPgso5gOUTI5x0bPhA8hWnD8IJ6qC3+8hB4l253jIlnLhqr3TSd4p9EoJ49fqikP93D8fT+eu4kzmgABmO8AQfC0Xx+NZAKAj8Ui-KAjwHVAzw7f81S6doAHl6G5E9UFAs1HySSDVggDCfGw3D8LghC+2Q1CL0SAAFUcFFUG5EnoBYlnweCIHvR5iJBUi1lYscOJBbjFmQcQ4Pg78GL-S9RIgccJAWcdCPAp9VNU9TNNoxT8MY-8MWxaBtKEi1jQhUY+M-YzfzQy9zJgKygSfWzIXwM4jO9DcKHIsdKLaHC8MHPdNigUQ5k9QDewMzhxwCqB6GdOZx3YK5jGSqgyGOKYXwzDR6D0MA3jAIZ8BGMY90EWZ5hk5YoIgKZU3OCA5mearat8+rGuk3je0KOYPXjdq0wxbr8wLEApWreV+FwIJ9AAZRtFkFsWyVazmqg1jW9hnWCEhlThRYV2GBkmRZNlgA5LleX5F0hWAcRHEKcqoGJUlyUcS6XGuiBGWZVl2UcTkeT5AU3oB4wrpqg6BJaYIVWO4x50XG6wfux7oZejIwENMAgA)
- [Other Answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A2+label%3Aanswer)
