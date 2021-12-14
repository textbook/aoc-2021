import process from "./domain";
import parse from "./parse";

export default function extendedPolymerization(input: string): number {
  const { rules, template } = parse(input);
  return process(template, rules, 10);
}
