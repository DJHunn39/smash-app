import React, { Fragment } from 'react';
import PlayerButtons from './playerButtons/PlayerButtons';
import FighterButtons from './fighterButtons/FighterButtons';
import ComparisonZone from './comparisonZone/ComparisonZone';

const Comparator = ({
  fighterData = [],
  selectedFighterA = '',
  selectedFighterB = '',
  selectedFighterC = '',
  selectedFighterD = '',
  selectedPlayer = '',
  onFighterClick = {},
  onPlayerChange = {}
}) => {
  return(
    <Fragment>
      <PlayerButtons
        selectedPlayer={selectedPlayer}
        onPlayerChange={(player) => onPlayerChange(player)}
      />
      <FighterButtons
        fighterData={fighterData}
        selectedFighterA={selectedFighterA}
        selectedFighterB={selectedFighterB}
        selectedFighterC={selectedFighterC}
        selectedFighterD={selectedFighterD}
        onFighterClick={(fighter) => onFighterClick(fighter)}
      />
      <ComparisonZone
        selectedFighterA={selectedFighterA}
        selectedFighterB={selectedFighterB}
        selectedFighterC={selectedFighterC}
        selectedFighterD={selectedFighterD}
      />
    </Fragment>
  )
};

export default Comparator;
