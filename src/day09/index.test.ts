import { expect } from "chai";

import smokeBasin from ".";

describe("Smoke Basin", () => {
  it("calculates the sum of the risk levels of all low points on the heightmap", () => {
    expect(smokeBasin(example)).to.equal(15);
  });
});

const example = `
2199943210
3987894921
9856789892
8767896789
9899965678
`.trim();
