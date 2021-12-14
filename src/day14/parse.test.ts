import { expect } from "chai";

import parse from "./parse";

describe("Extended Polymerization parser", () => {
  it("converts the input to the domain structure", () => {
    expect(parse("ABC\n\nAB -> D\nBC -> A")).to.deep.equal({
      template: "ABC",
      rules: [
        { from: ["A", "B"], to: "D" },
        { from: ["B", "C"], to: "A" },
      ],
    });
  });
});
