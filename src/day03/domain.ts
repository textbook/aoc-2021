export default function process(report: string[]): number {
  const bitLength = report[0].length;
  const bits = [...Array(bitLength)]
    .map((_, index) => index)
    .map((index) => mostCommon(report.map((entry) => entry[index])));
  const gammaRate = parseInt(bits.join(""), 2);
  const epsilonRate = gammaRate ^ ((2 ** bitLength) - 1)
  return gammaRate * epsilonRate;
}

function mostCommon(all: string[]): string {
  let ones = 0;
  for (let index = 0; index < all.length; index++) {
    if (all[index] === "1") {
      ones++;
    }
    if (ones > (all.length / 2)) {
      return "1";
    }
  }
  return "0";
}
