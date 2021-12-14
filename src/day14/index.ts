import process from "./domain";
import parse from "./parse";

export default function extendedPolymerization(input: string): number {
  const { rules, template } = parse(input);
  const polymer = process(template, rules, 10);
  const counts = Object.values(countCharacters(polymer)).sort((a, b) => a - b);
  return counts[counts.length - 1] - counts[0];
}

function countCharacters(value: string): { [key: string]: number } {
  const counts: { [key: string]: number } = {};
  for (const character of value) {
    if (!(character in counts)) {
      counts[character] = 0;
    }
    counts[character] += 1;
  }
  return counts;
}
