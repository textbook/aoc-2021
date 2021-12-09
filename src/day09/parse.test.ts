import { expect } from "chai";

import parse from "./parse";

describe("Smoke Basin parser", () => {
  it("creates a grid of numbers", () => {
    expect(parse("123\n456\n789")).to.deep.equal([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});
