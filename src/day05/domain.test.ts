import { expect } from "chai";

import process from "./domain";

describe("Hydrothermal Venture domain", () => {
  it("counts the overlaps", () => {
    expect(process([
      { from: [1, 0], to: [1, 2] },
      { from: [0, 1], to: [2, 1] },
    ])).to.equal(1);
  });

  it("handles diagonals", () => {
    expect(process([
      { from: [0, 0], to: [2, 2] },
      { from: [0, 2], to: [2, 0] },
      { from: [0, 0], to: [0, 2] },
    ])).to.equal(3);
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

  it("handles reversed diagonals", () => {
    expect(process([
      { from: [2, 2], to: [0, 0] },
      { from: [0, 2], to: [2, 0] },
      { from: [0, 0], to: [0, 2] },
    ])).to.equal(3);
    expect(process([
      { from: [0, 0], to: [2, 2] },
      { from: [2, 0], to: [0, 2] },
      { from: [0, 0], to: [0, 2] },
    ])).to.equal(3);
  });
});
