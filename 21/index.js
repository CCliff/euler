(() => {
  let sol = 0;
  const map = {};

  for (let i = 2; i < 10000; i++) {
    let sum = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        sum += j;
      }
    }
    map[i] = sum;

    if (sum !== i && map[sum] && map[sum] == i) {
      sol += sum + i;
    }
  }

  console.log(sol);
})();