(() => {
  const state = {
    EXISTS: '1',
    DOWN_ONLY: '2',
    EXHAUSTED: '3',
  }

  const gridSize = 2;

  // [
  //   [1, 1, 2],
  //   [0, 0, 2],
  //   [0, 0, 2],
  // ]
  // [
  //   [1, 2, 0],
  //   [0, 1, 2],
  //   [0, 0, 2],
  // ]
  // [
  //   [1, 2, 0],
  //   [0, 1, 2],
  //   [0, 0, 2],
  // ]
  
  function createGrid (size) {
    const grid = [];
    for (let i = 0; i <= size; i++) {
      const row = [];
      
      for (let j = 0; j <= size; j++) {
        row[j] = state.EXISTS;
      }
      grid[i] = row;
    }

    return grid;
  }

  function canGoRight (grid, point) {
    // console.log(grid[point.y][point.x + 1]);
    return !!grid[point.y][point.x + 1];
  }

  function goRight (point) {
    return {
      x: point.x + 1,
      y: point.y
    };
  }

  function canGoDown (grid, point) {
    // console.log(grid[point.y + 1], grid[point.y + 1][point.x])
    return !!(grid[point.y + 1] && grid[point.y + 1][point.x]);
  }

  function goDown (point) {
    return {
      x: point.x,
      y: point.y + 1
    };
  }

  function calculateOptions (grid) {
    const start = {
      x: 0, 
      y: 0
    };
    const finish = {
      x: grid.length - 1,
      y: grid[grid.length - 1].length - 1
    };
    let current = {
      x: start.x,
      y: start.y
    };

  //   for (let y = start.y; y < grid.length; y ++) {
  //     for (let x = start.x; x < grid[y].length; x++) {

  //       // if (finish.x === x && finish.y === y) {
  //       //   break;
  //       // }
  //       if (canGoRight(grid, {x, y})) {
  //         current = goRight({x, y});
  //         continue;
  //       }

  //       if (canGoRight(grid, {x, y})) {
  //         current = goRight({x, y});
  //         continue;
  //       }
  //     }
  //   }

    while (grid[current.y][current.x] !== state.EXHAUSTED || current.x !== finish.x || current.y !== finish.y) {
      // console.log(current, finish);
      if (canGoRight(grid, current)) {
        console.log('RIGHT');
        current = goRight(current);
        continue;
      }
      if (canGoDown(grid, current)) {
        console.log('DOWN');
        grid[current.y][current.x] = state.EXHAUSTED;
        current = goDown(current);
        continue;
      }

      break;
    }
    console.log(grid);
  }





  // console.log(createGrid(gridSize));
  calculateOptions(createGrid(gridSize));

})();