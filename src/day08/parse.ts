import { Entry } from "./domain";

export default function parse(input: string): Entry[] {
  return input.split("\n").map((entry) => {
    const [signals, outputs] = entry.split("|");
    return {
      outputValues: outputs.trim().split(" "),
      signalPatterns: signals.trim().split(" "),
    };
  });
}
