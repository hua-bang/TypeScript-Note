---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Trim
order: 10
---

# Trim

### 要求

Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.

For example

```ts
type trimed = Trim<'  Hello World  '>; // expected to be 'Hello World'
```

### 解析

我们要判断类型是否有空格，如果有，则可推断出去空格的之外的类型，如果还有，则继续使用``Trim`,直到左边右边没有空格为止。

### Answer

```ts
type TrimLeft<S extends string> = S extends ` ${infer R}` | `\n${infer R}` | `\t${infer R}` ? TrimLeft<R> : S;
type TrimRight<S extends string> = S extends `${infer R} ` | `${infer R}\n` | `${infer R}\t` ? TrimRight<R> : S;
type Trim<S extends string> = TrimRight<TrimLeft<S>>
```

### tip

- [answer](https://www.typescriptlang.org/play?ssl=24&ssc=53&pln=22&pc=1#code/PQKgUABBCMAMAcEC0EAqAnAlgW0spBheARgJ4QCCAdgC4AWA9leQGICuEAFAAICGtAMzYBKCAGJsAUwAmmNtnE1J2AA4AbXkqRrMS9LzV48YkxACKbSQGcamJkagBJVWuWTaEAAYYcAHlQAfJ4QAO50mADGdBA0vADW1hD8EJIAHrwRNBA2WFQA5jGkKpJJVNIQ6JI0bOhUVkkQVJIh2TS5BSG60fQlYbrWKhklAugMCsQM9Cll9ZXYDABuMgB0DhAsDOgp6S6Sa54HNFZ4NEUlbTgyEAC8aFjYvgDkUAASkmpqDBAA6ptq5RBHgEIMBgNtipkrjQvsQSo83h8vr90P9HngDp41sCAGqYZoQJgQADiuhebGIAC4IHQaDQVFYKaCjlFlgArKzLTZ5YBweBgEDAMBC0AQAD64olkolEAAmgwahAAMIMaQlN6VMVSrWiiACoWnYp3HAAGUkAhovgAytslDNWu1gbdrWlbdJ6sEACQAb0wVAEki2ACUAL7BAA+XgAOlRvb7-UHQxAI55IzRY36AxAQ8EAPxG7Cm82+QPAqmWgDcYANJR82EDmDyNKtNvcbvtvryjogztSrvd6fjWeDXiTXgHmZD0fDY59GYTqdz+frjYtJYgZcr1fzzZdrfqOQ7Xdry6btcLFstAQCQrAIu1WrQ1iyit4VkS96lusFOBUmyyXogABRABHNgDAAGiA1IISyYcRjGQFuGrJAogMVx8msYA2FsNQrDRKszggCJX0SW4AG08EA6DJEyXwQLAtR-HuJ4ciBSDHlYq9wMo6jaPogwmL8Z5OPYziAm4qAqJgujQIE2snigRSRMBMSJKg6T+MY+SOLaRS2JUtogXEniNNkrTmOeRT7SswFxIM9AjLUqSaItTTBIeSyIGjVMIAEBgYV4LZU30x4-IChyuLAABdG9bxATUP3FdYah6LZLSUekEsSr84rwYFLToQKSlIeUtisBg1Gwuw6ipGk6QZJkrBZdlOXQbleWAfgrBCAM8ogXF8XKyrbCYBlqVpelGWAZk6DZDkuR5BBgCGqrRr6gBZTYSkVQqPncPJrFqiaGumprZparl+UFMAgA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A108+label%3Aanswer)
