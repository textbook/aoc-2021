import { Coordinate, Fold } from "./domain";

export default function parse(input: string): { dots: Coordinate[], folds: Fold[] } {
  const [dots, folds] = input.split("\n\n");
  return {
    dots: dots.split("\n").map((line) => {
      const [x, y] = line.split(",");
      return [parseInt(x, 10), parseInt(y, 10)];
    }),
    folds: folds.split("\n").map((line) => {
      const [direction, location] = line.slice("fold along ".length).split("=");
      if (direction === "x" || direction === "y") {
        return { direction, location: parseInt(location, 10) };
      }
      throw new Error(`invalid direction: ${direction}`);
    }),
  };
}
