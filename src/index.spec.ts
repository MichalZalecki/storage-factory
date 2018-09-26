import { storageFactory } from "./index";

describe("storageFactory", () => {
  describe("when storage is not supported", () => {
    const storage = storageFactory({} as Storage);

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
  });

  describe.skip("when storage is supported", () => {
    // then we are just fine 😅
  });
});
