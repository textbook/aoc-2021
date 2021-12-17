import process from "./domain";
import parse from "./parse";

export default function packetDecoder(input: string): number {
  return process(parse(input));
}
