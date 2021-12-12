import { expect } from "chai";

import parse from "./parse";

describe("Passage Pathing parser", () => {
  it("creates a map of a trivial cave system", () => {
    expect(parse("start-end")).to.deep.equal({ end: new Set(["start"]), start: new Set(["end"]) });
  });

  it("creates a map of a realistic cave system", () => {
    expect(parse(example)).to.deep.equal({
      start: new Set(["A", "b"]),
      A: new Set(["start", "b", "c", "end"]),
      b: new Set(["start", "A", "d", "end"]),
      c: new Set(["A"]),
      d: new Set(["b"]),
      end: new Set(["A", "b"]),
    });
  });
});

const example = `
start-A
start-b
A-c
A-b
b-d
A-end
b-end
`.trim();
