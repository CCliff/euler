(() => {
  const num = process.argv[2] || 10;
  const digits = ['1'];

  for (let i = num; i > 0; i --) {
    let carryOver = 0;
    for (let j = 0; j < digits.length; j++) {
      const digit = parseInt(digits[j]);
      const newNum = (digit * i) + carryOver;
      const newNumDigits = newNum.toString().split('');
      const ones = newNumDigits[newNumDigits.length - 1];
      digits[j] = ones.toString();
      carryOver = (newNum - ones) / 10;
      // console.log(digit, newNum, ones, carryOver);
    }
    if (carryOver) {
      carryOver.toString().split('').reverse().forEach((num) => {
        digits.push(num);
      });
    }
  } 

  const sol = digits.reduce((acc, cur) => {
    return acc += parseInt(cur);
  }, 0);

  console.log(sol);
})();