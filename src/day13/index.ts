import { Coordinate } from "../day05/domain";
import process from "./domain";
import parse from "./parse";

export default function transparentOrigami(input: string): number {
  const { dots, folds } = parse(input);
  const folded = process(dots, folds, folds.length);
  prettyPrint(folded);
  return folded.length;
}

// Stryker disable all
function prettyPrint(folded: Coordinate[]): void {
  const maxRow = Math.max(...folded.map(([, y]) => y));
  const maxColumn = Math.max(...folded.map(([x]) => x));
  for (let rowIndex = 0; rowIndex <= maxRow; rowIndex++) {
    const dots = folded.filter(([, y]) => y === rowIndex);
    const row = [...Array(maxColumn + 1)].map((_, columnIndex) => dots.find(([x, y]) => x === columnIndex && y === rowIndex) ? "x" : " ");
    console.log(row.join(""));
  }
}
