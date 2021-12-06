export default function parse(input: string): number[] {
  const counters = [...Array(9)].fill(0);
  input.split(",").forEach((value) => {
    counters[parseInt(value, 10)] += 1;
  });
  return counters;
}
