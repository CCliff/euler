function isPythag (a, b, c) {
  return a**2 + b**2 === c**2;
}

function isEqual (a, b, c, limit) {
  return a + b + c === limit;
}

const limit = 1000;

let a = 1;
let b = 2;
let c = limit - a - b;

while (b < limit) {
  if (a < b && b < c) {
    if (isPythag(a, b, c)) {
      if (isEqual(a, b, c, limit)) {
        return console.log('SOLVED;', `A: ${a}, B: ${b}, C: ${c};`, `PRODUCT: ${a * b * c};`);
      }
    }
  }

  b++;

  if (b === limit) {
    a++;
    b = 0;
  }

  c = limit - a - b;
}