import React, { Component } from 'react'
import Cell from './Cell'
import Controls from './Controls'
import GridDisplay from './GridDisplay'
import { getNeighbors } from '../utils'

class Grid extends Component {
  constructor(props) {
    super()
    var gridUI = []

    for (var row=0; row<12; row++) {
      gridUI.push([])
      for (var col=0; col<12; col++) {
        gridUI[row].push(<Cell row={row} col={col} handleClick={this.handleCellClick} alive={false}/>)
      }
    }
    this.state = {
      gridUI: gridUI,
      intervalID: ''
    }
  }

  handleCellClick = (e) => {
    var row = e.target.dataset.row
    var col = e.target.dataset.col

    this.state.gridUI[row][col].props.alive !== true ? this.activate(row, col) : this.deactivate(row, col)

    // display info on clicked cell in console
    console.log(this.state.gridUI[row][col].props)
  }

  advance = () => {
    var toggleList = []
    for (var row in this.state.gridUI) {
      for (var col in this.state.gridUI[row]) {
        if ((this.state.gridUI[row][col].props.alive === true &&
         (getNeighbors(row,col,this.state.gridUI) !== 3 && getNeighbors(row,col,this.state.gridUI) !== 2)) ||
         (this.state.gridUI[row][col].props.alive === false &&
         getNeighbors(row,col,this.state.gridUI) === 3)) {
           toggleList.push({row: row, col: col})
         }
      }
    }
    toggleList.forEach(cell => {
      this.state.gridUI[cell.row][cell.col].props.alive !== true ? this.activate(cell.row, cell.col) : this.deactivate(cell.row, cell.col)
    })
  }

  play = () => {
    this.state.intervalID = setInterval(() => { this.advance() }, 500)
  }

  stop = () => {
    clearInterval(this.state.intervalID)
  }

  activate = (row, col) => {
    var newGrid = this.state.gridUI
    newGrid[row][col] = React.cloneElement(newGrid[row][col], { alive: true })
    this.setState({
      gridUI: newGrid
    })
  }

  deactivate = (row, col) => {
    var newGrid = this.state.gridUI
    newGrid[row][col] = React.cloneElement(newGrid[row][col], { alive: false })
    this.setState({
      gridUI: newGrid
    })
  }

  render () {
    return (
      <div>
        <Controls handleFwdClick={this.advance} handlePlayClick={this.play} handleStopClick={this.stop}/>
        <GridDisplay gridElements={this.state.gridUI}/>
      </div>
    )
  }
}

export default Grid
