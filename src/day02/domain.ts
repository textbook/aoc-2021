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
  let depth = 0, position = 0;
  instructions.forEach(({ direction, distance }) => {
    switch(direction) {
      case Direction.DOWN:
        depth += distance;
        break;
      case Direction.FORWARD:
        position += distance;
        break;
      case Direction.UP:
        depth -= distance;
        break;
    }
  });
  return depth * position;
}
