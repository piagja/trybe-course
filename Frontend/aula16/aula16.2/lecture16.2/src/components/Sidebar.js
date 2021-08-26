import { connect } from 'react-redux';
import React from 'react';
import { actionSelectMovie } from '../actions/actions';

class Sidebar extends React.Component {
  render(){
    const { categories, handleSelectMovie,  } = this.props;

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
                      <button type="button" onClick={() => handleSelectMovie(movie, category)}>
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

// connect tem dois parametros
// connect(1 ler - stateToProps)(2 escrever - dispatchToProps)

// com o mapStateToProps - quero pegar todo o estado do redux e passar via props
const mapStateToProps = (state) => {
  return ({
    categories: state.movieReducer.categories
  })
}

// com o mapDispatchToProps - recebe o dispatch como param e retorna um objeto
const mapDispatchToProps = (dispatch) => {
  return ({
    handleSelectMovie: (movie, category) => dispatch(actionSelectMovie(movie, category))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
