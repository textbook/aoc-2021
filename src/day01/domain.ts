export default function process(depths: number[]): number {
  let count = 0;
  for (let index = 1; index < depths.length; index++) {
    if (depths[index] > depths[index - 1]) {
      count++;
    }
  }
  return count;
}
