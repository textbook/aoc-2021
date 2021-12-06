import { expect } from "chai";

import parse from "./parse";

describe("Lanternfish parser", () => {
  it("puts each fish into its age bucket", () => {
    expect(parse("1,2,4")).to.deep.equal([0, 1, 1, 0, 1, 0, 0, 0, 0]);
  });

  it("puts multiple fish into the same bucket", () => {
    expect(parse("1,2,4,1,3,7,7")).to.deep.equal([0, 2, 1, 1, 1, 0, 0, 2, 0]);
  });
});
