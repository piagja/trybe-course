import React, { Component } from 'react'
import './Pokemon.css'

class Pokemon extends Component {
  render() {
    const { data } = this.props
    return (
      <section className='poke-container'>

          {data.map(({ id, image, name, type, averageWeight: { value } } ) => (
            <div key={id} className='poke-card'>
              <img src={image} alt={name} className='poke-image' />
              <div className='poke-info'>
                <span className='poke-name'>Name: {name}</span>
                <p className='poke-type'>Type: {type}</p>
                <p className='poke-weight'>Average Weight: {value}kg</p>
              </div>
            </div>
          ))}

      </section>
    )
  }
}

export default Pokemon
