import React, { Component } from 'react';
import './App.css';
import fighterData from './fighters/fighterIndex.js';
import formatData from './dataManipulation/fighterDataFormatter';
import SmashApp from './components/SmashApp';

class App extends Component {

  render() {
    const formattedFighterData = formatData(fighterData)
    return (
      <div className="App">
        <header className="App-header">
          SMASH APP
        </header>
        <SmashApp fighterData={formattedFighterData}/>
      </div>
    );
  }
}

export default App;
