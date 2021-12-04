import { BingoBoard } from "./domain";

export default function parse(input: string): { boards: BingoBoard[], draw: number[] } {
  const [draw, ...blocks] = input.split("\n\n");
  return {
    boards: blocks.map((block) => new BingoBoard(block.split("\n").map((line) => {
      const values = [];
      for (let start = 0; start < line.length; start += 3) {
        values.push(parseInt(line.slice(start, start + 2), 10));
      }
      return values;
    }))),
    draw: draw.split(",").map((value) => parseInt(value, 10)),
  };
}
