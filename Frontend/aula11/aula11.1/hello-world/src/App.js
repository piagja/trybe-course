import React, { Component } from 'react'
import Number from './Number'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      name: 'Japa',
      text: '',
      isLoading: true,
      loaded: false
    }
  }

  render() {
    const { count, name, text, isLoading, loaded } = this.state

    const increment = () => {
      this.setState({ count: count + 1 })
    }
    
    const decrement = () => {
      this.setState({ count: count - 1 })
    }

    const changeName = (name) => {
      this.setState({ name: name })
    }

    const handleChange = (e) => {
      this.setState({ text: e.target.value })
    }

    const timeout = () => {
      setTimeout(() => {
        this.setState({ isLoading: false })
        this.setState({ loaded: true })
      }, 2000)
    }

    return (
      <div>
        <section>
          <p>DIGITE O QUE QUISER</p>
          <p>{count}</p>
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => decrement()}>Decrement</button>
        </section>

        <section>
          <p>MUDE MEU NOME</p>
          <p>{name}</p>
          <button onClick={() => changeName('Suco')}>Change Name</button>
        </section>

        <section>
          <p>MUDE MEU NOME</p>
          <p>{text}</p>
          <input type='text' onMouseOver={(ev) => handleChange(ev)} />
        </section>

        <section>
          {isLoading ? <h1>Carregando a lista de pokemons ...</h1> : <h1>Name: Pikachu</h1> }
          {loaded && <Number />}
          {isLoading && <button onClick={() => timeout()}>Timeout</button>}
        </section>
      </div>
    )
  }
}

// usando hooks desde ja!
// import React, { useState } from 'react'

// export default function App() {
//   const [ name, setName ] = useState('') // useState = hook
//   const [ count, setCount ] = useState(0)
//   const [ text, setText ] = useState('')

//   const changeName = (name) => {
//     setName(name)
//   }

//   const increment = () => {
//     setCount(count + 1)
//   }

//   const decrement = () => {
//     setCount(count - 1)
//   }

//   const handleChange = (event) => {
//     setText(event.target.value)
//   }

//   return (
//     <div>
//       <section>
//         <p>MOSTRE MEU NOME</p>
//         <p>{name}</p>
//         <button onClick={() => changeName('Japa')}>Show Ma Name</button>
//       </section>

//       <section>
//         <p>INCREMENTE O CONTADOR</p>
//         <p>{count}</p>
//         <button onClick={() => increment()}>Increment</button>
//         <button onClick={() => decrement()}>Decrement</button>
//       </section>

//       <section>
//         <p>DIGITE O QUE QUISER</p>
//         <p>{text}</p>
//         <input type='text' onChange={handleChange} value={text} />
//       </section>
//     </div>
//   )
// }
