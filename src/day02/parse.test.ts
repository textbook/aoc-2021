import { expect } from "chai";

import { Direction } from "./domain";
import parse from "./parse";

describe("Dive! parser", () => {
  it("converts from string to domain objects", () => {
    const example = "forward 5\ndown 5\nforward 8\nup 3\ndown 8\nforward 2";
    expect(parse(example)).to.deep.equal([
      { direction: Direction.FORWARD, distance: 5 },
      { direction: Direction.DOWN, distance: 5 },
      { direction: Direction.FORWARD, distance: 8 },
      { direction: Direction.UP, distance: 3 },
      { direction: Direction.DOWN, distance: 8 },
      { direction: Direction.FORWARD, distance: 2 },
    ]);
  });
});
