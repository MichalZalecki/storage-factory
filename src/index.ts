export class factory {
  constructor(private storage: Storage) {}

  private inMemoryStorage: { [key: string]: string } = {};

  public get length() {
    if (this.isSupported()) {
      return this.storage.length;
    } else {
      return Object.keys(this.inMemoryStorage).length;
    }
  }

  public clear(): void {
    if (this.isSupported()) {
      this.storage.clear();
    } else {
      this.inMemoryStorage = {};
    }
  }

  public getItem(name: string): string | null {
    if (this.isSupported()) {
      return this.storage.getItem(name);
    }
    if (this.inMemoryStorage.hasOwnProperty(name)) {
      return this.inMemoryStorage[name];
    }
    return null;
  }

  public key(index: number): string | null {
    if (this.isSupported()) {
      return this.storage.key(index);
    } else {
      return Object.keys(this.inMemoryStorage)[index] || null;
    }
  }

  public removeItem(name: string): void {
    if (this.isSupported()) {
      this.storage.removeItem(name);
    } else {
      delete this.inMemoryStorage[name];
    }
  }

  public setItem(name: string, value: string): void {
    if (this.isSupported()) {
      this.storage.setItem(name, value);
    } else {
      this.inMemoryStorage[name] = String(value); // not everyone uses TypeScript
    }
  }

  private isSupported() {
    try {
      const testKey = "__some_random_key_you_are_not_going_to_use__";
      this.storage.setItem(testKey, testKey);
      this.storage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}

export function storageFactory(storage: Storage): Storage {
  return new factory(storage);
}