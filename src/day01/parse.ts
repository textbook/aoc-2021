export default function parse(input: string): number[] {
  return input ? input.split("\n").map((value) => parseInt(value, 10)) : [];
}
