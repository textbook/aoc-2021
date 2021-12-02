export enum Direction {
  DOWN,
  FORWARD,
  UP,
}

export interface Instruction {
  direction: Direction;
  distance: number;
}

export default function process(instructions: Instruction[]): number {
  let aim = 0, depth = 0, position = 0;
  instructions.forEach(({ direction, distance }) => {
    switch (direction) {
      case Direction.DOWN:
        aim += distance;
        break;
      case Direction.FORWARD:
        position += distance;
        depth += aim * distance;
        break;
      case Direction.UP:
        aim -= distance;
        break;
    }
  });
  return depth * position;
}
