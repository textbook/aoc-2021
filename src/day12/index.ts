import process from "./domain";
import parse from "./parse";

export default function passagePathing(input: string): number {
  return process(parse(input));
}
