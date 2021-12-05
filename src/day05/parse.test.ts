import { expect } from "chai";

import parse from "./parse";

describe("Hydrothermal Venture parse", () => {
  it("creates lines of points from the input", () => {
    const lines = parse("1,2 -> 3,4\n7,8 -> 5,6\n5,8 -> 7,6");
    expect(lines).to.deep.equalInAnyOrder([
      [[1, 2], [2, 3], [3, 4]],
      [[5, 6], [6, 7], [7, 8]],
      [[5, 8], [6, 7], [7, 6]],
    ]);
  });
});
