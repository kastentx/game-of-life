import React from 'react'

function Controls(props) {
    return (
      <div className='controls' style={{marginTop: '0.5%'}}>
        <div style={{marginLeft: 'auto'}}>
          <button style={{width: '8%', backgroundColor: 'black', color: 'green', margin: 'auto 0.5% auto auto'}} onClick={props.handleRevClick}>Go Back</button>
          <button style={{width: '8%', backgroundColor: 'black', color: 'green', margin: 'auto auto auto auto'}} onClick={props.handleFwdClick}>Go Fwd</button>
        </div>
        <div style={{marginLeft: 'auto'}}>
          <button style={{width: '6%', backgroundColor: 'black', color: 'green', margin: '0.5% 0.5% auto auto'}} onClick={props.handlePlayClick}>Play</button>
          <button style={{width: '6%', backgroundColor: 'black', color: 'red', margin: '0.5% auto auto auto'}} onClick={props.handleStopClick}>Stop</button>
        </div>
      </div>
    )
  }

export default Controls
