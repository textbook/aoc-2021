import { expect } from "chai";
import process from "./domain";

describe("Transparent Origami domain", () => {
  it("returns all dots before the first step", () => {
    expect(process([[0, 1], [1, 1], [1, 0]], [], 0))
      .to.deep.equalInAnyOrder([[0, 1], [1, 1], [1, 0]]);
  });

  it("returns visible dots after applying a fold", () => {
    expect(process([[0, 0], [2, 0], [0, 2], [1, 2]], [{ direction: "y", location: 1 }], 1))
      .to.deep.equalInAnyOrder([[0, 0], [2, 0], [1, 0]]);
  });
});
