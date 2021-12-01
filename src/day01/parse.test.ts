import { expect } from "chai";

import parse from "./parse";

describe("Sonar Sweep parser", () => {
  it("returns an empty array for an empty string", () => {
    expect(parse("")).to.deep.equal([]);
  });

  it("converts strings to numbers", () => {
    expect(parse("123")).to.deep.equal([123]);
  });

  it("splits multiple strings by newline", () => {
    expect(parse("123\n456\n789")).to.deep.equal([123, 456, 789]);
  });
});
