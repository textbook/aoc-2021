export type Coordinate = [number, number];

export interface Line {
  from: Coordinate;
  to: Coordinate;
}

export default function process(lines: Line[]): number {
  const grid: { [key: string]: number } = {};
  lines.forEach((line) => {
    pointsOn(line).forEach(([x, y]) => {
      const key = `${x},${y}`;
      if (!(key in grid)) {
        grid[key] = 0;
      }
      grid[key] += 1;
    });
  });
  return Object.values(grid).filter((value) => value > 1).length;
}

function pointsOn(line: Line): Coordinate[] {
  const coordinates: Coordinate[] = [];
  const { from: [x1, y1], to: [x2, y2] } = normalised(line);
  if (x1 === x2) {
    range(y1, y2).forEach((y) => coordinates.push([x1, y]));
  } else {
    const dy = y1 === y2 ? 0 : y2 > y1 ? 1 : -1;
    range(x1, x2).forEach((x, index) => coordinates.push([x, y1 + (index * dy)]));
  }
  return coordinates;
}

function normalised({ from, to }: Line): Line {
  [from, to] = [from, to].sort(([x1, y1], [x2, y2]) => x1 === x2 ? y1 - y2 : x1 - x2);
  return { from, to };
}

function range(start: number, end: number): number[] {
  return [...Array(end - start + 1)].map((_, index) => index + start);
}
