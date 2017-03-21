import React from 'react'
import { testCell } from '../styles'

function Cell(props) {
    return (
      <div style={testCell} data-row={props.row} data-col={props.col} className='cell' onClick={props.onClick}>
      </div>
    )
  }

export default Cell
