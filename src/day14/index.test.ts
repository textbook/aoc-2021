import { expect } from "chai";

import extendedPolymerization from ".";

describe("Extended Polymerization", () => {
  it("calculates the difference between the quantities of the most and least common elements", () => {
    expect(extendedPolymerization(example)).to.equal(1_588);
  });
});

const example = `
NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C
`.trim();
