interface BasePacket {
  type: number;
  version: number;
}

export type Packet =
  | BasePacket & { operands: Packet[] }
  | BasePacket & { value: number };

export default function process(root: Packet): number {
  if ("value" in root) {
    return root.value;
  }
  return operations[root.type](root.operands);
}

const operations: { [type: number]: (operands: Packet[]) => number } = {
  0: (operands) => operands.reduce((curr, next) => curr + process(next), 0),
  1: (operands) => operands.reduce((curr, next) => curr * process(next), 1),
  2: (operands) => Math.min(...operands.map((op) => process(op))),
  3: (operands) => Math.max(...operands.map((op) => process(op))),
  5: ([op1, op2]) => process(op1) > process(op2) ? 1 : 0,
  6: ([op1, op2]) => process(op1) < process(op2) ? 1 : 0,
  7: ([op1, op2]) => process(op1) === process(op2) ? 1 : 0,
};
