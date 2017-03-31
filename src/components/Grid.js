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
    this.state = {
      gridUI: gridUI,
      life: life
    }
    for (var row=0; row<12; row++) {
      gridUI.push([])
      life.push([])
      for (var col=0; col<12; col++) {
        life[row].push(false)
        gridUI[row].push(<Cell row={row} col={col} handleClick={this.handleCellClick} alive={false}/>)
      }
    }

    this.renderChildren = this.renderChildren.bind(this)
  }

  handleCellClick = (e) => {
    var row = Number(e.target.dataset.row)
    var col = Number(e.target.dataset.col)
    var lifeGrid = this.state.life
    var newGrid = this.state.gridUI

    lifeGrid[row][col] === false ? this.activate(row, col) : this.deactivate(row, col)
    // this line is commented out because I'm trying to apply these styles when rendering
    // e.target.getAttribute('clicked') === 'true' ? e.target.removeAttribute('clicked') : e.target.setAttribute('clicked', 'true')
    newGrid[row][col] = newGrid[row][col].props.alive !== true ? React.cloneElement(newGrid[row][col], { alive: true }) : React.cloneElement(newGrid[row][col], { alive: false })
    console.log(newGrid[row][col].props)
    this.setState({
      gridUI: newGrid
    })
    // wiring in the helper/utility functions..
    // if (e.target.getAttribute('clicked') === 'true') console.log(getNeighbors(row,col,this.state.life))
  }

  renderChildren = (props) => {
    return React.Children.map(props.children, child => {
      if (props.lifeGrid[child.props.col][child.props.row] === true) {
        // alert(child.props.col + ' ' + child.props.row)
        return child
      } else {
        return child
      }
    })
  }

  advance = () => {
    var newGrid = this.state.gridUI
    for (var row=0; row<12; row++) {
      for (var col=0; col<12; col++) {
        if (getNeighbors(row,col,this.state.life) < 3)
          newGrid[row][col] = React.cloneElement(newGrid[row][col], { alive: false })

      }
    }
    this.setState({
      gridUI: newGrid
    })
  }

  activate = (row, col) => {
    var lifeGrid = this.state.life
    lifeGrid[row][col] = true
    console.log(getNeighbors(row,col,lifeGrid))

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
