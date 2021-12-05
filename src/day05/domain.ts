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
  const [[x1, y1], [x2, y2]] = normalise(from, to);
  if (x1 === x2) {
    range(y1, y2).forEach((y) => coordinates.push([x1, y]));
  } else {
    const dy = y1 === y2 ? 0 : y2 > y1 ? 1 : -1;
    range(x1, x2).forEach((x, index) => coordinates.push([x, y1 + (index * dy)]));
  }
  return coordinates;
}

function normalise(from: Coordinate, to: Coordinate): Coordinate[] {
  return [from, to].sort(([x1, y1], [x2, y2]) => x1 === x2 ? y1 - y2 : x1 - x2);
}

function range(start: number, end: number): number[] {
  return [...Array(end - start + 1)].map((_, index) => index + start);
}
