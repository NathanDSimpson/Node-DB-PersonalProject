import React, { Component } from 'react';
import './App.css';
import Purchases from './components/Purchases'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Purchases/>
      </div>
    );
  }
}

export default App;
