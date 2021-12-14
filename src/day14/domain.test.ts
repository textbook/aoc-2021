import { expect } from "chai";
import process from "./domain";

describe("Extended Polymerization domain", () => {
  it("returns the same string if no steps are taken", () => {
    expect(process("ABC", [], 0)).to.equal("ABC");
  });

  it("inserts new items between pairs", () => {
    expect(process("ABC", [{ from: ["A", "B"], to: "D" }], 1)).to.equal("ADBC");
  });
});
