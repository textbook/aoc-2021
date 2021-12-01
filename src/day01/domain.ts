export default function process(depths: number[]): number {
  const triplets = slidingWindow(depths, 3);
  const pairs = slidingWindow(triplets.map(sum), 2);
  return pairs.filter(([first, second]) => second > first).length;
}

function sum(values: number[]): number {
  return values.reduce((curr, next) => curr + next, 0);
}

function slidingWindow(values: number[], length: number): number[][] {
  const windows = [];
  for (let index = 0; index < values.length - (length - 1); index++) {
    windows.push(values.slice(index, index + length));
  }
  return windows;
}
