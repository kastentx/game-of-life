export function advance(lifeGrid) {
  var newGrid = []
  for (var row=0; row<12; row++) {
    newGrid.push([])

    for (var col=0; col<12; col++) {
      newGrid[row].push(false)
    }
  }
  return newGrid
}

export function getNeighbors(row, col, myGrid) {
  var score = 0
  row = Number(row)
  col = Number(col)

  // check all 8 potential neighbor locations
  score += checkTop(row, col, myGrid)
  score += checkBottom(row, col, myGrid)
  score += checkLeft(row, col, myGrid)
  score += checkRight(row, col, myGrid)
  score += checkTopLeft(row, col, myGrid)
  score += checkTopRight(row, col, myGrid)
  score += checkBottomLeft(row, col, myGrid)
  score += checkBottomRight(row, col, myGrid)
  
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
