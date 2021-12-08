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

  const one = find(patterns, (value) => value.size === 2);
  const four = find(patterns, (value) => value.size === 4);
  const seven = find(patterns, (value) => value.size === 3);
  const eight = find(patterns, (value) => value.size === 7);

  const two = find(patterns, (value) => value.size === 5 && intersection(four, value).size === 2);
  const three = find(patterns, (value) => value.size === 5 && intersection(one, value).size === 2);
  const six = find(patterns, (value) => value.size === 6 && intersection(seven, value).size === 2);
  const nine = find(patterns, (value) => value.size === 6 && intersection(four, value).size === 4);

  const zero = find(patterns, (value) => value.size === 6 && !equal(value, six) && !equal(value, nine));
  const five = find(patterns, (value) => value.size === 5 && !equal(value, two) && !equal(value, three));

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

function find<T>(within: T[], predicate: (value: T) => boolean): T {
  const value = within.find(predicate);
  if (!value) {
    throw new Error("no value found for predicate");
  }
  return value;
}

function intersection<T>(first: Set<T>, second: Set<T>){
  return new Set([...first].filter((value) => second.has(value)));
}
