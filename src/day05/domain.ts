export type Coordinate = [number, number];

export default function process(lines: Coordinate[][]): number {
  const grid: { [key: string]: number } = {};
  lines.flat().forEach(([x, y]) => {
    const key = `${x},${y}`;
    if (!(key in grid)) {
      grid[key] = 0;
    }
    grid[key] += 1;
  });
  return Object.values(grid).filter((value) => value > 1).length;
}
