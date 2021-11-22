---
jinav:
  title: Challenges
  path: /type-challenges
group:
  title: Base
  order: 1
title: Length of Tuple
order: 6
---

# Length of Tuple

### 要求

For given a tuple, you need create a generic `Length`, pick the length of the tuple

For example

```ts
type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT',
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
```

### 解析

我们直接去计算元组长度即可。

### Answer

```ts
type Length<T extends readonly any[]> = T['length'];
```

### Tips

- [Answer](https://www.typescriptlang.org/play?ssl=26&ssc=53&pln=26&pc=1#code/PQKgUABBCMAcEFoIBkCmA7A5gFwBYQHsAzCAFQFcAHAG1UkQUafoCMBPCAZwEt0CD0EABQABHnwEBKCAGJUAQ04cZ2KrXr0ZWiAEVyqTtm4CNUAGIEAThEzcAbhgjyIqmqgA0ENgXIR0qVAATCABjSwVsVCcbDFRLbhCIAAM0LDwkz0oEgGsXXCjaNPxiPKjXdSh6C2tUAA95AFs3U2SkpOxOemw2SjKDamcAXggAbQBySM4Bsc8xhoJA1GoIAGYZiDmFpYgADXXNxeWATTGAXS6eqM5KeRDUHYhh8bMAQWQAYQB5ADkIAE59q8Pj8IAAJACiLwAaidZgARABKLwA4j99gBlUgvBHo0EASQACvtQQBVACyL1+6IJL3e4LMyDxyNBpDOLW6vRc-XkqRw+GGvLwAB5JgMAHxQYDACB1XohSLBAAsF0511u90F-JQGD5QrVdx2EqlMtqcoVEAArPQ2kkWhKodxUAB3QiCZHcbCg8gsABcEFw2GwlE4PqlHRCuAAdAArTiRqyYYBwMAgYBgdOgCAAfRzubzuYgRx81neWzBcSi+arOYgqfTHKimqFpBNkXQgU4EHC8kCAmoHHk6DYI1OEuGpHGhT5ZwA3GBM9Wq2QDNgIO9FAZs4u87W09wmlZVwBvCDggCO5Hk1E84NNqHlEAAvhAiJYCA0NiIGwgI1epwZgHIIxqE4MZ0xCARDC5KYhlGCZuX2eZDlWRCtmWPZZiQ7YTlOJxOwg9BDDAAioP1e5HjgoEvl+AFZiokEIWhWENkRFE0VmTFsVxQliXJSkIGpWl6UZZlWVwxRQkg7B60uUIN07J56FvM0hXPS9qCFJsGxKUV5DFTxFTFfSlLveVVIvK9NJ1YVtJIMjDU8C0jPcehjS-TgEFle9sE8yw30segmyclzJWldzPNMny4n8wLrNwIUxnyahqAICAnSsahAjGYzznTecQC3bcazMchLDwOIBMiYNCqK3d8voCV0VweRwi8YsuAIaggOMQi-QDIMQzDTgIxjOMEyTWBgEHTgnTiBqIAdZ0Oq6oxIL6wNg1DYBwyjWN40sRM4GAThOu6yD5rJKwoneZrkp1Ax1oGradtG-bMBTNMwCAA)
- [others Answer](https://github.com/type-challenges/type-challenges/blob/master/questions/18-easy-tuple-length/README.md)
