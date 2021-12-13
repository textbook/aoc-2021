export type Coordinate = [number, number];
export type Fold = { direction: "x" | "y", location: number };

export default function process(dots: Coordinate[], folds: Fold[], steps: number): Coordinate[] {
  let folded: Coordinate[];
  for (let foldIndex = 0; foldIndex < steps; foldIndex++) {
    const { direction, location } = folds[foldIndex];
    [dots, folded] = partition(dots, ([x, y]) => direction === "x" ? x < location : y < location);
    folded.forEach(([x, y]) => {
      const dot: Coordinate = direction === "x"
        ? [location - Math.abs(location - x), y]
        : [x, location - Math.abs(location - y)];
      if (!dots.find((existing) => existing[0] === dot[0] && existing[1] === dot[1])) {
        dots.push(dot);
      }
    });
  }
  return dots;
}

function partition<T>(arr: T[], predicate: (value: T) => boolean): [T[], T[]] {
  const yes: T[] = [];
  const no: T[] = [];
  arr.forEach((value) => {
    if (predicate(value)) {
      yes.push(value);
    } else {
      no.push(value);
    }
  });
  return [yes, no];
}
