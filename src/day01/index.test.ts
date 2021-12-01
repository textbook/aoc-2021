import { expect } from "chai";

import sonarSweep from ".";

describe("Sonar Sweep", () => {
  it("counts the number of times a window's total depth measurement increases", () => {
    const example = "199\n200\n208\n210\n200\n207\n240\n269\n260\n263";
    expect(sonarSweep(example)).to.equal(5);
  });
});
