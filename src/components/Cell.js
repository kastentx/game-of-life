import React, { PropTypes } from 'react'
import { clickStyle, defaultStyle } from '../styles'

function Cell(props) {
    return (
      <div style={props.alive ? clickStyle : defaultStyle} data-row={props.row} data-col={props.col} className='cell' onClick={props.handleClick} >
      </div>
    )
  }

Cell.proptypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  alive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Cell
