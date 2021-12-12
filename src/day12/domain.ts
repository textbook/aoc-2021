export type CaveSystemMap = { [key: string]: Set<string> };

export default function process(map: CaveSystemMap): number {
  return validPaths(map, ["start"]).length;
}

function validPaths(map: CaveSystemMap, path: string[]): string[][] {
  const from = path[path.length - 1];
  if (from === "end") {
    return [path];
  }
  const validOptions = [...map[from]]
    .filter((to) => to === to.toUpperCase()
      || !(path.includes(to))
      || (!(["start", "end"].includes(to)) && firstRevisit(path)));
  return validOptions
    .flatMap((to) => validPaths(map, path.concat([to])))
    .filter((path) => path[path.length - 1] === "end");
}

function firstRevisit(path: string[]): boolean {
  const visitedSmallCaves: Set<string> = new Set();
  return path.every((cave) => {
    if (cave === cave.toLowerCase()) {
      if (visitedSmallCaves.has(cave)) {
        return false;
      }
      visitedSmallCaves.add(cave);
    }
    return true;
  });
}
