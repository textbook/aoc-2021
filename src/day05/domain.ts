export type Coordinate = [number, number];

export interface Line {
  from: Coordinate;
  to: Coordinate;
}

export default function process(lines: Line[]): number {
  const grid: { [key: string]: number } = {};
  lines.forEach(({ from, to }) => {
    points(from, to).forEach(([x, y]) => {
      const key = `${x},${y}`;
      if (!(key in grid)) {
        grid[key] = 0;
      }
      grid[key] += 1;
    });
  });
  return Object.values(grid).filter((value) => value > 1).length;
}

function points(from: Coordinate, to: Coordinate): Coordinate[] {
  const coordinates: Coordinate[] = [];
  const [x1, y1] = from;
  const [x2, y2] = to;
  if (x1 === x2) {
    range(y1, y2).forEach((y) => coordinates.push([x1, y]));
  } else if (y1 === y2) {
    range(x1, x2).forEach((x) => coordinates.push([x, y1]));
  } else {
    if (x2 > x1) {
      range(x1, x2).forEach((x, index) => coordinates.push([x, y1 + (index * (y2 > y1 ? 1 : -1))]));
    } else {
      range(x1, x2).forEach((x, index) => coordinates.push([x, y2 + (index * (y2 > y1 ? -1 : 1))]));
    }
  }
  return coordinates;
}

function range(value1: number, value2: number): number[] {
  const [start, end] = [value1, value2].sort((a, b) => a - b);
  return [...Array(end - start + 1)].map((_, index) => index + start);
}
