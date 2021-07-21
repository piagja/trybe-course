import React, { Component } from 'react'
import Serie from './Serie'

export default class SeriesList extends Component {
  render() {
    const { catalogData } = this.props

    return (
      <div>
        {catalogData.map(serie => <Serie key={serie.id} seriesInfo={serie} />)}
      </div>
    )
  }
}
