import { expect } from "chai";

import dive from ".";

describe("Dive!", () => {
  it("calculates the product of the new position and depth", () => {
    const example = "forward 5\ndown 5\nforward 8\nup 3\ndown 8\nforward 2";
    expect(dive(example)).to.equal(900);
  });
});
