---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Anyof
order: 22
---

# AnyOf

### 要求

Implement Python liked `any` function in the type system. A type takes the Array and returns `true` if any element of the Array is true. If the Array is empty, return `false`.

#### For example:

```ts
type Sample1 = AnyOf<[1, '', false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]>; // expected to be false.
```

#### cases

```ts
type cases = [
  Expect<
    Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>
  >,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<
    Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>
  >,
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
];
```

我们只需要把对应不符合的 case 找出来，然后排除即可。

### Answer

```ts
type Falsy = 0 | '' | false | [] | { [key: string]: never };

type AnyOf<T extends readonly any[]> = T[number] extends Falsy ? false : true;
```

### Tips

- [answer](https://www.typescriptlang.org/play?ssl=25&ssc=79&pln=23&pc=1#code/PQKgUABBCcAs0QLQQIIDsCeB5AZpJihR+ARhhGgK4A21EAFAAIDWGaApjpcwJQQDEAW3YATAJaVBAgIYAnWdIz58-VRACKldgGcALmID2aZVACSggA7V2wtLogAFDLoAWRiNTHNREAAbTMXwguNABjfXcxNAhXdhiMCzjtDD0bADpUeMSY6W9tGJc4lHlFCACRCFl2XUpZNHzfXVktILEcMswIdmtbewN22NQS8jF8pq0M0wHCoYUR-JsLXQwAGkrq2ujfHGlqbXZfNJMIADEDWS6AD2lLawAuY98n3W18ZeyAZRurdgBGCAAvKhMLgADwAbV+awARNC1js9uw1uCALprADeAF8UQA+ADcEGAwCuiXCPl0BggJDi43YRyg7ziX1u7AATIDgdgcBCAAwwuHBXb7ZFoiBY3EEokk9hkioUqlxBH7el+J7HHEQABqYnYAHcIO4AOJiXQACUoJDuEBcul0Fm0dyJL1CLjSACttGlzgBzYBwaBgEDAMAh0AQAD6kaj0ajEAAmgZahAAMIGERxU3sKoRmO58MQINgKWM05CuJAnkQAA+EAA5LXq4LEY3UY2sY2xRBwd4MFa9LIot6UVaOAA3LMQTFgEsnIXkCuN+uNpVxGutmvors9vtNQfDijsccXKfThJFEHcgAqV107DQInyVWkIiM1HIAQwqI1QMv4KogmpWQURvO8H1LPZyAAfibfYICtWk8RDIsQBzPNowgS8dHsZNpH2fI0JjAtgzESxznsTcAFEAEdKF2NYKMuUl7ExYJZAMKRa0YRlEBdXZrDQb0dGASh9D2WsQxLUJcJ0DlwXwBimNBajaOoUF0C5CEoTrW89FrNZaWRX5RXRNAbnYK1ax03Ra0xDFfgsqybNxfTmnYHEcRWeTGJlXQlJo3Y1IvTS1nreEyxFDFsQ8mJXPczyoAUny-JUwKNPBPltKwvSYKRLtjKilytDirzFOUgL1LBdKQuygy8si5yYqKjySqSsrVIq7kqrrbKV0M-KGtpYqEu88JkvKoKutCnKIrFUzhAcrKCsatzmuG0r-PaiaMqm3q6rFezMt0pbBtWiBEtGtrUsq7aevCvaTLMhajrsp7rOO2LTvO3zLo63lqrCxFkQgfropXIazpG76NquzqGrB5qUSQ5DUII-MTlqWILg+W97RRgiiOQ-ANQ+Fw5DiDBEwubQDGoETDHqK0bTtB0nW0F13U9H0-XgYAAm0XUsyJrUdX1anaYiBnrVte1HWAZ1XQ9L1ZF9f1gDFumjFeKANQAWXOOJk1J2g70Eh0peZ2X5Y5pXvUDYMwCAA)
- [other answer](https://tsch.js.org/949/answer)
