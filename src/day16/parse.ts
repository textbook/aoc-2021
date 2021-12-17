import { Packet } from "./domain";

type Bits = ("0" | "1")[];

export default function parse(input: string): Packet {
  return extractPacket(Array.from(input)
    .flatMap((char) => Array.from(parseInt(char, 16)
      .toString(2)
      .padStart(4, "0"))) as Bits);
}

function extractPacket(bits: Bits): Packet {
  const version = getValue(bits.splice(0, 3));
  const type = getValue(bits.splice(0, 3));
  if (type === 4) {
    const value = extractLiteralValue(bits);
    return { type, value, version };
  } else if (bits.shift() === "0") {
    const length = getValue(bits.splice(0, 15));
    const subPacket = bits.splice(0, length);
    const operands: Packet[] = [];
    while (subPacket.length) {
      operands.push(extractPacket(subPacket));
    }
    return { operands, type, version };
  } else {
    const packets = getValue(bits.splice(0, 11));
    const operands: Packet[] = [];
    for (let _ = 0; _ < packets; _++) {
      operands.push(extractPacket(bits));
    }
    return { operands, type, version };
  }
}

function getValue(bits: Bits): number {
  return parseInt(bits.join(""), 2);
}

function extractLiteralValue(bits: Bits): number {
  let relevantBits: Bits = [];
  while (bits[0] === "1") {
    const [, ...rest] = bits.splice(0, 5);
    relevantBits = relevantBits.concat(rest);
  }
  const [, ...rest] = bits.splice(0, 5);
  relevantBits = relevantBits.concat(rest);
  return getValue(relevantBits);
}
