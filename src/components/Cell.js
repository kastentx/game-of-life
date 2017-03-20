import React from 'react'
import { testCell } from '../styles'

function Cell(props) {
    return (
      <span style={testCell}>
        [{props.x},{props.y}]
      </span>
    )
  }

export default Cell
