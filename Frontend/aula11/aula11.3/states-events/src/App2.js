import React, { Component } from 'react'
import colors from './data'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
    }
  }

  render() {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

    const setBackground = (color) => {
      const body = document.getElementsByTagName('body')[0]
      body.style.backgroundColor = color
    }

    return (
      <div className='App'>
        <ul>
          {colors
          .filter((color) => color.name === this.state.color)
          .map(({name, hex}, index) => (
            <React.Fragment key={index}>
              <li key={index}>Color Name: {name}</li>
              <div style={{ backgroundColor: `${hex}`}} height='100px'>Corresponding Hex: {hex}</div>
              <button style={{ margin: '15px 0' }}  onClick={() => setBackground(hex)}>Set Background</button>
            </React.Fragment>
          ))}
        </ul>
        <div>
          <p>Filter colors by name (the colors above, in an array)</p>
          <input type='text' onChange={(e) => this.setState({ color: capitalize(e.target.value) })} />
        </div>

        <hr />

        <div>
          <p>Type a color hex (Use #) or name, i will change the background to this color</p>
          <input type='text' onChange={(e) => setBackground(e.target.value)} />
        </div>

      </div>
    )
  }
}

export default App
