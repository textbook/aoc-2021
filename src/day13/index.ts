import process from "./domain";
import parse from "./parse";

export default function transparentOrigami(input: string): number {
  const { dots, folds } = parse(input);
  return process(dots, folds, 1);
}
