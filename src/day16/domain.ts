interface BasePacket {
  type: number;
  version: number;
}

export type Packet =
  | BasePacket & { operands: Packet[] }
  | BasePacket & { value: number };

export default function process(root: Packet): number {
  if ("operands" in root) {
    return root.version + root.operands
      .map((packet) => process(packet))
      .reduce((curr, next) => curr + next, 0);
  }
  return root.version;
}
