import { expect } from "chai";
import process, { Direction } from "./domain";

describe("Dive! domain", () => {
  it("returns 0 for the origin", () => {
    expect(process([])).to.equal(0);
  });

  it("can apply movements", () => {
    expect(process([
      { direction: Direction.UP, distance: 3 },
      { direction: Direction.DOWN, distance: 5 },
      { direction: Direction.FORWARD, distance: 5 },
    ])).to.equal(50);
  });
});
