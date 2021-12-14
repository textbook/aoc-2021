import { expect } from "chai";
import process from "./domain";

describe("Extended Polymerization domain", () => {
  it("returns the initial counts if no steps are taken", () => {
    expect(process("ABCAAB", {}, 0)).to.equal(2);
  });

  it("inserts new items between pairs", () => {
    expect(process("ABCAAB", { "AB": "C" }, 1)).to.equal(1);
  });
});
