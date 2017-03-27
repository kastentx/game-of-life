
/*
export function testFunc(lifeGrid) {
  for (var row=0; row<12; row++) {
    for (var col=0; col<12; col++) {
      if (lifeGrid[row][col] === 'true') {
        console.log(row,col,'is alive')
      }
    }
  }
}
*/


export function getNeighbors(row, col, myGrid) {
  var score = 0
  row = Number(row)
  col = Number(col)

  score += checkTop(row, col, myGrid)
  score += checkBottom(row, col, myGrid)
  score += checkLeft(row, col, myGrid)
  score += checkRight(row, col, myGrid)
  score += checkTopLeft(row, col, myGrid)
  score += checkTopRight(row, col, myGrid)
  score += checkBottomLeft(row, col, myGrid)
  score += checkBottomRight(row, col, myGrid)
  // check all 8 neighbors for life

  //score += grid[row-1][col-1] ? 1 : 0
  //score += grid[row-1][col] ? 1 : 0
  //score += grid[row-1][col+1] ? 1 : 0
  //score += grid[row+1][col-1] ? 1 : 0
  // score += grid[row+1][col] ? 1 : 0
  //score += grid[row+1][col+1] ? 1 : 0
  //score += grid[row][col-1] ? 1 : 0
  //score += grid[row][col+1] ? 1 : 0

  return score
}

function checkTop(row, col, grid) {
  return row ? grid[row-1][col] : 0
}

function checkBottom(row, col, grid) {
  return row < 11 ? grid[row+1][col] : 0
}

function checkLeft(row, col, grid) {
  return col ? grid[row][col-1] : 0
}

function checkRight(row, col, grid) {
  return col < 11 ? grid[row][col+1] : 0
}

// breakski

function checkTopLeft(row, col, grid) {
  return col && row ? grid[row-1][col-1] : 0
}

function checkTopRight(row, col, grid) {
  return row && col < 11 ? grid[row-1][col+1] : 0
}

function checkBottomLeft(row, col, grid) {
  return row < 11 && col ? grid[row+1][col-1] : 0
}

function checkBottomRight(row, col, grid) {
  return row < 11 && col < 11 ? grid[row+1][col+1] : 0
}
