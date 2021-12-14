export type Rule = { from: [string, string], to: string };

export default function process(template: string, rules: Rule[], steps: number): string {
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
  return characters.join("");
}
