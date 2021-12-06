export type Population = [number, number, number, number, number, number, number, number, number];

export default function process(counters: Population, days: number): number {
  for (let _ = 0; _ < days; _++) {
    const [maturing, ...rest] = counters;
    counters = [...rest, maturing];
    counters[6] += maturing;
  }
  return counters.reduce((curr, next) => curr + next, 0);
}
