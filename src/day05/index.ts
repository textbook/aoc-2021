import process from "./domain";
import parse from "./parse";

export default function hydrothermalVenture(input: string): number {
  return process(parse(input));
}
