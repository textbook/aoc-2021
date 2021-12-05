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
    for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
      coordinates.push([x1, y]);
    }
  } else if (y1 === y2) {
    for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
      coordinates.push([x, y1]);
    }
  }
  return coordinates;
}
