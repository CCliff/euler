(() => {
  const fs = require('fs');
  const path = require('path');
  const file = path.join(__dirname,'./names.txt');

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) { throw err; }
    solve(data.replace(/\"/g, '').split(','));
  });

  function solve (data) {
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const sortedNames = data.sort();
    const totalSum = sortedNames.reduce((acc, name, i) => {
      const nameValue = name.split('').reduce((acc, char) => {
        return acc += alpha.indexOf(char) + 1;
      }, 0);
      return acc += nameValue * (i + 1);
    }, 0);

    console.log(totalSum);
  }

})();