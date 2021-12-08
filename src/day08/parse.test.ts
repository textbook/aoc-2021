import { expect } from "chai";
import { Entry } from "./domain";

import parse from "./parse";

describe("Seven Segment Search parser", () => {
  it("splits strings before and after the pipe", () => {
    expect(parse("hello world | foo bar baz qux")).to.deep.equal(<Entry[]>[
      { outputValues: ["foo", "bar", "baz", "qux"], signalPatterns: ["hello", "world"] },
    ]);
  });
});
