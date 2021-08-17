import React, { Component } from 'react'

export default class Profile extends Component {
  render () {
    const { ship } = this.props.match.params
    return (
      <div>
        <h1>Meu Perfil: {this.props.name} do navio { ship }</h1>
      </div>
    )
  }
}
