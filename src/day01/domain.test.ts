import { expect } from "chai";

import process from "./domain";

describe("Sonar Sweep domain", () => {
  it("returns 0 for an empty array", () => {
    expect(process([])).to.equal(0);
  });

  it("counts the number of increases", () => {
    expect(process([12, 34, 56, 78, 90])).to.equal(2);
  });

  it("does not count decreases", () => {
    expect(process([56, 78, 12, 34, 90])).to.equal(1);
  });
});
