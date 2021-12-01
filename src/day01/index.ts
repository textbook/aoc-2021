import process from "./domain";
import parse from "./parse";

export default function sonarSweep(depths: string): number {
  return process(parse(depths));
}
