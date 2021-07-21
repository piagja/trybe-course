import React, { Component } from 'react'
import './Serie.css'

export default class Serie extends Component {
  render() {
    const { seriesInfo } = this.props;

    return (
      <div class='serie-container'>

        <div>
          <img src={seriesInfo.image} alt='Breaking Bad Poster' />
        </div>

        <div class='serie-card'>
          <h1 class='serie-title'>Serie: {seriesInfo.name}</h1>
          <p class='serie-genre'>Genero: {seriesInfo.genre}</p>
          <p class='serie-characters'>Personagens ~</p>
          <ul class='characters-list'>
            {seriesInfo.characters.map(character => <li class='characters-list__item'>{character}</li>)}
          </ul>
        </div>

      </div>
    )
  }
}
