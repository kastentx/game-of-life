function buildlifeGrid(gridUI) {
  var lifeGrid = []
  for (var row=0; row<12; row++) {
    lifeGrid.push([])
    for (var col=0; col<12; col++) {
      gridUI[row][col].props.alive === true ? lifeGrid[row].push(true) : lifeGrid[row].push(false)
    }
  }
  return lifeGrid
}

export function getNeighbors(row, col, gridUI) {
  var score = 0
  var myGrid = buildlifeGrid(gridUI)
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
  return row > 0 ? grid[row-1][col] : 0
}

function checkBottom(row, col, grid) {
  return row < 11 ? grid[row+1][col] : 0
}

function checkLeft(row, col, grid) {
  return col > 0 ? grid[row][col-1] : 0
}

function checkRight(row, col, grid) {
  return col < 11 ? grid[row][col+1] : 0
}

function checkTopLeft(row, col, grid) {
  return col > 0 && row > 0 ? grid[row-1][col-1] : 0
}

function checkTopRight(row, col, grid) {
  return row > 0 && col < 11 ? grid[row-1][col+1] : 0
}

function checkBottomLeft(row, col, grid) {
  return row < 11 && col > 0 ? grid[row+1][col-1] : 0
}

function checkBottomRight(row, col, grid) {
  return row < 11 && col < 11 ? grid[row+1][col+1] : 0
}

 export function debugNeighbors(row, col, grid, score) {
  console.log('cell:', row, col)
  console.log('Top:', checkTop(row, col, grid))
  console.log('TopRight:', checkTopRight(row, col, grid))
  console.log('Right:', checkRight(row, col, grid))
  console.log('BottomRight:', checkBottomRight(row, col, grid))
  console.log('Bottom:', checkBottom(row, col, grid))
  console.log('BottomLeft:', checkBottomLeft(row, col, grid))
  console.log('Left:', checkLeft(row, col, grid))
  console.log('TopLeft:', checkTopLeft(row, col, grid))
  console.log('score:', score)
}
