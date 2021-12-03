import { expect } from "chai";

import process from "./domain";

describe("Binary Diagnostics domain", () => {
  it("returns a single value multiplied by its inverse", () => {
    expect(process(["100"])).to.equal(12);
  });
  
  it("finds the most common bit from multiple values", () => {
    expect(process(["100", "101", "001"])).to.equal(10);
  });
});
