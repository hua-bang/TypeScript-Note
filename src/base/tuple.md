---
nav:
  title: 基础
  path: /base
group:
  title: 基础
  order: 2
title: Tuple元组
order: 2
---

# 元组

**众所周知，数组一般又同一类的值组成，但我们想用数组存储不同类型的值，这时候我们就可以使用元组。**JS 中是没有元组的概念的，是 TS 中特有的类型，类似于数组。

数组合并了相同类型的对象，而元组合并了不同类型的对象。

## 基础用法

元组可以定义具有有限数量的未命名属性的类型，每一个属性关联一个类型。

举个例子

```ts
type tupluType: [string, number];
let t:tupluType = ['tim', 25];
```

赋值的时候，需要严格按照类型的定义

```TS
type tupluType: [string, number];
let t:tupluType = ['tim', 25];
t[0] = 'hug'
t[1] = 18
t[1] = 'hua'	// error
```

初始化赋值时必须完整

```TS
t = ['hug', 19]
t = ['hug']	// error
```

## 越界元素

当添加越界的元素，会限制为每个类型的联合类型

```ts
let tom: [string, number] = ['Tome', 25];
tom.push('male');
tom.push(true); // error
```

---

**资料参考：**

- [一份不可多得的 TS 学习指南（1.8W 字）](https://juejin.cn/post/6872111128135073806)
- [Tuple](https://tsejx.github.io/typescript-guidebook/syntax/basics/tuple)
