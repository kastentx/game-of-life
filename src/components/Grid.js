import React, { Component } from 'react'
import { testGrid } from '../styles'
import Cell from './Cell'

class Grid extends Component {
  constructor(props) {
    super()
    var grid=[]
    var living=[]
    for (var row=0; row<12; row++) {
      grid.push([])
      living.push([])
      for (var col=0; col<12; col++) {
        grid[row].push(<Cell row={row} col={col} onClick={this.handleClick}/>)
        living[row].push('false')
      }
    }
    this.state = {
      grid: grid,
      living: living
    }
  }

  handleClick = (e) => {
    var row = e.target.dataset.row
    var col = e.target.dataset.col
    console.log(row,col)

    var livingGrid = this.state.living
    livingGrid[row][col] === 'false' ? this.activate(row, col) : this.deactivate(row, col)
    e.target.getAttribute('clicked') === 'true' ? e.target.removeAttribute('clicked') : e.target.setAttribute('clicked','true')

    console.log(livingGrid)
  }

  activate = (row, col) => {
    var livingGrid = this.state.living
    livingGrid[row][col] = 'true'

    this.setState({
      living: livingGrid
    })
  }

  deactivate = (row, col) => {
    var livingGrid = this.state.living
    livingGrid[row][col] = 'false'

    this.setState({
      living: livingGrid
    })
  }

  render () {
    return (
      <div style={testGrid} className='gridBox'>
        {this.state.grid}
      </div>
    )
  }
}

export default Grid
