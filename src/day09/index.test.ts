import { expect } from "chai";

import smokeBasin from ".";

describe("Smoke Basin", () => {
  it("calculates the product of the sizes of the three largest basins", () => {
    expect(smokeBasin(example)).to.equal(1_134);
  });
});

const example = `
2199943210
3987894921
9856789892
8767896789
9899965678
`.trim();
