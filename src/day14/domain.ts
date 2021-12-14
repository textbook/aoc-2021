export type Rule = { from: [string, string], to: string };

export default function process(template: string, rules: Rule[], steps: number): number {
  const characters = Array.from(template);
  for (let _ = 0; _ < steps; _++) {
    let index = 0;
    while (index < characters.length) {
      const rule = rules.find(({ from }) => from[0] === characters[index] && from[1] === characters[index + 1]);
      if (rule) {
        characters.splice(index + 1, 0, rule.to);
        index++;
      }
      index++;
    }
  }
  const counts = Object.values(counter(characters)).sort((a, b) => a - b);
  return counts[counts.length - 1] - counts[0];
}

function counter(value: string[]): { [key: string]: number } {
  const counts: { [key: string]: number } = {};
  for (const character of value) {
    if (!(character in counts)) {
      counts[character] = 0;
    }
    counts[character] += 1;
  }
  return counts;
}
