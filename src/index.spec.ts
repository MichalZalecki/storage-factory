import { sum } from ".";

describe("Sum", () => {
  it("adds two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
