import React, { Component } from 'react'
import Cell from './Cell'
import Controls from './Controls'
import GridDisplay from './GridDisplay'
import { getNeighbors } from '../utils'

class Grid extends Component {
  constructor(props) {
    super()
    var gridUI=[]
    var life=[]
    for (var row=0; row<12; row++) {
      gridUI.push([])
      life.push([])
      for (var col=0; col<12; col++) {
        gridUI[row].push(<Cell row={row} col={col} handleClick={this.handleCellClick} alive={false}/>)
        life[row].push(false)
      }
    }
    this.state = {
      gridUI: gridUI,
      life: life
    }

    this.renderChildren = this.renderChildren.bind(this)
  }

  handleCellClick = (e) => {
    var row = e.target.dataset.row
    var col = e.target.dataset.col
    var lifeGrid = this.state.life

    lifeGrid[row][col] === false ? this.activate(row, col) : this.deactivate(row, col)
    // this line is commented out because I'm trying to apply these styles when rendering
    //e.target.getAttribute('clicked') === 'true' ? e.target.removeAttribute('clicked') : e.target.setAttribute('clicked', 'true')

    // wiring in the helper/utility functions..
    if (e.target.getAttribute('clicked') === 'true') console.log(getNeighbors(row,col,this.state.life))
  }

  renderChildren = (props) => {
    return React.Children.map(props.children, child => {
      if (props.lifeGrid[child.props.col][child.props.row] === true) {
        return React.cloneElement(child, {
          alive: true
        })
      } else {
        return child
      }
    })
  }

  advance = () => {
    var newGrid = []
    for (var row=0; row<12; row++) {
      newGrid.push([])
      for (var col=0; col<12; col++) {
        newGrid[row].push(false)
      }
    }
    this.setState({
      life: newGrid
    })
  }

  activate = (row, col) => {
    var lifeGrid = this.state.life
    lifeGrid[row][col] = true

    this.setState({
      life: lifeGrid
    })
  }

  deactivate = (row, col) => {
    var lifeGrid = this.state.life
    lifeGrid[row][col] = false

    this.setState({
      life: lifeGrid
    })
  }

  render () {
    return (
      <div>
        <Controls handleClick={this.advance}/>
        <GridDisplay renderChildren={this.renderChildren} lifeGrid={this.state.life}>
          {this.state.gridUI}
        </GridDisplay>
      </div>
    )
  }
}

export default Grid
