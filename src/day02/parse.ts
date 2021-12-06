import { Direction, Instruction } from "./domain";

const directions: { [key: string]: Direction } = {
  down: Direction.DOWN,
  forward: Direction.FORWARD,
  up: Direction.UP,
};

export default function parse(instructions: string): Instruction[] {
  return instructions.split("\n").map((instruction) => {
    const [direction, distance] = instruction.split(" ");
    return {
      direction: directions[direction],
      distance: parseInt(distance, 10),
    };
  });
}
