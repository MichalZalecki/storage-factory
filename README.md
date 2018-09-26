# storage-factory

This library is a tiny (1.1KB) wrapper for `localStorage` and `sessionStorage` because using storage directly is a bad idea. [That's why](https://michalzalecki.com/why-using-localStorage-directly-is-a-bad-idea).

## Usage

Somewhare in your project

```js
// storage.js
import { StorageFactory } from "storage-factory";

export const local = new StorageFactory(localStorage);
export const session = new StorageFactory(sessionStorage);
```

When you need to use storage

```js
import * as storage from "./storage";

function login(token) {
  storage.local.setItem("token", token);
  // do your other login things
}
```
