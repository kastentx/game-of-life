import React, { Component } from 'react'
import Heading from './components/Heading'
import Grid from './components/Grid'
import { testGrid } from './styles'

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <Heading />
        <Grid style={testGrid} />
      </div>
    );
  }
}

export default App
