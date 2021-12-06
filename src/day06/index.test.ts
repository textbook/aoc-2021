import { expect } from "chai";

import lanternfish from ".";

describe("Lanternfish", () => {
  it("calculates the number of fish after 256 days", () => {
    expect(lanternfish("3,4,3,1,2")).to.equal(26_984_457_539);
  });
});
