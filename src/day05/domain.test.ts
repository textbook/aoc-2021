import { expect } from "chai";

import process from "./domain";

describe("Hydrothermal Venture domain", () => {
  it("counts the overlaps", () => {
    expect(process([
      [[1, 0], [1, 1], [1, 2]],
      [[0, 1], [1, 1], [2, 1]],
    ])).to.equal(1);
  });

  it("handles diagonals", () => {
    expect(process([
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
      [[0, 0], [1, 1], [0, 2]],
    ])).to.equal(3);
  });
});
