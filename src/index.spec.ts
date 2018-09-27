import { storageFactory } from "./index";

describe("storageFactory", () => {
  let storage = storageFactory({} as Storage);

  beforeEach(() => {
    storage = storageFactory({} as Storage);
  });

  describe("when storage is not supported", () => {
    describe("setItem and getItem", () => {
      it("sets values and returns", () => {
        expect(storage.setItem("foo", "Foo")).toBeUndefined();
        expect(storage.getItem("foo")).toEqual("Foo");

        expect(storage.setItem("empty", "")).toBeUndefined();
        expect(storage.getItem("empty")).toEqual("");
      });

      it("converts values to strings", () => {
        // @ts-ignore
        expect(storage.setItem("one", 1)).toBeUndefined();
        expect(storage.getItem("one")).toEqual("1");

        // @ts-ignore
        expect(storage.setItem("null", null)).toBeUndefined();
        expect(storage.getItem("null")).toEqual("null");

        // @ts-ignore
        expect(storage.setItem("undefined", undefined)).toBeUndefined();
        expect(storage.getItem("undefined")).toEqual("undefined");
      });
    });
    describe("property: length", () => {
      it("is initialized at 0", () => {
        expect(storage.length).toEqual(0);
      });
      it("should increment with setItem", () => {
        storage.setItem("foo", "Foo");
        expect(storage.length).toEqual(1);
      });
      it("should reset to 0 when cleared", () => {
        storage.setItem("foo", "Foo");
        expect(storage.length).toEqual(1);
        storage.clear();
        expect(storage.length).toEqual(0);
      });
    });
  });

  describe("when storage is supported", () => {
    describe("property: length", () => {
      it("is initialized at 0", () => {
        expect(storage.length).toEqual(0);
      });
      it("should increment with setItem", () => {
        storage.setItem("foo", "Foo");
        expect(storage.length).toEqual(1);
      });
      it("should reset to 0 when cleared", () => {
        storage.setItem("foo", "Foo");
        expect(storage.length).toEqual(1);
        storage.clear();
        expect(storage.length).toEqual(0);
      });
    });
  });
});
