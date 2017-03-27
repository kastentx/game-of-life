import React from 'react'
import { gridStyle } from '../styles'

function GridDisplay(props) {
  return (
    <div style={gridStyle} className='gridBox'>
      {props.renderChildren(props)}
    </div>
  )
}

export default GridDisplay
