(() => {
  function factorial (num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
      sum += i;
    }

    return sum;
  }

  function getNumFactors(num) {
    let numFactors = 0;
    const factors = [];

    for (let i = 1; i <= num; i++) {

      if (factors.length > 0 && factors.indexOf(i) !== -1) {
        break;
      }

      if (num % i == 0) {
        numFactors += 2;
        factors.push(i);
        factors.push(num / i);
      }
    }

    return numFactors;
  }


  const start = 1;
  let currNum = start;
  let numFactors = 0;

  while (numFactors <= 500) {
    if (currNum % 1000 === 0) {
      console.log(currNum);
    }
    
    numFactors = getNumFactors(factorial(currNum)); 
    currNum++;
  }

  const x = currNum - 1;
  console.log(`X: ${x}`);
  console.log(`Factorial: ${factorial(x)}`);
  console.log(`NumFactors: ${getNumFactors(factorial(x))}`);
})();