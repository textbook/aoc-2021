/* eslint-disable @typescript-eslint/no-non-null-assertion */

export interface Entry {
  outputValues: string[];
  signalPatterns: string[];
}

export default function process(entries: Entry[]): number {
  return entries
    .map((entry) => decode(entry))
    .reduce((curr, next) => curr + next, 0);
}

function decode({ outputValues, signalPatterns }: Entry): number {
  const patterns = signalPatterns.map((value) => new Set(value));

  const one = patterns.find((value) => value.size === 2)!;
  const four = patterns.find((value) => value.size === 4)!;
  const seven = patterns.find((value) => value.size === 3)!;
  const eight = patterns.find((value) => value.size === 7)!;

  const two = patterns.find((value) => value.size === 5 && intersection(four, value).size === 2)!;
  const three = patterns.find((value) => value.size === 5 && intersection(one, value).size === 2)!;
  const six = patterns.find((value) => value.size === 6 && intersection(seven, value).size === 2)!;
  const nine = patterns.find((value) => value.size === 6 && intersection(four, value).size === 4)!;

  const zero = patterns.find((value) => value.size === 6 && !equal(value, six) && !equal(value, nine))!;
  const five = patterns.find((value) => value.size === 5 && !equal(value, two) && !equal(value, three))!;

  const digits = [zero, one, two, three, four, five, six, seven, eight, nine];

  return outputValues
    .map((value, index) => (10 ** (3 - index)) * digit(new Set(value), digits))
    .reduce((curr, next) => curr + next, 0);
}

function digit(signal: Set<string>, digits: Set<string>[]) {
  for (let index = 0; index < 10; index++) {
    if (equal(signal, digits[index])) {
      return index;
    }
  }
  throw new Error("mismatched digit");
}

function equal<T>(first: Set<T>, second: Set<T>): boolean {
  return first.size === second.size && first.size === intersection(first, second).size;
}

function intersection<T>(first: Set<T>, second: Set<T>){
  return new Set([...first].filter((value) => second.has(value)));
}
