import React, { Component } from 'react'
import Cell from './Cell'
import Controls from './Controls'
import GridDisplay from './GridDisplay'
import { getNeighbors } from '../utils'
import update from 'immutability-helper'

class Grid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myGrid: Array(12).fill(0).map(x => Array(12).fill(0)),
      gridHistory: [Array(12).fill(0).map(x => Array(12).fill(0))]
    }
  }

  handleCellClick = (e) => {
    var row = e.target.dataset.row
    var col = e.target.dataset.col
    var alive = Number(e.target.dataset.alive)

    alive ? this.deactivate(row, col) : this.activate(row, col)

    // display info on clicked cell in console
    console.log(`row: ${row} col: ${col} alive: ${alive}`)
  }

  advance = () => {
    var toggleList = []
    const currGrid = this.state.myGrid.slice()
    var gridCopy = Array(12).fill(0).map(x => Array(12).fill(0))

    currGrid.forEach((row, i) => {
      row.forEach((cell, j) => {
        if ((cell === 1 &&
         (getNeighbors(i,j,currGrid) !== 3 && getNeighbors(i,j,currGrid) !== 2)) ||
         (cell === 0 &&
         getNeighbors(i,j,currGrid) === 3)) {
           toggleList.push({ row: i, col: j })
         }
        // DEEP COPY of current grid
        gridCopy[i][j] = cell ? 1 : 0
      })
    })

    this.setState({
      gridHistory: update(this.state.gridHistory, { $push: [gridCopy] })
    })

    toggleList.forEach(cell => {
      currGrid[cell.row][cell.col] === 0 ? this.activate(cell.row, cell.col) : this.deactivate(cell.row, cell.col)
    })
  }

  rewind = () => {
    if (this.state.gridHistory.length === 0) {
      alert('nothing in the history!!')
    } else {
      this.setState({
        myGrid: this.state.gridHistory.pop()
      })
    }
  }

  play = () => {
    this.intervalID = setInterval(() => { this.advance() }, 500)
  }

  stop = () => {
    clearInterval(this.intervalID)
  }

  activate = (row, col) => {
    var newGrid = this.state.myGrid.slice()
    newGrid[row][col] = 1

    this.setState({
      myGrid: newGrid
    })
  }

  deactivate = (row, col) => {
    var newGrid = this.state.myGrid.slice()
    newGrid[row][col] = 0

    this.setState({
      myGrid: newGrid
    })
  }

  renderGrid = () => {
    const myState = this.state.myGrid.slice()
    let gridCells = []

    myState.forEach((row, i) => {
      gridCells.push([])
      row.forEach((cell, j) => {
        gridCells[i][j] = <Cell row={i} col={j} handleClick={this.handleCellClick} alive={cell}/>
      })
    })
    return gridCells
  }

  render () {
    return (
      <div>
        <Controls handleFwdClick={this.advance} handleRevClick={this.rewind} handlePlayClick={this.play} handleStopClick={this.stop}/>
        <GridDisplay renderGrid={this.renderGrid}/>
      </div>
    )
  }
}

export default Grid
