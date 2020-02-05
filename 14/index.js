
(() => {
  const map = {};

  let longestChain = 0;
  let longestChainVal = 0;
  let chainLength = 0;

  function doCollatz (num) {
    if (map[num]) {
      return chainLength + map[num];
    }

    chainLength++
    if (num === 1) { return chainLength; }
    
    if (num % 2 === 0) {
      return doCollatz(num / 2);
    } else {
      return doCollatz((3 * num) + 1);
    }
  }
  
  for (let i = 1; i < 1000000; i++) {
    chainLength = 0;
    const newChainLength = doCollatz(i);

    if (newChainLength > longestChain) {
      longestChain = newChainLength;
      longestChainVal = i;
      console.log(`Value: ${longestChainVal}; Chain Length: ${longestChain}`);
    }
  }

  console.log(`FINAL; Value: ${longestChainVal}; Chain Length: ${longestChain}`);
})();