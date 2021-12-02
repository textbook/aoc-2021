import process from "./domain";
import parse from "./parse";

export default function dive(instructions: string): number {
  return process(parse(instructions));
}
