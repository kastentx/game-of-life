import React from 'react'
import { gridStyle } from '../styles'

function GridDisplay(props) {
  return (
    <div style={gridStyle} className='gridBox'>
      {props.renderGrid()}
    </div>
  )
}

export default GridDisplay
