import React from 'react'

function Controls(props) {
    return (
      <div className='controls' style={{marginTop: '15px'}}>
        <div>
          <button style={{color: 'green', marginRight: '15px'}} onClick={props.handleRevClick}>Go Back</button>
          <button style={{color: 'green'}} onClick={props.handleFwdClick}>Go Fwd</button>
        </div>
        <div>
          <button style={{color: 'green', marginTop: '10px'}} onClick={props.handlePlayClick}>Play</button>
          <button style={{color: 'red', marginTop: '10px'}} onClick={props.handleStopClick}>Stop</button>
        </div>
      </div>
    )
  }

export default Controls
