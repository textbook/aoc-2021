import { expect } from "chai";
import { BingoBoard } from "./domain";

import parse from "./parse";

describe("Giant Squid parse", () => {
  it("converts the first line into an array of numbers", () => {
    const { draw } = parse("2,5,22,13,8");
    expect(draw).to.deep.equal([2, 5, 22, 13, 8]);
  });

  it("converts following blocks into bingo boards", () => {
    const { boards: [actual] } = parse("1,2,3,4\n\n 1 23\n45  6");
    const expected = new BingoBoard([[1, 23], [45, 6]]);
    expect(expected.equals(actual), `expected \n${actual}\nto equal ${expected}`).to.be.true;
  });
});
