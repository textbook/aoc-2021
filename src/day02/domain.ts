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
  const { depth, position } = instructions.reduce((state, { direction, distance }) => {
    switch (direction) {
      case Direction.DOWN:
        return { ...state, aim: state.aim + distance };
      case Direction.FORWARD:
        return { ...state, depth: state.depth + (state.aim * distance), position: state.position + distance };
      case Direction.UP:
        return { ...state, aim: state.aim - distance };
    }
  }, { aim: 0, depth: 0, position: 0 });
  return depth * position;
}
