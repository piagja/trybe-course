import React, { Component } from 'react'
import EstadoFavorito from './estadoFavorito'
import './Form.css'

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    }
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({ 
      [name]: value 
    })
  }

  render() {
    return (
      <div>
        <h1>Estados e React: ferramenta incrível ou reagindo a regionalismos</h1>
        <fieldset>
          <EstadoFavorito 
            value={this.state.estadoFavorito} 
            handleChange={this.handleChange} />

          <form className='form'>

            <label>
              Email
              <input 
                type='email' 
                name='email' 
                value={this.state.email} 
                onChange={this.handleChange} />
            </label>

            <label>
              Nome
              <input type='text' name='nome' 
              value={this.state.nome} 
              onChange={this.handleChange} />
            </label>

            <label>
              Idade
              <input type='number' name='idade' 
              value={this.state.idade} 
              onChange={this.handleChange} />
            </label>

            <label>
              Vai comparecer ao evento?
              <input 
                type='checkbox' 
                name='vaiComparecer' 
                onChange={this.handleChange} />
            </label>

            <label>
              Escolha sua palavra chave favorita:
              <select name='palavraChaveFavorita' onChange={this.handleChange}>
                <option value='estado'>Estado</option>
                <option value='evento'>Evento</option>
                <option value='props'>Props</option>
                <option value='hooks'>Hooks</option>
              </select>
            </label>
          </form>
        </fieldset>
      </div>
    )
  }
}

export default Form
