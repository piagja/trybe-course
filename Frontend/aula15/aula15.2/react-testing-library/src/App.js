import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          Nome:
          <input
            onChange={(e) => this.handleInput(e)}
            name='nome'
            value={this.state.nome}
            data-testid='input-nome'
          />
        </p>
        <p>
          E-mail:
          <input
            onChange={(e) => this.handleInput(e)}
            name='email'
            value={this.state.email}
            data-testid='input-email'
          />
        </p>
        <h2>nome: {this.state.nome}</h2>
        <h2>email: {this.state.email}</h2>
      </div>
    );
  }
}

export default App;