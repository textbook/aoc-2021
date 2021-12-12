import { expect } from "chai";

import passagePathing from ".";

describe("Passage Pathing", () => {
  it("counts the valid paths in the small example", () => {
    expect(passagePathing(smallExample)).to.equal(36);
  });

  it("counts the valid paths in the medium example", () => {
    expect(passagePathing(mediumExample)).to.equal(103);
  });

  it("counts the valid paths in the large example", () => {
    expect(passagePathing(largeExample)).to.equal(3_509);
  });
});

const smallExample = `
start-A
start-b
A-c
A-b
b-d
A-end
b-end
`.trim();

const mediumExample = `
dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc
`.trim();

const largeExample = `
fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW
`.trim();
