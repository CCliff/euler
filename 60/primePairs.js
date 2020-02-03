primes = [];

function isPrime (num) {
  for (let j = 0; j < primes.length; j++) {
    if (num % primes[j] === 0) {
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
  
  st0 = primes5[0].toString();
  st1 = primes5[1].toString();
  st2 = primes5[2].toString();
  st3 = primes5[3].toString();
  st4 = primes5[4].toString();
  
  c01 = parseInt(st0 + st1);
  c02 = parseInt(st0 + st2);
  c03 = parseInt(st0 + st3);
  c04 = parseInt(st0 + st4);
  c12 = parseInt(st1 + st2);
  c13 = parseInt(st1 + st3);
  c14 = parseInt(st1 + st4);
  c23 = parseInt(st2 + st3);
  c24 = parseInt(st2 + st4);
  c34 = parseInt(st3 + st4);

  c10 = parseInt(st1 + st0);
  c20 = parseInt(st2 + st0);
  c30 = parseInt(st3 + st0);
  c40 = parseInt(st4 + st0);
  c21 = parseInt(st2 + st1);
  c31 = parseInt(st3 + st1);
  c41 = parseInt(st4 + st1);
  c32 = parseInt(st3 + st2);
  c42 = parseInt(st4 + st2);
  c43 = parseInt(st4 + st3);
  
  const maybePrimes = [c01, c02, c03, c04, c12, c13, c14, c23, c24, c34, c10, c20, c30, c40, c21, c31, c41, c32, c42, c43];
  
  //Check if all maybe primes are prime, then add
  // console.log(maybePrimes);

  for (let i = 0; i < maybePrimes.length; i++) {
    if (!isPrime(maybePrimes[i])) {
      return false;
    }
  }

  return true;
}

(() => {
  const run = 100000;
  
  for (let i = 2; i < run; i++) {
    if (isPrime(i)) {
      primes.push(i); 
    }
  }
  
  let min = null;
  const primes5 = [primes[0], primes[0], primes[0], primes[0], primes[0]];
  
  for (let k = 4; k >= 0 ; k--) {
    for (let l = 0; l < 1000; l++) {
      primes5[k] = primes[l];
      
      if (doesSolve(primes5, min)) {
        console.log(primes5);
      }
    }
  }

  return primes.length;
})()