import { Coordinate, Line } from "./domain";

export default function parse(input: string): Line[] {
  return input
    .split("\n")
    .map((line) => {
      const [start, end] = line.split(" -> ");
      return { from: parseCoordinate(start), to: parseCoordinate(end) };
    });
}

function parseCoordinate(pair: string): Coordinate {
  const [first, second] = pair.split(",");
  return [parseInt(first, 10), parseInt(second, 10)];
}
