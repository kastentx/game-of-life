import React, { Component } from 'react'
import Cell from './Cell'
import Controls from './Controls'
import GridDisplay from './GridDisplay'
import { getNeighbors } from '../utils'

class Grid extends Component {
  constructor(props) {
    super()
    var gridUI = []

    this.state = {
      gridUI: gridUI
    }

    for (var row=0; row<12; row++) {
      gridUI.push([])
      for (var col=0; col<12; col++) {
        gridUI[row].push(<Cell row={row} col={col} handleClick={this.handleCellClick} alive={false}/>)
      }
    }
  }

  handleCellClick = (e) => {
    var row = Number(e.target.dataset.row)
    var col = Number(e.target.dataset.col)
    var newGrid = this.state.gridUI

    newGrid[row][col] = newGrid[row][col].props.alive !== true ? React.cloneElement(newGrid[row][col], { alive: true }) : React.cloneElement(newGrid[row][col], { alive: false })

    console.log(newGrid[row][col].props)

    this.setState({
      gridUI: newGrid
    })
  }

  advance = () => {
    var newGrid = this.state.gridUI
    for (var row=0; row<12; row++) {
      for (var col=0; col<12; col++) {
        if (getNeighbors(row,col,this.state.life) < 2)
          newGrid[row][col] = React.cloneElement(newGrid[row][col], { alive: false })
        else
          console.log(row,col,'has')
      }
    }
    this.setState({
      gridUI: newGrid
    })
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
