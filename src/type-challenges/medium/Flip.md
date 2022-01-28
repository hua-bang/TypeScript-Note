---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Flip
order: 33
---

### Flip

Implement the type of `just-flip-object`.

Examples:

```
Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
```

No need to support nested objects and values which cannot be object keys such as arrays

### Answer

```ts
type Flip<T extends {}> = {
  [K in keyof T as T[K] extends PropertyKey ? T[K] : T[K] extends boolean ? `${T[K]}` : never ]: K
}
```

### Tips

- [answer](https://www.typescriptlang.org/play?#code/PQKgUABBAsCMDsBOCBaCAxANgSwA6VRSOIICMBPDAQwCcALKgOwgGkqAXBgdysyogAUAAQDWHbryoBKCAGIAtgFMAJtgCu8uQHtSAK0UBjdgQKyzEAIprFAZ3bYtjE1ACS83JkVLG7CJ0V+5LgBWgBmEAAGump2KKE4uCg6+kYRAHQQAKIAHlTunjYAXM6RERHsQbYGNHjGUFh4ADwA3hBUhRAARNmdADQQpB2d5H0QBkMAXp0QAL4AfADcEMDAEM3ZHQDkVJv95FukuxATWwabMwQNuC1tHbD9gxAATP3jEADMs4vLq82wWzt+k8Dkd3qdzgR4k1Wu0IKFeDZFA8OuwaNYvksVmt4ZhEQCjqjrCCLlAyhESgA5LQQRiKFR+ak2NS4XBaGi+Wl2enJQzsGxtRjKCAAN141n5XDo2AMdDGTEYWl8pBCel5EBEinI-KZMra-NoNCoWpKcwgADVsIouBBHBAAOLYdgACTUjzo7HYuCKKz5MrSuhsaTZAHNgHAkGAQMAwDHQBAAPqJpPJpMQACaWjUNAgAGEtMoAk7FDQAimy4mIFGYxVghgEo0ACoQRTZdiKQX85rzCAAXjWBAA2iwINhmBryGEIE2qPyG0OALrN1vt5T8gAKNC0wXZ5BYmogAH4pwuIB05yxFy22x2BlotJ4mIfIgASZrn+czCKnmmKYXFiDzh0LBgBcsYgAm5YplOti+DmM62BBkGplW2DuGyvitJkACOai8P0OTBEY-RUuw2G4ZgsxwpumibEINaKCgMq8J4jDBrYwBqPYuKbNWlRyoi-J9gOBAEbyjRkbwLSwpsuDYOc-RXC0sn4vMcxzL0InZIR7CNCREmYC0jwyXJMwKfWzTKRA2znGp6madp4k4ZJzTvGksDQFsskEmiigHHemDyXW0KWa57kPP5KI+apdlQKJRiOeRLSipgwJWbgm64E8RzJZ5GWBYpFkZVsyVHOlW6pZsyVZdFGnzjGYGIUh8YYFm-jZgAym2XqNUhlbRqABCmu1DAlhAE5ZhANj3pxDiMEUEDup63rAL6dD+oGIZhggiDAEwNhcMWg3mpa1pTZgM2OPNi1eoUPo2H6AZBjQobhjtZ0XXNR0ALJsgEOYMJgLFsVdHo3XdD0bc9kbRmAQA)
- [Flip](https://github.com/type-challenges/type-challenges/issues?q=label%3A4179+label%3Aanswer)
