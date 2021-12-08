---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Replace All
order: 11
---

# Replace All

### 要求

Implement `ReplaceAll<S, From, To>` which replace the all the substring `From` with `To` in the given string `S`

For example

```ts
type replaced = ReplaceAll<'t y p e s', ' ', ''>; // expected to be 'types'
```

### 解析

我们去提取`From`左右两边的内容`Start`和`End`，把`From`改成`To`然后进行递归调用。

### Answer

```ts
type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends '' ?
  S :
  S extends `${infer Start}${From}${infer End}` ?
  `${ReplaceAll<Start, From, To>}${To}${ReplaceAll<End, From, To>}` :
  S;
```

### Tip

- [answer](https://www.typescriptlang.org/play?ssl=28&ssc=1&pln=21&pc=1#code/PQKgUABBCM0JwQLQQEoFMAOAbAhgYzQEEstIlELKyAjATwkIDsAXACwHtH6AxAVwgAUAARwsAZrwCUEAMQBbNABMAlrzmzmaOdhybEWZZoBOOUlDIzLEAIq80AZ2bLOZMgEltWLWhYQABug6BMRYADwAygA0ENxG7HLRACrsAHx+EADurMp4rBBGmLgEEGxoEKZYJaxl9rzUjkbKjADm-rHx6RmGeX7J6U1VZc3KAG4+EA1NrX7hfq5Q3OxGEGgAHjieaPP+fn7M9mTMtBhlBUFKEAC8qIX4RCShAOTMEPQYKxOP0Y8QX7+PKQgwGAK1WJzwmkUJXYEGoZWexwcjzIuzm5iggIAaso0BkIJwIABxQwACTqAC4IKxmMwMPZycD9rkAHQAK3szKWzWAsDgYBAwDAQtAEAA+uKJZKJRAAJrsXjLADC7EUZRJaAKYql2tFEAFQqOJxu5xCEVBmkYinsE2YjRa0Xa6jWFqtNrtzSSMOdPldkxagOuZEd5p91sePwA-BAyOEIJSYyHLda-AASADeTTEGog4WYOCMzAAvunHcWM4ws8sAKKWwvpCMo9OBIr3MK5-PMB1xBIQZIpMvJMvNu6mmuKLvxT399LkmMAbiFYBFOu1vYcL0VOHsDi1K+l+uU2iWLzTECrAEdeKZolWwWgIRBCxAxN3fkJDWhELkKj5mg5gLwThYPYyJgB+EB4FuO7XAA2mQt7gswoQXleYTDsEDyPGI7DsNQ+Z-I8eFGAR2HsAC3ykaRAIpJE8F3hCyGXqYoToa2TykURBF4c0JE4eRvwcfhKQ0XRiGMahLG3BhYRYThRGcd8CkCXxNHKewlEqSJUAIfeSEocxrGms8rwQO8NQEb83z8QiJwgcJtHafRelMWhUlsbJuH5kp4YUSpvmeUYnH2aJuniQZblGURVGKfh-nWRpZHBY5Yn6a5JqYYJRiZQRuFcfFAXYUFWlnk5YVpS2RmFThWW4ewsW-NQZGKfljU1UVDklSlLmSelMkEf1qnhsFAC6i5LiAu57rqfAFtUyy5pg1pTfugqgGQgLhKw+ZlLQ8rLPY7BYIBziMPSVI0nSDLAEyrBshyXI8vAwCiPYGQautEDYriEyHcdnBndStL0oy9gsuynJGNyvLAAdR1OP9H0ALJLGUipbSQv4OJSgOXSDYP3ZD-KCmAQA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A119+label%3Aanswer)
