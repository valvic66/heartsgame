import React, { Component } from 'react';
import './App.css';

import Game from './components/smart/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Game />
      </div>
    );
  }
}

export default App;
