---
nav:
  title: 进阶
  path: /advanced
group:
  title: 进阶
  order: 3
title: 索引类型
order: 12
---

# 字符串字面量类型

字符串字面量用来约束取值只能是某几个字符串中的一个。

```ts
type EventName = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.querySelector('hello'), 'scoll');
handleEvent(document.querySelector('hello'), 'dbclick');
```

上例，我们使用`type`定了一个字符串字面量类型`EventName`只能取其中的一种。

注意，类型别名与字符串字面量类型都是用`type`来定义。
