import { expect } from "chai";

import process from "./domain";

describe("Hydrothermal Venture domain", () => {
  it("counts the overlaps", () => {
    expect(process([
      { from: [1, 0], to: [1, 2] },
      { from: [0, 1], to: [2, 1] },
    ])).to.equal(1);
  });

  it("ignores diagonals", () => {
    expect(process([
      { from: [0, 0], to: [2, 2] },
      { from: [0, 2], to: [2, 0] },
      { from: [0, 0], to: [0, 2] },
    ])).to.equal(0);
  });

  it("handles reversed coordinates", () => {
    expect(process([
      { from: [1, 2], to: [1, 0] },
      { from: [0, 1], to: [2, 1] },
    ])).to.equal(1);
    expect(process([
      { from: [1, 0], to: [1, 2] },
      { from: [2, 1], to: [0, 1] },
    ])).to.equal(1);
  });
});
