---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Append to object
order: 18
---

# Append to object

### 要求

Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field

#### For example

```ts
type Test = { id: '1' };
type Result = AppendToObject<Test, 'value', 4>; // expected to be { id: '1', value: 4 }
```

#### cases

```ts
import { Equal, Expect } from '@type-challenges/utils';

type test1 = {
  key: 'cat';
  value: 'green';
};

type testExpect1 = {
  key: 'cat';
  value: 'green';
  home: boolean;
};

type test2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
};

type testExpect2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
  home: 1;
};

type test3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
};

type testExpect3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
  isMotherRussia: false | undefined;
};

type cases = [
  Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
  Expect<
    Equal<
      AppendToObject<test3, 'isMotherRussia', false | undefined>,
      testExpect3
    >
  >,
];
```

### 解析

这里我们使用索引签名和条件类型结合即可。

```ts
type AppendToObject<T extends object, U extends string, V> = {
  [key in keyof T | U]: key extends keyof T ? T[key] : V;
};
```

### answer

```ts
type AppendToObject<T extends object, U extends string, V> = {
  [key in keyof T | U]: key extends keyof T ? T[key] : V;
};
```

### tip

- [answer](https://www.typescriptlang.org/play?ssl=25&ssc=2&pln=23&pc=1#code/PQKgsAUABFCsBMB2KBaKBBADpgpgOwBMoAXAeylICMArHAY2MhhRdZSakoE8NCAnHDwDSfAIYBnUgDdxAax4AKAAKUBAZgAMssQDYAnHXEBKKAGIAtjgIBLAK7mzVWgxSzB4jh1PeoARVs44sTWpHie0FAAkuaYADY4lnjEUKIkXLgkABaiyaIEBOIpUHg4AO5QAGbWOLFEZFk4UNZJOHwVonQ4AHRQACqZjcTpg6JuhcQDWQKNonwA5vb4xOI9-Y2ktsSYm1DimRu1nDN4FDT0yaXWEw3FZZXVteEwAGKkfFA4AB6iMfFPUAADIHLDhDDK9QLJAC8UAA3k0CAAuKAAcgAjCioABfUHDKAAJUCtli0Iw2HwBF6pAA8mcGAAeCFBAA0qKkoliARRrIALAA+KDAYAfT64BhWEjkSiNeHWJGojGs9mcnDInnYjhAgH-AUANWq5VCUAA4lcABK2SjIzLELbiRFC5Z0TJdagrN5zYAIRCQEDASABiCgKAAfTD4Yj4agAE0Nu8AMKkAiNM2tRqRjNhqB+wNgxpYXCEKm05zERki4gUwpOc6sgCqFaru2IfGac1ZuoFMNhHAA2m4eM0oAPSBU+lAAD5QOsAXWRA8bhEKI7HvSgAH4+v3BDOoMjdQBuSA4iCByDBzMZvqQqDxiSBUOXiPZ-0QawxN7JeEAUQAjrYOVZb9RXObFKj4UgHBRJQ8xQZ0OXiPA5kCYBNmsWJxBRXM8UrII0SgbsOAHZEUToHIsIiZUAhIuZpjwCiT2wjJcOIYCxWIfDCIiYjUTI4gKJgKjVVRWicHwASoH2SxkUoUhSHiUQwggRiIDzEhIXgAi4SIwQSIIUg5kxKdbEIHAqhKAgOCEkjSkyK4cAk8QTORFsAmPJjBkhNjzk0riYB4lF9MMycoBM5NzKsKyOWo1FbPsxznJIPg3IiKThLRdzT1UnDITULSe243TeNIUoJOs1EuBqWISoSvBkXaDCcEyyA1JY7yGDyvzhyK0iaqilUSMq2JqtKjgnLqyoOXEJqImscQAFlSAmVp8VscRxGsUR6qmxpjNMiLLOUjyoDI6bChhXsOHass-wA2J6QLClizpMsWLRVkUTS7lODkhS8D5Vk2pAhg0T5AGruBm7-w5B7ySLGkXvpFj4A+r7WVBwGvMh+AweZCH2PpW6Yce+GS3OJHco+ubFuWvhVvWzbvoa6aQrCszmisAH1KCa61FxyAZzPLKLyfKNnlsPhaagABlStMEKUWoxzINwAiAVpeyAQoC4ONdnktDQntSTbXlh1gCdF03S6D0vSQYBFPEUpWg4PUDT1zlgkN60TftR1xGdV13XmW3EGASQPZCPAPDVqBFq1+NsmG-BkKNm07TNi3A+t+ZfVfSAgA)
- [other answer](https://tsch.js.org/527/solutions)
