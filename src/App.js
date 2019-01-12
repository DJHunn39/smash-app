import React, { Component } from 'react';
import './App.css';
import fighterData from './fighters/fighterIndex.js';
import formatData from './dataManipulation/fighterDataFormatter';
import {
  attributtonClick,
  appSelectorClick,
  fighterClick,
  playerChange
} from './clickHandlers/';

import AppSelector from './components/AppSelector';
import RankingViewer from './components/rankingViewer/RankingViewer';
import Comparator from './components/comparator/Comparator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAttribute: '',
      selectedApp: '',
      selectedPlayer: '',
      selectedFighterA: {},
      selectedFighterB: {},
    };
    this.handleAttributtonClick = attributtonClick;
    this.handleAppSelectorClick = appSelectorClick;
    this.handlePlayerChange = playerChange;
    this.handleFighterClick = fighterClick;
  }

  render() {
    const {
      selectedAttribute,
      selectedApp,
      selectedFighterA,
      selectedFighterB,
      selectedPlayer
     } = this.state;
    const {
      formattedData: formattedFighterData,
      rankings
    } = formatData(fighterData);

    return (
      <div className="App">
        <header className="App-header">
          Danny & Jack's Quality Smash App
        </header>
        <main>
          <AppSelector
            selectedApp={selectedApp}
            onClick={(appName) => this.handleAppSelectorClick(appName)}
          />
        {
          selectedApp === 'Stat Rankings' &&
            <RankingViewer
              selectedAttribute={selectedAttribute}
              onClick={(attribute) => this.handleAttributtonClick(attribute)}
              fighterData={formattedFighterData}
              rankings={rankings}
            />
        }
        {
          selectedApp === 'Comparator' &&
            <Comparator
              fighterData={formattedFighterData}
              selectedFighterA={selectedFighterA}
              selectedFighterB={selectedFighterB}
              selectedPlayer={selectedPlayer}
              onFighterClick={(fighter) => this.handleFighterClick(fighter)}
              onPlayerChange={(player) => this.handlePlayerChange(player)}
            />
        }
      </main>
    </div>
  );
}
}

export default App;
