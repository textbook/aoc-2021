import { expect } from "chai";

import process from "./domain";

describe("Seven Segment Search domain", () => {
  it("counts outputs with 2, 3, 4 or 7 signal lines", () => {
    expect(process([
      { outputValues: ["hi", "foo", "hello", "world"], signalPatterns: [] },
      { outputValues: ["banana", "bar", "spam", "coffee", "bananas"], signalPatterns: [] },
    ])).to.equal(5);
  });
});
