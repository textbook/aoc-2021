import { expect } from "chai";

import process, { Packet } from "./domain";

describe("Packet Decoder domain", () => {
  it("can return a value", () => {
    expect(process(<Packet>{
      type: 4,
      value: 123,
      version: 1,
    })).to.equal(123);
  });

  it("can perform a sum operation", () => {
    expect(process(<Packet>{
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
      type: 0,
      version: 4,
    })).to.equal(1_245);
  });

  it("can perform a product operation", () => {
    expect(process(<Packet>{
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
      type: 1,
      version: 4,
    })).to.equal(359_784);
  });

  it("can perform a minimum operation", () => {
    expect(process(<Packet>{
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
      version: 4,
    })).to.equal(456);
  });

  it("can perform a maximum operation", () => {
    expect(process(<Packet>{
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
      type: 3,
      version: 4,
    })).to.equal(789);
  });

  it("can perform a greater than operation", () => {
    expect(process(<Packet>{
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
      type: 5,
      version: 4,
    })).to.equal(0);
    expect(process(<Packet>{
      operands: [
        {
          type: 4,
          value: 789,
          version: 1,
        }, {
          type: 4,
          value: 789,
          version: 0,
        },
      ],
      type: 5,
      version: 4,
    })).to.equal(0);
    expect(process(<Packet>{
      operands: [
        {
          type: 4,
          value: 789,
          version: 1,
        }, {
          type: 4,
          value: 456,
          version: 0,
        },
      ],
      type: 5,
      version: 4,
    })).to.equal(1);
  });

  it("can perform a less than operation", () => {
    expect(process(<Packet>{
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
      type: 6,
      version: 4,
    })).to.equal(1);
    expect(process(<Packet>{
      operands: [
        {
          type: 4,
          value: 789,
          version: 1,
        }, {
          type: 4,
          value: 789,
          version: 0,
        },
      ],
      type: 6,
      version: 4,
    })).to.equal(0);
    expect(process(<Packet>{
      operands: [
        {
          type: 4,
          value: 789,
          version: 1,
        }, {
          type: 4,
          value: 456,
          version: 0,
        },
      ],
      type: 6,
      version: 4,
    })).to.equal(0);
  });

  it("can perform an equality operation", () => {
    expect(process(<Packet>{
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
      type: 7,
      version: 4,
    })).to.equal(0);
    expect(process(<Packet>{
      operands: [
        {
          type: 4,
          value: 789,
          version: 1,
        }, {
          type: 4,
          value: 789,
          version: 0,
        },
      ],
      type: 7,
      version: 4,
    })).to.equal(1);
    expect(process(<Packet>{
      operands: [
        {
          type: 4,
          value: 789,
          version: 1,
        }, {
          type: 4,
          value: 456,
          version: 0,
        },
      ],
      type: 7,
      version: 4,
    })).to.equal(0);
  });
});
