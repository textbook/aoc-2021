import { Rules } from "./domain";

export default function parse(input: string): { template: string; rules: Rules } {
  const [template, rules] = input.split("\n\n");
  return {
    rules: rules.split("\n").reduce((rules, line) => {
      const [from, to] = line.split(" -> ");
      return { ...rules, [from]: to };
    }, {}),
    template,
  };
}
