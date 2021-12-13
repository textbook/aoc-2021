import { expect } from "chai";

import parse from "./parse";

describe("Transparent Origami parser", () => {
  it("splits the input into two distinct parts", () => {
    expect(parse("1,2\n\nfold along x=1")).to.deep.equal({
      dots: [
        [1, 2],
      ],
      folds: [
        { direction: "x", location: 1 },
      ],
    });
  });
});
