import React, { Component } from 'react';
import './App.css';
import Purchases from './components/Purchases'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Purchases/>
      </div>
    );
  }
}

export default App;


// TODO:
// - sort all purchases by date
// - allow sort by amount
// - reset button for filters
// - allow multiple filters at once**
// - 
// -
// -
// -
// -