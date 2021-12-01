export default function process(depths: number[]): number {
  let count = 0;
  const windows = createWindows(depths);
  for (let index = 1; index < windows.length; index++) {
    if (windows[index] > windows[index - 1]) {
      count++;
    }
  }
  return count;
}

function createWindows(depths: number[]): number[] {
  const windows = [];
  for (let index = 1; index < depths.length - 1; index++) {
    windows.push(depths[index - 1] + depths[index] + depths[index + 1]);
  }
  return windows;
}
