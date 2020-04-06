(() => {

  let count = 2;

  let f1 = '1';
  let f2 = '1';

  function fib () {
    const temp = f2;
    f2 = sum(f1, temp);
    f1 = temp;
    count++;
  }

  function checkDigits (num) {
    const digits = num.toString().split('');
    return digits.length;
  }

  function sum (n1, n2) {
    const result = [];
    const n1d = n1.toString().split('').reverse();
    const n2d = n2.toString().split('').reverse();

    let carryOver = 0;
    for (let i = 0; i < Math.max(n1d.length, n2d.length); i++) {
      const d1 = n1d[i] || 0;
      const d2 = n2d[i] || 0;

      const proxyDigit = (parseInt(d1) + parseInt(d2) + carryOver);
      const newDigit = proxyDigit % 10;
      carryOver = Math.floor(proxyDigit / 10);

      result[i] = newDigit;
    }

    if (carryOver) {
      result.push(carryOver);
    }

    const numberString = result.reverse().join('');
    return numberString;
  }

  while (checkDigits(f2) !== 1000) {
    fib();
  }

  console.log(count, f2);

  // console.log(sum('5', '8'));

})();
