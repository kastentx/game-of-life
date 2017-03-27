import React, { Component } from 'react'
import { testGrid } from '../styles'
import Cell from './Cell'
import {testFunc} from '../utils'

class Grid extends Component {
  constructor(props) {
    super()
    var gridUI=[]
    var life=[]
    for (var row=0; row<12; row++) {
      gridUI.push([])
      life.push([])
      for (var col=0; col<12; col++) {
        gridUI[row].push(<Cell row={row} col={col} onClick={this.handleClick}/>)
        life[row].push('false')
      }
    }
    this.state = {
      gridUI: gridUI,
      life: life
    }
  }

  handleClick = (e) => {
    var row = e.target.dataset.row
    var col = e.target.dataset.col

    // debug msg
    console.log(row,col,'clicked')

    var lifeGrid = this.state.life
    lifeGrid[row][col] === 'false' ? this.activate(row, col) : this.deactivate(row, col)
    e.target.getAttribute('clicked') === 'true' ? e.target.removeAttribute('clicked') : e.target.setAttribute('clicked','true')

    // wiring in the helper/utility functions..
    testFunc(this.state.life)
  }

  activate = (row, col) => {
    var lifeGrid = this.state.life
    lifeGrid[row][col] = 'true'

    this.setState({
      life: lifeGrid
    })
  }

  deactivate = (row, col) => {
    var lifeGrid = this.state.life
    lifeGrid[row][col] = 'false'

    this.setState({
      life: lifeGrid
    })
  }

  render () {
    return (
      <div style={testGrid} className='gridBox'>
        {this.state.gridUI}
      </div>
    )
  }
}

export default Grid
