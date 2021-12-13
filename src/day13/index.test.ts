import { expect } from "chai";

import transparentOrigami from ".";

describe("Transparent Origami", () => {
  it("shows visible dots after all folds", () => {
    expect(transparentOrigami(example)).to.equal("xxxxx\nx   x\nx   x\nx   x\nxxxxx");
  });
});

const example = `
6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5
`.trim();
