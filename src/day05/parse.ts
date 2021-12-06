import { Coordinate } from "./domain";

export default function parse(input: string): Coordinate[][] {
  return input
    .split("\n")
    .map((line) => {
      const [first, second] = line.split(" -> ");
      return createLine(parseCoordinate(first), parseCoordinate(second));
    });
}

function createLine(first: Coordinate, second: Coordinate): Coordinate[] {
  const [from, to] = [first, second].sort(([x1, y1], [x2, y2]) => x1 === x2 ? y1 - y2 : x1 - x2);
  const points: Coordinate[]  = [];
  const [x1, y1] = from;
  const [x2, y2] = to;
  if (x1 === x2) {
    range(y1, y2).forEach((y) => points.push([x1, y]));
  } else {
    const dy = y1 === y2 ? 0 : y2 > y1 ? 1 : -1;
    range(x1, x2).forEach((x, index) => points.push([x, y1 + (index * dy)]));
  }
  return points;
}

function parseCoordinate(pair: string): Coordinate {
  const [first, second] = pair.split(",");
  return [parseInt(first, 10), parseInt(second, 10)];
}

function range(start: number, end: number): number[] {
  return [...Array(end - start + 1)].map((_, index) => index + start);
}
