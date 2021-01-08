import React, { Component } from 'react'
import './rectangle.css'


class App extends Component {
  constructor(props) {
    super(props)
    this.setColor = this.setColor.bind(this)
    this.state = { 
      color: null 
    }
  }

  componentDidMount () {
    this.setColor()
  }

  setColor () {
    let newColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
    this.setState({color: newColor})
  }

  render () {
    return ( 
      <div className="rectangle" style={{backgroundColor: this.state.color}} onClick={this.setColor}>
      
      </div> 
    )
  }
}
export default App












// import React from 'react'; 
// import BoxContainer from './BoxContainer'

// function App() { 
// return ( 
// 	<div className="App"> 
// 	<BoxContainer /> 
// 	</div> 
// ); 
// } 

// export default App; 

