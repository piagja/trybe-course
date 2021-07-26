import React, { Component } from 'react'
import LoginInput from './LoginInput'
import PasswordForm from './PasswordForm'

export default class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      login: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { login, password } = this.state

    return (
      <section className='login-form'>
        <form>
          <LoginInput value={ login } onChange={ this.handleChange } />
          <br />
          <PasswordForm value={ password } onChange={ this.handleChange } />
        </form>
      </section>
    )
  }
}
