export type Rules = { [from: string]: string };

export default function process(template: string, rules: Rules, steps: number): number {
  const characters = Array.from(template);
  for (let _ = 0; _ < steps; _++) {
    let index = 0;
    while (index < characters.length) {
      const to = rules[`${characters[index]}${characters[index + 1]}`];
      if (to) {
        characters.splice(index + 1, 0, to);
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
