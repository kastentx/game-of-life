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
      gridUI: gridUI
    }
  }

  handleCellClick = (e) => {
    var row = Number(e.target.dataset.row)
    var col = Number(e.target.dataset.col)
    var newGrid = this.state.gridUI

    newGrid[row][col] = newGrid[row][col].props.alive !== true ? React.cloneElement(newGrid[row][col], { alive: true }) : React.cloneElement(newGrid[row][col], { alive: false })

    // display info on clicked cell in console
    console.log(newGrid[row][col].props)

    this.setState({
      gridUI: newGrid
    })
  }

  // find a way to mark the tiles for removal without changing the 'alive' status
  // this will correct a bug where tile get killed off before others get counted
  advance = () => {
    var markedForDeath = []
    var newGrid = this.state.gridUI
    for (var row=0; row<12; row++) {
      for (var col=0; col<12; col++) {
        if (this.state.gridUI[row][col].props.alive === true && getNeighbors(row,col,this.state.gridUI) < 3) {
          markedForDeath.push({row: row, col: col})
          // console.log(row,col,this.state.gridUI[row][col].props.alive)
          // console.log('todie:',goingToDie)
        }
          //newGrid[row][col] = React.cloneElement(newGrid[row][col], { alive: false })
        // else
          // what to do with tiles that stay alive?
      }
    }

    // once death list has been completed, deactivate the cells from that list
    markedForDeath.forEach(cell => {
      this.deactivate(cell.row,cell.col)
    })


/*
    this.setState({
      gridUI: newGrid
    })
*/
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
        <Controls handleClick={this.advance}/>
        <GridDisplay gridElements={this.state.gridUI}/>
      </div>
    )
  }
}

export default Grid
