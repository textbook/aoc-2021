import { expect } from "chai";

import process from "./domain";

describe("Smoke Basin domain", () => {
  it("finds basins around a low point", () => {
    expect(process([[9, 1, 9], [1, 0, 1], [9, 1, 9]])).to.equal(5);
  });

  it("expands basins beyond the first layer", () => {
    expect(process([
      [9, 3, 2, 3, 9],
      [9, 9, 1, 9, 9],
      [2, 1, 0, 1, 2],
      [9, 9, 9, 9, 9],
    ])).to.equal(9);
  });
});
