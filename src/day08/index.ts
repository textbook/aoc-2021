import process from "./domain";
import parse from "./parse";

export default function sevenSegmentSearch(input: string): number {
  return process(parse(input));
}
