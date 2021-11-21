---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: MyPick
order: 2
---

# MyPick

在之前的泛型工具中，我们介绍了`Pick`这个泛型工具。那么我们如何进行实现呢。

### 要求

Implement the built-in `Pick<T, K>` generic without using it.

Constructs a type by picking the set of properties `K` from `T`

### For example

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
```

### 解析

`Pick`从类型`T`中**挑选部分属性**`K`来构造类型。

所以这里面，我们是传入了两个泛型，同时，后一个泛型，应该是`T`的键值的联合类型.

故我们确定 T，和 K，故 K 会有限制`K extends keyof T`;

所以，得到以下的答案

### Answer

```ts
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};
```

### Tips

- [Answer](https://www.typescriptlang.org/play?ssl=37&ssc=3&pln=35&pc=1#code/PQKgUABBAsELQQAoEsDGBrS8491gRgJ4QCCAdgC4AWA9mcQGICuEAFAAICGlAZkwJQQAxAFNOAZ2JCmZZHWH4myADYU4yMlixCdEAIpMR4inM1QsASQC2AB2UirIyhGoiIilWo0QABigwAPAAqADQQANIAfD4QAOZOIgBOaBAA7sjUNEwUEEziGrEQGQB0WlAAwnTGiUyoFOIQnC6ENm5EEDZo6AUuVG7iIjk0PB2JNK2JJka+4TE8Y1a+QT5lEAw0iRAiAB6ctvarPkf1WBoUSTycqG5BNAAmNBAA3lhQJhT2AFwQ1QWvEHcjKhkjYTHRvr8yLF-qgaPtBiI7t98DQaPZuFgAL6rCgtG73GiIRIiABuyBEqQgAF4IABZQj+dDBAlhADk73srIgAB8IKzYfDzndWZFVrCyMYXATvrcHkTSeTKTSXlBVS4Ml8+eV0WQIGM4ayQv8oAK7AikRBLsoBkaoNioEcVuYoJEIAA1RUQeQAcQyAAkmPhvlQKBQbOJPsBgPVUFRigArcTFDaxYDQMAgYBgbOgCAAfQLhaLhYgAE0sptKoCIH6km5iw2CxBM9nca06QyusEwuEtttzmQ7g10CJCMMIEFXcqsABtEfEbzhAC6Mrno6XAG4wJiINmwLnGw2J0YcuUJNND8Xm1nkLYNjknhAAKIARyYnGUYSf21adQgO-mOE+XYNsRDgWMP3sKEjGAbIVHEVlWzxCBUHPBoaRnLBv1-CgAlfd9lDwn8RDqREAEYwnpRlmQeNkOREEVIkiW1n2Iuo8LfD8iJwxEACZKM7QJZRoOiNQYnk+VNewhUY5isCjCAQPEOAdhwlTEjGRIsCorthNEj5xN5fk4TNGSJNZDQSQ-ZBhTkpdszOC4rnxB5niweiIQoZIoSwQFxGBZBQVMTzvOhE0TOkxFkVRHVtwcygnOuVieLuMi3LeMSQr+bEwEcxJLiS7CSKFXj0vVAysp88LBSi9wYrETQcpzEB80vEtmEmPpNgAZXOcNWravNr33cAXQgbqqE4YkIDHJhNnENE4KqYNQ3DSNo38uNE2TRJU2gYBuHEVIkiwV0PQpH5FrBCUVrDCMoxjLakxTNNgAW5QlolU66Q2Nxykm5QoPiCMIBDO71sehNnt2jMszAIA)
- [others Answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A7+label%3Aanswer)
