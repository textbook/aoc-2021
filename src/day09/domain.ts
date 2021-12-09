export type HeightMap = number[][];

type Position = [number, number];

export default function process(heightMap: HeightMap): number {
  return heightMap
    .map((row, y) => row.map((_, x) => isLowPoint(heightMap, [x, y]) ? [x, y] : null))
    .flat()
    .filter((position): position is Position => position !== null)
    .map((lowPoint) => findBasin(heightMap, lowPoint))
    .sort((a, b) => b.length - a.length)
    .slice(0, 3)
    .reduce((curr, next) => curr * next.length, 1);
}

function findBasin(heightMap: HeightMap, lowPoint: Position): Position[] {
  let basin = [lowPoint];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const candidates: Position[] = basin
      .map((position) => neighbours(heightMap, position))
      .flat()
      .filter(([x, y]) => heightMap[y][x] !== 9 && !basin.some((point) => point[0] === x && point[1] === y));
    if (candidates.length === 0) {
      return basin;
    }
    basin = basin.concat(unique(candidates, (([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2)));
  }
}

function isLowPoint(heightMap: HeightMap, [x, y]: Position): boolean {
  return neighbours(heightMap, [x, y]).every(([nx, ny]) => heightMap[ny][nx] > heightMap[y][x]);
}

function neighbours(heightMap: HeightMap, position: Position): Position[] {
  return [[0, 1], [0, -1], [1, 0], [-1, 0]]
    .map(([dx, dy]) => [position[0] + dx, position[1] + dy] as Position)
    .filter(([x, y]) => y >= 0 && y < heightMap.length && x >= 0 && x < heightMap[0].length);
}

function unique<T>(arr: T[], equal: (a: T, b: T) => boolean): T[] {
  return arr.filter((value, index) => !arr.some((other, otherIndex) => otherIndex > index && equal(value, other)));
}
