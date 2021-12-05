import { expect } from "chai";

import parse from "./parse";

describe("Hydrothermal Venture parse", () => {
  it("creates lines from the input", () => {
    expect(parse("1,2 -> 3,4\n5,6 -> 7,8")).to.deep.equal([
      { from: [1, 2], to: [3, 4] },
      { from: [5, 6], to: [7, 8] },
    ]);
  });
});
