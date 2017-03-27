export function testFunc(lifeGrid) {
  for (var row=0; row<12; row++) {
    for (var col=0; col<12; col++) {
      if (lifeGrid[row][col] === 'true') {
        console.log(row,col,'is alive')
      }
    }
  }
}
