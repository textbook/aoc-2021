import process from "./domain";
import parse from "./parse";

export default function lanternfish(input: string): number {
  return process(parse(input));
}
