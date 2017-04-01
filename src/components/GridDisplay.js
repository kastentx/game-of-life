import React from 'react'
import { gridStyle } from '../styles'

function GridDisplay(props) {
  return (
    <div style={gridStyle} className='gridBox'>
      {props.gridElements}
    </div>
  )
}

export default GridDisplay
