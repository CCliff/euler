(() => {

  const numDigits = process.argv[2] || 3;
  const availableDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(d => d.toString());
  const digits = availableDigits.slice(0, numDigits);
  const totalCombinations = digits.reduce((acc, curr, i) => {
    return acc * (i + 1);
  }, 1);
  // console.log(totalCombinations);

  // console.log(digits);

  function combineNum (digits) {
    return digits.reduce((acc, curr) => acc + curr);
  }

  function a (digits) {
    const result = digits.slice();
    result[digits.length - 1] = digits[result.length - 2];
    result[digits.length - 2] = digits[result.length - 1];

    return result;
  }

  function b (digits) {
    const result = digits.slice();
    result[digits.length - 3] = digits[result.length - 1];
    result[digits.length - 2] = digits[result.length - 3];
    result[digits.length - 1] = digits[result.length - 2];

    return result;
  }

  function c (digits) {
    const result = digits.slice();
    const x = result[digits.length - 3];
    result.splice(digits.length - 3, 1);
    result.push(x);

    return result;
  }

  function d (digits, changeIndex, currentIndex) {
    const result = digits.slice();
    const length = result.length;
    const fChunk = result.splice(0, length - currentIndex);
    const lChunk = result.splice(length - currentIndex - 1, length + 1);
    console.log(fChunk, lChunk);
    lChunk.sort();
    // result.splice(length - changeIndex, 0, x);
    const newDigits = [...fChunk, ...lChunk];

    return newDigits;
  }

  // console.log(combineNum(b(digits)));

  let numCombinations = 1;
  let currentIndex = 0;
  let changeIndex = 4;
  let prevDigits = digits.slice();
  let functionRun = ' ';
  // console.log(functionRun, prevDigits);
  while (numCombinations < totalCombinations) {
    switch (numCombinations % 6) {
      case 0: 
        prevDigits = d(prevDigits, changeIndex, currentIndex);
        functionRun = 'd';
        currentIndex ++;
        break;
      case 4: 
        prevDigits = c(prevDigits);
        functionRun = 'c';
        break;
      case 2:
        prevDigits = b(prevDigits);
        functionRun = 'b';
        break;
      default:
        prevDigits = a(prevDigits);
        functionRun = 'a';
        break;
    }

    // // // Figure out how to get all permutations
    // if (numCombinations % 6 === 0) {
    //   //not sure yet
    //   prevDigits = d(prevDigits);
    //   functionRun = 'd'
    // } else if (numCombinations % 4 === 0) {
    //   prevDigits = c(prevDigits);
    //   functionRun = 'c'
    // } else if (numCombinations % 2 === 0) {
    //   prevDigits = b(prevDigits);
    //   functionRun = 'b'
    // } else {
    //   prevDigits = a(prevDigits);
    //   functionRun = 'a'
    // }

    numCombinations++;
    // console.log(functionRun, prevDigits);
  }

})();