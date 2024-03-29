# storage-factory

[![CircleCI](https://circleci.com/gh/MichalZalecki/storage-factory.svg?style=svg)](https://circleci.com/gh/MichalZalecki/storage-factory)

This library is a [tiny](https://bundlephobia.com/result?p=storage-factory) (414B) wrapper for `localStorage` and `sessionStorage` because using Storage directly is a bad idea. Here's the blogpost that explains [why is that](https://michalzalecki.com/why-using-localStorage-directly-is-a-bad-idea/).

**Warning**: object access (e.g. `localStorage.foo`) is not yet implemented 💥

## Usage

Somewhere in your project

```js
// storage.js
import { storageFactory } from "storage-factory";

export const local = storageFactory(() => localStorage);
export const session = storageFactory(() => sessionStorage);
```

When you need to use storage

```js
import * as storage from "./storage";

function login(token) {
  storage.local.setItem("token", token);
  // do your other login things
}
```

## Example

Run the example using [parcel](https://parceljs.org/)

```bash
npx parcel example/index.html
```

## Contribute

Do you want to contribute? Awesome! Please, create an issue first and tell me about it.
