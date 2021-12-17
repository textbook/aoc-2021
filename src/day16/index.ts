import process from "./domain";
import parse from "./parse";

export default function packetDecoder(input: string): number {
  const binary = Array.from(input)
    .map((char) => parseInt(char, 16)
      .toString(2)
      .padStart(4, "0"))
    .join("");
  return process(parse(binary));
}
