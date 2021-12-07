export default function process(currentPositions: number[]): number {
  const maxPosition = Math.max(...currentPositions);
  const costs = [...Array(maxPosition + 1)]
    .map((_, targetPosition) => currentPositions.reduce((curr, next) => curr + cost(next, targetPosition), 0));
  return Math.min(...costs);
}

function cost(currentPosition: number, targetPosition: number): number {
  const distance = Math.abs(currentPosition - targetPosition);
  return (distance * (distance + 1)) / 2;
}
