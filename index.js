generateNumberFactorial = n => {
  n = BigInt(n);

  return n === 0n ? 1n : n * generateNumberFactorial(n - 1n);
};

let testMagicNumber = 30;

const factorial = generateNumberFactorial(testMagicNumber).toString();

console.log(factorial);
