import { expect } from "chai";
import process from "./domain";

describe("Transparent Origami domain", () => {
  it("counts all dots before the first step", () => {
    expect(process([[0, 1], [1, 1], [1, 0]], [], 0)).to.equal(3);
  });

  it("counts visible dots after applying a fold", () => {
    expect(process([[0, 0], [2, 0], [0, 2], [1, 2]], [{ direction: "y", location: 1 }], 1)).to.equal(3);
  });
});
