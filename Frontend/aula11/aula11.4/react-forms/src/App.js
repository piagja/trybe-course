import React, { Component } from 'react'
import LoginForm from './components/LoginForm'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <section className='section-login'>
        <LoginForm />
      </section>
    )
  }
}
