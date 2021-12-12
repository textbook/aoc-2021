import { expect } from "chai";

import process from "./domain";

describe("Passage Pathing domain", () => {
  it("finds the single path in a trivial example", () => {
    expect(process({ start: new Set(["end"]), end: new Set(["start"]) })).to.equal(1);
  });

  it("finds parallel paths", () => {
    expect(process({
      start: new Set(["a", "B"]),
      a: new Set(["start", "end"]),
      B: new Set(["start", "end"]),
      end: new Set(["a", "B"]),
    })).to.equal(2);
  });
});
