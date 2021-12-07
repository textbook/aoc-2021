import { expect } from "chai";

import whaleTreachery from ".";

describe("The Treachery of Whales", () => {
  it("determines the minimum fuel needed to align the crabs", () => {
    expect(whaleTreachery("16,1,2,0,4,2,7,1,2,14")).to.equal(37);
  });
});
