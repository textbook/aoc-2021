import { expect } from "chai";

import process, { Packet } from "./domain";

describe("Packet Decoder domain", () => {
  it("sums the versions in all packets", () => {
    expect(process(<Packet>{
      operands: [
        {
          operands: [
            {
              type: 4,
              value: 456,
              version: 1,
            }, {
              type: 4,
              value: 789,
              version: 0,
            },
          ],
          type: 2,
          version: 2,
        }, {
          type: 4,
          value: 123,
          version: 8,
        },
      ],
      type: 1,
      version: 4,
    })).to.equal(15);
  });
});
