const PRIMES = [];

function isPrime (num) {
  for (let j = 0; j < PRIMES.length; j++) {
    const testPrime = PRIMES[j];

    if (testPrime >= num) { break; }

    if (num % testPrime === 0) {
      return false
    }
  }
  
  return true;
}

function doesSolve (primes5, min) {
  const sum = primes5.reduce((acc, curr) => {
    acc += curr;
  }, 0);
    
  if (min && sum > min) { return false; }
  
  const st0 = primes5[0].toString();
  const st1 = primes5[1].toString();
  const st2 = primes5[2].toString();
  const st3 = primes5[3].toString();
  const st4 = primes5[4].toString();
  
  const c01 = parseInt(st0 + st1);
  const c02 = parseInt(st0 + st2);
  const c03 = parseInt(st0 + st3);
  const c04 = parseInt(st0 + st4);
  const c12 = parseInt(st1 + st2);
  const c13 = parseInt(st1 + st3);
  const c14 = parseInt(st1 + st4);
  const c23 = parseInt(st2 + st3);
  const c24 = parseInt(st2 + st4);
  const c34 = parseInt(st3 + st4);

  const c10 = parseInt(st1 + st0);
  const c20 = parseInt(st2 + st0);
  const c30 = parseInt(st3 + st0);
  const c40 = parseInt(st4 + st0);
  const c21 = parseInt(st2 + st1);
  const c31 = parseInt(st3 + st1);
  const c41 = parseInt(st4 + st1);
  const c32 = parseInt(st3 + st2);
  const c42 = parseInt(st4 + st2);
  const c43 = parseInt(st4 + st3);
  
  const maybePrimes = [c01, c02, c03, c04, c12, c13, c14, c23, c24, c34, c10, c20, c30, c40, c21, c31, c41, c32, c42, c43];
  // const maybePrimes = [c01, c02, c03, c12, c13, c23, c10, c20, c30, c21, c31, c32];
  

  for (let i = 0; i < maybePrimes.length; i++) {
    if (!isPrime(maybePrimes[i])) {
      return false;
    }
  }

  console.log(maybePrimes);
  return true;
}

(() => {
  const run = 1000;
  
  for (let i = 2; i < run; i++) {
    if (isPrime(i)) {
      PRIMES.push(i); 
    }
  }
  
  let min = null;

  const indexes5 = [PRIMES.indexOf(3), PRIMES.indexOf(7), PRIMES.indexOf(109), PRIMES.indexOf(673), 0];
  while (indexes5[0] < PRIMES.length - 3) {
    const primes5 = [PRIMES[indexes5[0]], PRIMES[indexes5[1]], PRIMES[indexes5[2]], PRIMES[indexes5[3]], PRIMES[indexes5[4]]];
    
    for (let l = 0; l < PRIMES.length - 3; l++) {
      indexes5[4] = l;
      primes5[4] = PRIMES[indexes5[4]];
      
      if (doesSolve(primes5, min)) {
        return console.log(primes5);
      }
    }

    if (indexes5[4] === PRIMES.length - 4) {
      indexes5[4] = indexes5[3];
      indexes5[3]++;
    }

    if (indexes5[3] === PRIMES.length - 4) {
      indexes5[3] = indexes5[2];
      indexes5[2]++;
      console.log(primes5);
    }

    if (indexes5[2] === PRIMES.length - 4) {
      indexes5[2] = indexes5[1];
      indexes5[1]++;
    }

    if (indexes5[1] === PRIMES.length - 4) {
      indexes5[1] = indexes5[0];
      indexes5[0]++;
    }

  }
  // const indexes4 = [0, 0, 0, 0];
  // while (indexes4[0] < PRIMES.length - 3) {
  //   const primes4 = [PRIMES[indexes4[0]], PRIMES[indexes4[1]], PRIMES[indexes4[2]], PRIMES[indexes4[3]]];
    
  //   for (let l = 0; l < PRIMES.length - 3; l++) {
  //     primes4[3] = PRIMES[l];
  //     indexes4[3] = l;
      
  //     if (doesSolve(primes4, min)) {
  //       return console.log(primes4);
  //     }
  //   }

  //   if (indexes4[3] === PRIMES.length - 4) {
  //     indexes4[2]++;
  //     indexes4[3] = 0;
  //   }

  //   if (indexes4[2] === PRIMES.length - 4) {
  //     indexes4[1]++;
  //     indexes4[2] = 0;
  //   }

  //   if (indexes4[1] === PRIMES.length - 4) {
  //     indexes4[0]++;
  //     indexes4[1] = 0;
  //   }
  // }
})()