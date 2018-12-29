import React, { Component } from 'react';
import './App.css';
import fighterData from './fighters/fighterIndex.js';
import formatData from './dataManipulation/fighterDataFormatter';
import attributtonClick from './clickHandlers/attributtonClick';
import SmashApp from './components/SmashApp';
import Attributtons from './components/attributtons/Attributtons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAttribute: 'fun',
    };
    this.handleAttributtonClick = attributtonClick;
  }

  render() {
    const { selectedAttribute } = this.state;
    const {
      formattedData: formattedFighterData,
      rankings
    } = formatData(fighterData);

    return (
      <div className="App">
        <header className="App-header">
          SMASH APP
        </header>
        <main className='smash-app-max-width'>
          <Attributtons
            selectedAttribute={selectedAttribute}
            onClick={(attribute) => this.handleAttributtonClick(attribute)}
          />
          <SmashApp
            fighterData={formattedFighterData}
            rankings={rankings}
            selectedAttribute={selectedAttribute}
          />
        </main>
      </div>
    );
  }
}

export default App;
