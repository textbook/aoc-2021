import { expect } from "chai";

import process from "./domain";

describe("Sonar Sweep domain", () => {
  it("returns 0 for an empty array", () => {
    expect(process([])).to.equal(0);
  });

  it("counts the number of increases", () => {
    expect(process([123, 456, 789])).to.equal(2);
  });

  it("does not count decreases", () => {
    expect(process([456, 123, 789])).to.equal(1);
  });
});
