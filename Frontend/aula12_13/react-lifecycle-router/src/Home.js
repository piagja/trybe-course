import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render () {
    return (
      <div>
        <h1>My Homepage</h1>
        <Link to='/about'>About</Link>
      </div>
    )
  }
}
