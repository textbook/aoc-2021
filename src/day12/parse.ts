import { CaveSystemMap } from "./domain";

export default function parse(input: string): CaveSystemMap {
  const map: CaveSystemMap = {};
  input.split("\n").forEach((line) => {
    const [from, to] = line.split("-");
    if (!(from in map)) {
      map[from] = new Set();
    }
    map[from].add(to);
    if (!(to in map)) {
      map[to] = new Set();
    }
    map[to].add(from);
  });
  return map;
}
