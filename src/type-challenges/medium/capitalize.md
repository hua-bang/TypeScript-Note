---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Capitalize
order: 12
---

# Capitalize

### 要求

Implement `Capitalize<T>` which converts the first letter of a string to uppercase and leave the rest as-is.

For example

```ts
type capitalized = Capitalize<'hello world'>; // expected to be 'Hello world'
```

### 解析

这里我们只需要把首字母大写即可

```ts
Uppercase<"hello">
```

### answer

```ts
type Capitalize<S extends string> =  S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}`:S
```

### tips

- [answer](https://www.typescriptlang.org/play?ssl=23&ssc=1&pln=22&pc=1#code/PQKgsAUABFCMsAYoFooGECGAHAlgFwwBscAvAU0hmWpuUqgCMBPKAQQDs8ALAe3ZYBiAVygAKAAIZOAMyEBKKAGIAtmQAmOIcqV4yyrIQy7kxXQCci9eoptQAikLIBnPDj5XoUAJL7CespxQAAaYuATE5AA8ACoAfEFQAO5cOADGXFCpfABuZGZ4TlDcZFDSOGYuUH545lA80lAYUC5mOOwA5kU8UEJYWHmpGE4lUmpVZBi5RVwlZs54jU7IOE4AdB4wAjxmUGQAHhi+FJ70QWcF9HhM-ZnY+ESk6lAAvOh34Y+RAOQzhITdiW2hDUX1iUGAwF2e36qV0Yzw3QYJS+AAkyH8AUCQaczhsoGCAGo4MiJOrsKAAcXwKKEDAAXFAuDUsE46RCCulVgArNbbdrAeAISAgYCQMUQUBQAD6MtlctlUAAmjwhDs0Dw1CU0XNpfK9VKoCLxVcbqF7hEyJEAMpQ3TsNSFFptdpg15QG37O0O4IAEgA3m1pHkoAJyi4AL7+wPBgBK83DCQA-L6-QBVPoDIaW0MVPCxSN+uMRoJ0q3iyX6vVQaLzN7DQqV+WG0UQHD6bYLP1QACiAEchEQADQ96FkWFQcOlMw8bRfcQmsjIdJEPwdZzAISuQhOL7G64lQb1l5QADa9G7o9hkT7A8IkTNHyiX2kPB4DAwZlBw6+WzfH9BsSDuel54Ne-ZEPe7wPE+AgAPKwQAQqwMZflAP7wUhKGxIBwEwqBN4QQ+0GWs+r6MP+gFob+5GfthQGeBeeFgbekFhMR3yoV8AH0TAjFjvh4F3kRFrfBgnGsNxuH8cxhFQSJXwMJxCGSQxIEyUJcmfF8qScWgKm8WpBEaWx8kgpRXwACL6SOTFGax5paWQnHdtZfFXnZwladInECK5hmCfZj4ke0nEUn5tkBZ5T5cJxKLhdJHmaU+OCcV48XuZFSUkVynEAFLpQJLFRSRADWnEANIFepgXsV8hCcQAMlViUmVpyicQAss1mWtU+7CcQAct1RVZd8PCcbBw2yb1JFYJxAAKU3GQ5T69pxdhLTV8m0d+WE4apEUjTN3w7uZVqbcV3x4Jx0QXaNXxCJxqZ3cdXzZJxBIvStJGJJxADqX1Bd8eycQAGoDtVMJxioQ-JJCcQAWipAC64rliAuqNjKIaqsUOxWroLKY1jzaQKA9BglaXAfiUTAqjsTg8IQm5uOwrKMsyrLsk4nI8qsfICogwBSE4iR5BTUBEiSzRMyzfDs0yeAsmywAclw3K8mY-KCsAjPM648sSx12wlGg1N-AE7TOAyivK9zvOa+0wotpAQA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A110+label%3Aanswer)
