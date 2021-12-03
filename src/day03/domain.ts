export default function process(report: string[]): number {
  const o2gen = filterByMostCommonOrOne(report);
  const co2scrub = filterByLeastCommonOrZero(report);
  return parseInt(o2gen, 2) * parseInt(co2scrub, 2);
}

function filterByMostCommonOrOne(report: string[], index: number = 0): string {
  if (report.length === 1) {
    return report[0];
  }
  const [ones, zeroes] = partition(report, index);
  if (ones >= zeroes) {
    return filterByMostCommonOrOne(report.filter((entry) => entry[index] === "1"), index + 1);
  }
  return filterByMostCommonOrOne(report.filter((entry) => entry[index] === "0"), index + 1);
}

function filterByLeastCommonOrZero(report: string[], index: number = 0): string {
  if (report.length === 1) {
    return report[0];
  }
  const [ones, zeroes] = partition(report, index);
  if (ones < zeroes) {
    return filterByLeastCommonOrZero(report.filter((entry) => entry[index] === "1"), index + 1);
  }
  return filterByLeastCommonOrZero(report.filter((entry) => entry[index] === "0"), index + 1);
}

function partition(report: string[], index: number): [number, number] {
  return report.reduce(([ones, zeros], entry) => entry[index] === "1" ? [ones + 1, zeros] : [ones, zeros + 1], [0, 0]);
}
