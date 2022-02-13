//Find the Prime factors of a number
const factorsOf = 12;
console.log(
  "Prime factors of",
  factorsOf + ":",
  primeFactors(factorsOf).join(" ")
);

function primeFactors(integer) {
  const factors = [];
  let divisor = 2;

  while (integer >= 2) {
    if (integer % divisor == 0) {
      factors.push(divisor);
      integer = integer / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}