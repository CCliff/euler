(() => {

  function includesRemainder (map, r) {
    return map.find((a) => {
      return a[0] === r;
    });
  }

  let max = 0;
  for (var i = 2; i < 1000; i++) {
    const map = {};

    let r = 1;
    let y = 0;
    let repeats = true;

    let num = '0.';

    let index = 0;

    while (true) {
      const prevR = r;
      r *= 10;
      y = Math.floor(r / i);
      r = r % i;


      // If the remainder is 0, we have a non-repeating answer
      if (r === 0) {
        repeats = false;
        break;
      }

      num += y.toString();
      // Create an array for the value of mapped r if it does not exist
      map[prevR] = map[prevR] ? map[prevR] : [];


      // Check if the new remainder is mapped to the value passed through
      const repeat = includesRemainder(map[prevR], r);
      if (repeat) {
        // get the digits that are repeated
        const repeatedCount = index - repeat[1];
        console.log(i, num, 'REPEATS', repeatedCount);

        // check to see if that is the highest
        max = Math.max(max, repeatedCount);
        break;
      } else {
        // add an array with the remainder and the index so we can check to see if there is a repeat and then are able to calculate the number of digits. 
        map[prevR].push([r, index]);
      }

      index++;
    }

  }
  
  console.log(max);

})() ;