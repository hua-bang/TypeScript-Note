---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: IsUnion
order: 24
---

# IsUnion

### 要求

Implement a type `IsUnion`, which takes an input type `T` and returns whether `T` resolves to a union type.

For example:

```
type case1 = IsUnion<string>  // false
type case2 = IsUnion<string|number>  // true
type case3 = IsUnion<[string|number]>  // false
```

### Answer

```ts
type IsUnion<T extends any, O = T> = T extends O
  ? [O] extends [T]
    ? false
    : true
  : never;
```

### Tips

- [answer](MAMCcB2CBaCBJAzgVQHYEsB7XSVFci0gIwE8JcBXAGyYgAoABKgU1wGNCAJwCUEAMQBbbgBN8DCRFKkxKiAEUG3TABciJKKXQSADk25Tc2iAEMI2mse4QABljx7nAGggB3ABb4fH521gDWWja4EPi4xgxW9o4uACrOkdIQgtzaDIK4mL5+2UWCKWlZmIRMAG4R2oQ2EAwExHYO3AB0SlAAYkIQ3AAe1iZmAFykBlBQzrPamJNtSXzWmNzQEAC8GDgtuAA8OoIxAOYAfFDAwBAAZtZMa4uJTitrAExbO+7Eh9rHuCcAD6MCQ8QQXCBXOyCTRPdoQV7cADMnzce32AG0jqdgfIwQBdCFQu4PbiLWbOboQC4ANXw3B8EFaAHF8NoABIMKhjCB+bTaYyYMZXeZBDoAK0wHSEJ2AcCQYBAwDAKtAEAA+pqtdqtRAAJqEXIQADChGkTnZ3CyGp1tvVECVKueX3RyQGg20vGkBWsuBo3gA8p9khdtm6hp7cN6IEGAPwQDEB-HuyPRjHJZPxklrCA8v6aXP0bi1QQqsBqu22iDJLRWY2rCKVnUO5X4ExCKwAbwgAFEAI4Me7eHuDRx8KwAX1ugkICgA5BxniggvczACtMB4vgHnOnfDEQVthjSCOx9p9v3B0x9mi9L9-udvNmnGczp4T6PuOOLwP7jfdne2IArioJWm+0IFq+75QKeX7npef63j8c7WHOgJzlQaFznwWHSHO4H5i+b4fmeP5Xv+3wHM05o3DEMi4iwgLVIQ+DSOh+HeIR1LETBn7fgh15IQcnbWDyQEnBOgIiTyIJghOBEwkR0G9nx8G-oJAE-NJEDiSBcngc+3HKbB-HqRR6JYn8OKyVahJPvcOZQaQUL1msBT+FaThuhUVS1AU9SNLgxAoM0ehLJ0JFwWRiGaQcum4MWYH2aSRmRaZ5FCfeOLNKEQU+LgBkOUpaVqRlsVZcBvo0IVKVObxpECeZgFWcBKEcbcRWpfiZbliANpNpqEA9Lk2glBAADKnqCv1A0tr1pAXONfjWNaNCGqUlRMFuxBCry-KCsKwCin4EpSjKcoIIgwC+pgPhWgtEB0gyOlVNt+Q8nyApCiKmBipK0qCLK8pXZtb0LFAFwALJCE4xrLSwvAnFoH37d9R2-Sd-0yoqypgEAA)
- [other answer](https://github.com/type-challenges/type-challenges/issues?q=label%3A1097+label%3Aanswer)
