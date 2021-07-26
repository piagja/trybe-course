import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)

    this.state = {
      count: 0
    }
  }

  increment() {
    console.log('Incremented by 1')
    this.setState((prevState, _props) => ({
      count: prevState.count + 1
    }))
  }

  decrement() {
    console.log('Decremented by 1')
    this.setState((prevState, _props) => ({
      count: prevState.count - 1
    }))
  }

  buttonColor(num) {
    if (num % 2 === 0) {
      return 'green'
    } else {
      return 'red'
    }
  }

  render() {
    return (
      <div>
        <button style={{backgroundColor: this.buttonColor(this.state.count)}} onClick={this.increment}>Increment</button>
        <button style={{backgroundColor: this.buttonColor(this.state.count)}} onClick={this.decrement}>Decrement</button>
        <p>Número de cliques: {this.state.count}</p>
      </div>
    )
  }
}

export default App;