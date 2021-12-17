import { expect } from "chai";

import { Packet } from "./domain";
import parse from "./parse";

describe("Packet Decoder parser", () => {
  it("can handle a single literal value", () => {
    expect(parse(
      "001" + "100" + "10111" + "01011"
    )).to.deep.equal(<Packet>{
      type: 4,
      value: 123,
      version: 1,
    });
  });

  it("can handle an operator in length mode", () => {
    expect(parse(
      "010" + "101" + "0" + "000000000101010"
      + ("100" + "100" + "11000" + "10000" + "01000")
      + ("011" + "100" + "10011" + "11110" + "00111")
    )).to.deep.equal(<Packet>{
      operands: [
        {
          type: 4,
          value: 2_056,
          version: 4,
        }, {
          type: 4,
          value: 999,
          version: 3,
        },
      ],
      type: 5,
      version: 2,
    });
  });

  it("can handle an operator in packet count mode", () => {
    expect(parse(
      "000" + "111" + "1" + "00000000010"
      + ("001" + "100" + "11000" + "10000" + "01000")
      + ("101" + "100" + "11110" + "00111")
    )).to.deep.equal(<Packet>{
      operands: [
        {
          type: 4,
          value: 2_056,
          version: 1,
        }, {
          type: 4,
          value: 231,
          version: 5,
        },
      ],
      type: 7,
      version: 0,
    });
  });
});
