import { Rule } from "./domain";

export default function parse(input: string): { template: string; rules: Rule[] } {
  const [template, rules] = input.split("\n\n");
  return {
    rules: rules.split("\n").map((line) => {
      const [from, to] = line.split(" -> ");
      return { from: [from[0], from[1]], to };
    }),
    template,
  };
}
