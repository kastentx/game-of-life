import React, { Component } from 'react'
import { testGrid } from '../styles'
import Cell from './Cell'

class Grid extends Component {
  constructor(props) {
    super()
    var grid=[]
    for (var x=0; x<12; x++) {
      grid.push([])
      for (var y=0; y<12; y++) {
        grid[x].push(<Cell x={x} y={y} onClick={this.handleClick}/>)
      }
    }
    this.state = {
      grid: grid
    }
  }

  handleClick(e) {
    console.log(e.target.getAttribute('x'),e.target.getAttribute('y'))
    e.target.getAttribute('clicked') === 'true' ? e.target.removeAttribute('clicked') : e.target.setAttribute('clicked','true')
  }

  toggleColor() {

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
