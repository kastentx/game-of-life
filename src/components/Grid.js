import React, { Component } from 'react'
import { testGrid } from '../styles'
import Cell from './Cell'

class Grid extends Component {
  constructor(props) {
    super();
    var grid = [];
    for (var x = 0; x < 12; x++) {
      grid.push([]);
      for (var y = 0; y < 12; y++) {
        grid[x].push(<Cell x={x} y={y}/>);
      }
    }
    this.state = {
      grid: grid
    }
  }

  render () {
    return (
      <div style={testGrid}>
        {this.state.grid}
      </div>
    )
  }
}

export default Grid
