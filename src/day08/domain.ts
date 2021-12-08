export interface Entry {
  outputValues: string[];
  signalPatterns: string[];
}

export default function process(entries: Entry[]): number {
  return entries
    .map(({ outputValues }) => outputValues)
    .flat()
    .reduce((curr, next) => curr + ([2, 3, 4, 7].includes(next.length) ? 1 : 0), 0);
}
