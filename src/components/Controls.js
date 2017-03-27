import React from 'react'

function Controls(props) {
    return (
      <div className='controls' style={{marginTop: '10px'}}>
        <button style={{color: 'green', marginRight: '15px'}}>Go Back</button>
        <button style={{color: 'green'}} onClick={props.handleClick}>Go Fwd</button>
      </div>
    )
  }

export default Controls
