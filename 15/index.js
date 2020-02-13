const gridSize = 3;
let paths = 1;
 
for (let i = 0; i < gridSize; i++) {
    paths *= (2 * gridSize) - i;
    paths /= i + 1;
}

console.log(paths)