import React, { Component } from 'react';
import './App.css';
import fighterData from './fighters/fighterIndex.js';
import SmashApp from './components/SmashApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          SMASH APP
        </header>
        <SmashApp fighterData={fighterData}/>
      </div>
    );
  }
}

export default App;
