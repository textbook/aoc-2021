import process, { Coordinate } from "./domain";
import parse from "./parse";

export default function transparentOrigami(input: string): string {
  const { dots, folds } = parse(input);
  const folded = process(dots, folds, folds.length);
  return prettyPrint(folded);
}

function prettyPrint(folded: Coordinate[]): string {
  const maxRow = Math.max(...folded.map(([, y]) => y));
  const maxColumn = Math.max(...folded.map(([x]) => x));
  return [...Array(maxRow + 1)]
    .map((_, rowIndex) => {
      const dots = folded.filter(([, y]) => y === rowIndex);
      return [...Array(maxColumn + 1)]
        .map((_, columnIndex) => dots.find(([x, y]) => x === columnIndex && y === rowIndex) ? "x" : " ")
        .join("");
    })
    .join("\n");
}
