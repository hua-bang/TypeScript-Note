---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: Push
order: 11
---# Push

### 要求

Implement the generic version of `Array.push`

For example

```ts
type Result = Push<[1, 2], '3'>; // [1, 2, '3']
```

### 解析

我们知道，数组中`push`的用法，这里这道题是让我们实现类型的`push`,可以参考之前的`concat`

### Answer

```ts
type Push<T extends any[], U> = [...T, U];
```

### Tips

- [Answer](https://www.typescriptlang.org/play?#code/PQKgUABBDMAMCsB2CBaCAFArgZwBaVRSOIICMBPCAKwEsBDAOwHM9GIAKAAVsZd0YC2AUwAudAJQQAxELrZKUugCcldcgQJStEAIqYh2ETQD2DDVACSAgA4AbIcIYiII3EIhMhDIUpoBjCAA3H2wTBghjADMIAAM4gEEVNQA6axxcOJjzCAAxYyUIIQAPOht7bMyRcmsDP19rEQIqmogAJQNMW2cAXgx0gB4AbQBGABoIACYAXXGAcmhZgD4IYGAIEfGJuYWpgkzs5YA1GiEAdwjwgHEaEQAJTFIALghcERFrbEfVkWw-XGSqNhkvkmMA4EgwCBgGAYaAIAB9RFI5FIiAATWMmAKAGFjAATdy3HzuFGkxEQKEw5ruLB4foAFUKRREXjx2AgjHIgxmEAAqsteoMIMkRfTxryILtYSAEWSURB6QZnNi5AZZXLUZSaDZ8s4AN4QACiAEdMHRbONDUUan4RJbrUJbTlzdghOMAHLGEQms22CAAXwgkSUxgEEFmnGpKD+5vszAMwEwRls2FmVOq7j8qvZgoIVptIn6PvN-VpuCGPOGi3GIymi2reYdtqLppLZaGY0mPPmSxrna24Z29dGjYLLd9pYGg1mw1mm22sx5pGMxnsjGr6xnc8mC-Gy9XsgYdYbUul6o18NyWNcPggAGUWR9zxqKdDQARlnf+Ep3ORMQVsFXJMwk+F43g+L5gB+P4ASBEEwQQRBgEYbBTh8D8IGOM4IEA2xgNMUDXneT5vl+f5AWBJRQXBJDcPwhhsAwgBZfJ3GxfhbDjTxCPAkioLI2DKKYSFoTAIA)
- [Other Answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A3057+label%3Aanswer)
