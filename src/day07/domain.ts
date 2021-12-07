export default function process(currentPositions: number[]): number {
  const maxPosition = Math.max(...currentPositions);
  const costs = [...Array(maxPosition + 1)]
    .map((_, targetPosition) => currentPositions.reduce((curr, next) => curr + Math.abs(next - targetPosition), 0));
  return Math.min(...costs);
}
