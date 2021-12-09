import { HeightMap } from "./domain";

export default function parse(input: string): HeightMap {
  return input.split("\n").map((line) => line.split("").map((value) => parseInt(value, 10)));
}
