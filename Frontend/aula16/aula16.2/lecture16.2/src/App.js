import React from 'react';
import categories from './data';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: categories,
      selectedCategory: {
        name:'action'
      },
      selectedMovie: {
        title:'Matrix 1',
        released: 1999,
      },
    }
  }

  render() {
    const {categories, selectedCategory, selectedMovie} = this.state
    return (
      <>
        <Header />
        <main className="main">
          <Player selectedCategory={selectedCategory} selectedMovie={selectedMovie}/>
          <Sidebar categories={categories} />
        </main>
      </>
    );
  };
}

export default App;
