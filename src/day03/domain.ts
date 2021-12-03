export default function process(report: string[]): number {
  const o2gen = findEntry(report, Method.MOST_COMMON_OR_ONE);
  const co2scrub = findEntry(report, Method.LEAST_COMMON_OR_ZERO);
  return parseInt(o2gen, 2) * parseInt(co2scrub, 2);
}

enum Method {
  MOST_COMMON_OR_ONE,
  LEAST_COMMON_OR_ZERO,
}

function findEntry(report: string[], method: Method, index: number = 0): string {
  if (report.length === 1) {
    return report[0];
  }
  const [ones, zeroes] = countBits(report, index);
  const relevantBit = (method === Method.MOST_COMMON_OR_ONE ? ones >= zeroes : ones < zeroes) ? "1" : "0"
  return findEntry(report.filter((entry) => entry[index] === relevantBit), method, index + 1);
}

function countBits(report: string[], index: number): [number, number] {
  return report.reduce(([ones, zeros], entry) => entry[index] === "1" ? [ones + 1, zeros] : [ones, zeros + 1], [0, 0]);
}
