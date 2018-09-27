# storage-factory

This library is a tiny (1.1KB) wrapper for `localStorage` and `sessionStorage` because using storage directly is a bad idea. [That's why](https://michalzalecki.com/why-using-localStorage-directly-is-a-bad-idea).

**Warning**: object access (e.g. `localStorage.foo`) is not yet implemented 💥

## Usage

Somewhare in your project

```js
// storage.js
import { storageFactory } from "storage-factory";

export const local = storageFactory(localStorage);
export const session = storageFactory(sessionStorage);
```

When you need to use storage

```js
import * as storage from "./storage";

function login(token) {
  storage.local.setItem("token", token);
  // do your other login things
}
```

## Contribute

Do you want to contribute? Awesome! Please, create an issue first and tell me about it.
