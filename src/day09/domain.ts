export type HeightMap = number[][];

type Position = [number, number];

export default function process(heightMap: HeightMap): number {
  return heightMap
    .map((row, y) => row.filter((height, x) => neighbours(heightMap, [x, y]).every((neighbour) => neighbour > height)))
    .flat()
    .reduce((curr, next) => curr + (next + 1), 0);
}

function neighbours(heightMap: HeightMap, position: Position): number[] {
  return [[0, 1], [0, -1], [1, 0], [-1, 0]]
    .map(([dx, dy]) => [position[0] + dx, position[1] + dy])
    .filter(([x, y]) => y >= 0 && y < heightMap.length && x >= 0 && x < heightMap[0].length)
    .map(([x, y]) => heightMap[y][x]);
}
