import { expect } from "chai";

import process from "./domain";

describe("Seven Segment Search domain", () => {
  it("decodes the output values based on the signal patterns", () => {
    expect(process([
      {
        outputValues: ["cdfeb", "fcadb", "cdfeb", "cdbaf"],
        signalPatterns: ["acedgfb", "cdfbe", "gcdfa", "fbcad", "dab", "cefabd", "cdfgeb", "eafb", "cagedb", "ab"],
      },
    ])).to.equal(5_353);
  });

  it("sums multiple output values", () => {
    expect(process([
      {
        outputValues: ["fdgacbe", "cefdb", "cefbgd", "gcbe"],
        signalPatterns: ["be", "cfbegad", "cbdgef", "fgaecd", "cgeb", "fdcge", "agebfd", "fecdb", "fabcd", "edb"],
      },
      {
        outputValues: ["fcgedb", "cgb", "dgebacf", "gc"],
        signalPatterns: ["edbfga", "begcd", "cbg", "gc", "gcadebf", "fbgde", "acbgfd", "abcde", "gfcbed", "gfec"],
      },
    ])).to.equal(8_394 + 9_781);
  });
});
