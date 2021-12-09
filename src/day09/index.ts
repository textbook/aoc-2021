import process from "./domain";
import parse from "./parse";

export default function smokeBasin(input: string): number {
  return process(parse(input));
}
