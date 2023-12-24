---
nav:
  title: Challenges
  path: /type-challenges
group:
  title: Medium
  order: 2
title: Promisify
order: 20
---

# Promisify

### 要求

Implement a function `promisify(callbackFn)` that infer callbackFn to promise

For example

```ts
const getA = (
  a: number,
  b: number,
  callback: (err: any, res: { data: number }) => void,
) => {};

const getPromiseA = promisify(getA);
```

### Answer

```ts
type CallBackBaseType<Err = any, Res = any> = (err: Err, res: Res) => void;

type FunctionWithCallBackParams<
  Params extends any[] = [],
  CallBack extends CallBackBaseType = CallBackBaseType
> = [...Params, CallBack];

type FunctionWithCallBack<
  Params extends any[] = [],
  CallBack extends CallBackBaseType = CallBackBaseType
> = (...args: FunctionWithCallBackParams<Params, CallBack>) => void;

export const promisifySelf = <
  Params extends any[] = [],
  Err = any,
  Res = any,
  CallBack extends CallBackBaseType = CallBackBaseType
>(
  func: FunctionWithCallBack<Params, CallBackBaseType<Err, Res>>,
) => {
  return (...args: Params): Promise<Res> => {
    return new Promise<Res>((resolve, reject) => {
      const fn = ((err: Err, res: Res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }) as CallBack;

      func(...args, fn);
    });
  };
};
```

### Tip

- [answer](https://www.typescriptlang.org/play?#code/C4TwDgpgBAwghgGwQITgYwNaoM4QCrgQA8AogE5lQC8UcAdiADRQBKE21tDAfJwBQQKALijkyzMuxFtsASmq8AbgHsAlgBMA3AChtoSFABiAVzppgq5XQDqq4AAt4SVJgAKcMnAC22ItqhQ7p4+UBAAHsAQdOoc9CAA2gC6nEmM-rCIKOgYoRFRMRnO2Tj4hJxOWZglBJBpvDTxAHTNQd7YzBUuGIk6emUmZhZWtg6d2X4BrSHhkdGxDEkpiWkBY5i5swVrWHC4NdA029WEdfzNjR4A5tgiA+aWNnaOmV1Tvm8dL9nc8lRKalpdOEwMoyMAoGgrNhwWAyMovKpsKoAGYgTgTQIeNobfLzBLJBrLdJiThxFasdikhjk7Y4uaFSo7PZlQ5fKq7Uq1bTcPjpZGmNC3AVDR6jNkYIgfBldY6QUgUZgybjcNK-XgAb3SkmAxjIdCgfHOVxumOCchErjhCNwRCVCigmoCAW1uv1dAgAHdAlbEcQlXw+JJsMoEIoIBIIAArCDmNUO9JOiFQ8HI-U0AOCMgiMQRk0yOOOxNOlEGzPyQtFp2SaPmAQUWQ6SsBAC+oQQuHjTar7BDYcD7AbCaLzaHLfku2l2V6lf5ZkNzWNzFTg8TzZXUGbOk3ukhdGhUEuEGAAEF+Ok4CI6MYvAAjQTkm+X6938TpNCZG-ZER1rNcJhQIMRHVKB1DgYALygK9b0EDc4xUDRVXtdVt20Xd90PE9LXhX1OFhbCkVRPgMOPQdtGIrDrQgPgACZGAAZlkRoHCifsOD+AD2EaUDwNkbQgA)
