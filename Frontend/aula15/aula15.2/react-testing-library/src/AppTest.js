import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      joke: '',
  }
}

  async componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const response = await fetch(API_URL, { headers: { Accept: 'application/json' } })
    const data = await response.json()

    this.setState({ joke: data.joke })
    console.log(data)
  }

  render() {
    const { joke } = this.state;
    return (
      <div data-testid="joke-element">
        <h1>{joke}</h1>
      </div>
    )
  }
}
