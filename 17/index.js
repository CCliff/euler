(() => {

  const translations = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
  }

  function pad (num) {
    const length = 4;
    let string = num.toString();
    while (string.length < length) {
      string = '0' + string;
    }

    return string
  }

  function translate (num) {
    let translation = '';
    const numString = pad(num);
    const digits = numString.split('');

    const thDigit = parseInt(digits[0]);
    const hDigit = parseInt(digits[1]);
    const tDigit = parseInt(digits[2]);
    const oDigit = parseInt(digits[3]);

    if (thDigit) {
      translation += `${translations[thDigit]}${translations[1000]}`;
    }

    if (hDigit) {
      const and = tDigit || oDigit ? 'and' : '';
      translation += `${translations[hDigit]}${translations[100]}${and}`;
    }

    if (tDigit === 1 && translations[tDigit * 10 + oDigit]) {
      translation += `${translations[tDigit * 10 + oDigit]}`;
      return translation;
    }

    if (tDigit) {
      translation += `${translations[tDigit * 10]}`;
    }

    if (oDigit) {
      translation += `${translations[oDigit]}`;
    }

    return translation;
  }

  // const num = process.argv[2] || 1;
  // console.log(translate(num));

  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    sum += translate(i.toString()).length;
  }

  console.log(sum);

})();