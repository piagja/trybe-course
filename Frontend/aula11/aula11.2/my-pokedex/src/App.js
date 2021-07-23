import React, { Component } from 'react'
import pokemon from './api/data'
import Pokemon from './components/Pokemon'
import '../App.css';

class App extends Component {
  render() {
    return (
      <main>
        <h1 style={{
            textAlign: 'center', 
            fontSize: '3rem',
            letterSpacing: '16px'
          }}>Pokedex</h1>

        <Pokemon data={pokemon} />
      </main>
    )
  }
}

export default App