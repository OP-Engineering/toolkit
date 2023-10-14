# OSP Toolkit

In every project I work I end up needing the same bunch of functions. This is just a repo which contains them so I can easily install them and import them.

## Constants

Some shorthand costants for React Native.

```ts
import { isIOS, isAndroid, ANDROID_VERSION, IOS_VERSION } from "osp-toolkit";
```

## Hooks

Although hooks are not my favorite, sometimes there are useful patterns.

```tsx
import { useBoolean } from "osp-toolkit";

function myComponent() {
  const [isFoo, fooOn, fooOff] = useBoolean();
}
```

## Invariant checks

Invariant checks allow to assure the state of your app, by default they crash on releases so you better have error tracking via Sentry or similar set up.

```ts
import { invariant, nullthrows } from "osp-toolkit";

invariant(myVar === "foo", "myVar does not match, this crashes");

nullthrows(myVar, "myVar is null, this is crashes");
```

## Sleep

A simple sleep function for async contexts

```ts
import { sleep } from "osp-toolkit";

async function foo() {
  await sleep(500);
}
```

## Debugging

I love logging to console, so there are a couple utilities inserted on the global namespace that make your logs a little easier to visually parse

```ts
marker(`1`) // Outputs 🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷 MARK ${i} 🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷🔷 to console

const myObj = {
  ...
  // some complex obj
}
debug(myObj) // Will pretty print an object to the RN console
```
