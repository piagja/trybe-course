import React from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <Player />
          <Sidebar />
        </main>
      </>
    );
  };
}

export default App;
