import { expect } from "chai";

import process from "./domain";

describe("Lanternfish domain", () => {
  it("returns the number of fish at the start", () => {
    expect(process([0, 1, 1, 2, 1, 0, 0, 0, 0], 0)).to.equal(5);
  });

  it("can iterate to create new fish", () => {
    expect(process([0, 1, 1, 2, 1, 0, 0, 0, 0], 2)).to.equal(6);
  });
});
