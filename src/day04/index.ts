import process from "./domain";
import parse from "./parse";

export default function giantSquid(input: string): number {
  const { boards, draw } = parse(input);
  return process(draw, boards);
}
