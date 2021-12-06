import { Population } from "./domain";

export default function parse(input: string): Population {
  const counters: Population = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  input.split(",").forEach((value) => {
    counters[parseInt(value, 10)] += 1;
  });
  return counters;
}
