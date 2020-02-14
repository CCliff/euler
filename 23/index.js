(() => {

  const max = process.argv[2] || 28124;
  const map = {};
  const abundantNumbers = [];

  function getSumFactors (num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }

    return sum;
  }

  function isSumOfAbundantNumbers (num, abundantNumbers) {
    for (let i = 0; i < abundantNumbers.length; i++) {
      const aNum = abundantNumbers[i]
      const diff = num - aNum;

      if (diff < 0) {
        return false;
      }

      if (abundantNumbers.indexOf(diff) > -1) {
        return true;
      }
    }

    return false;
  }

  let totalSum = 0;
  for (let i = 1; i <= max; i++) {
    const sumFactors = getSumFactors(i);
    console.log(i, sumFactors);
    if (sumFactors > i) {
      abundantNumbers.push(i);
    }

    if(!isSumOfAbundantNumbers(i, abundantNumbers)) {
      totalSum += i;
    }
  }
  console.log(abundantNumbers);
  console.log(totalSum);

})();