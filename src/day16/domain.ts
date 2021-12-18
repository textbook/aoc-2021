export const enum PacketType {
  SUM = 0,
  PRODUCT = 1,
  MINIMUM = 2,
  MAXIMUM = 3,
  LITERAL_VALUE = 4,
  GREATER_THAN = 5,
  LESS_THAN = 6,
  EQUAL_TO = 7,
}

interface BasePacket {
  type: PacketType;
  version: number;
}
type OperatorType = Exclude<PacketType, PacketType.LITERAL_VALUE>
type Operator = BasePacket & { operands: Packet[]; type: OperatorType };
type LiteralValue = BasePacket & { type: PacketType.LITERAL_VALUE; value: number };
export type Packet = LiteralValue | Operator;

export default function process(root: Packet): number {
  if (root.type === PacketType.LITERAL_VALUE) {
    return root.value;
  }
  return operations[root.type](root);
}

const operations: { [Type in OperatorType]: (packet: Operator) => number } = {
  [PacketType.SUM]: ({ operands }) => operands.reduce((curr, next) => curr + process(next), 0),
  [PacketType.PRODUCT]: ({ operands }) => operands.reduce((curr, next) => curr * process(next), 1),
  [PacketType.MINIMUM]: ({ operands }) => Math.min(...operands.map((op) => process(op))),
  [PacketType.MAXIMUM]: ({ operands }) => Math.max(...operands.map((op) => process(op))),
  [PacketType.GREATER_THAN]: ({ operands: [op1, op2] }) => process(op1) > process(op2) ? 1 : 0,
  [PacketType.LESS_THAN]: ({ operands: [op1, op2] }) => process(op1) < process(op2) ? 1 : 0,
  [PacketType.EQUAL_TO]: ({ operands: [op1, op2] }) => process(op1) === process(op2) ? 1 : 0,
};
