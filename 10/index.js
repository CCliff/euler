(() => {
  const limit = 2000000;
  let sum = 0;
  let curr = 3;
  const primes = [2];

  while (curr < limit) {
    let isPrime = true;

    for (let i = 0; i < primes.length; i++) {
      const currPrime = primes[i];
      if (curr % currPrime === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(curr);
    }

    curr++;
  }

  const solution = primes.reduce((agg, curr) => {
    return agg += curr;
  }, 0);

  return console.log(solution);
})();
