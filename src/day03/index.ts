import process from "./domain";

export default function binaryDiagnostic(input: string): number {
  return process(input.split("\n"));
}
