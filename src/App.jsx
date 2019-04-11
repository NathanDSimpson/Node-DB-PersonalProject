import React, { Component } from 'react';
import './App.css';
import Purchases from './components/Purchases'


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Budget</h1>
      <Purchases/>
      </div>
    );
  }
}

export default App;
