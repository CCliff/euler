let digits = ['2'];

for (let i = 1; i < 1000; i++) {
  let carryOver = 0;
  for (let j = 0; j < digits.length; j++) {
    const newVal = parseInt(digits[j]) * 2 + carryOver;
    carryOver = Math.floor(newVal / 10);
    const newDigit = newVal % 10;

    digits[j] = newDigit.toString();
  }
  if (carryOver) {
    digits.push(carryOver.toString());
  }
}

const finalSum = digits.reduce((agg, curr) => {
  return agg += parseInt(curr);
}, 0);

console.log(finalSum);