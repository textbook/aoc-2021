export default function process(counters: number[], days: number = 80): number {
  for (let _ = 0; _ < days; _++) {
    const maturing = counters.shift() as number;
    counters.push(maturing);
    counters[6] += maturing;
  }
  return counters.reduce((curr, next) => curr + next, 0);
}
