import React from 'react'
import { testCell } from '../styles'

function Cell(props) {
    return (
      <span style={testCell} x={props.x} y={props.y} className='cell' onClick={props.onClick}>
      </span>
    )
  }

export default Cell
