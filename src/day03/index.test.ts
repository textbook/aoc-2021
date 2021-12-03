import { expect } from "chai";

import binaryDiagnostic from ".";

const example = `
00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
`.trim();

describe("Binary Diagnostic", () => {
  it("finds the product of the gamma rate and epsilon rate", () => {
    expect(binaryDiagnostic(example)).to.equal(198);
  });
});
