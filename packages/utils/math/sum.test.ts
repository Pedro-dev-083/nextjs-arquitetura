import { sum } from "./sum";

describe("sum()", () => {
  it("when receives 1 and 1, returns 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
  it("when receives 80 and 3, returns 83", () => {
    expect(sum(80, 3)).toBe(83);
  });
});
