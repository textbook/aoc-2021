import process from "./domain";

export default function whaleTreachery(input: string): number {
  return process(input.split(",").map((value) => parseInt(value, 10)));
}
