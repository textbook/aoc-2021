import { expect } from "chai";

import process from "./domain";

describe("Binary Diagnostics domain", () => {
  it("returns a single value multiplied by itself", () => {
    expect(process(["100"])).to.equal(16);
  });

  it("finds the most common bit from multiple values", () => {
    expect(process(["101", "010"])).to.equal(10);
  });
});
