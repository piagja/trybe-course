import { render } from '@testing-library/react';
import React from 'react';

class Sidebar extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const { categories } = this.props
    return (
      <aside>
        {
          categories.map(category => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map(movie => (
                    <li key={movie.id}>{movie.title} was released in {movie.released}
                      <button type="button" onClick={() => alert('Filme Selecionado')}>
                        Select
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    )
  }
};

export default Sidebar
