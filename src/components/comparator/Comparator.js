import React, { Fragment } from 'react';
import PlayerButtons from './playerButtons/PlayerButtons';
// import FighterBox from './fighterBox/FighterBox';

const Comparator = ({
  fighterData = [],
  selectedFighterA = '',
  selectedFighterB = '',
  selectedPlayer = '',
  onFighterClick = {},
  onPlayerChange = {}
}) => {

  const fighterButtonGenerator = (fighter, selectedFighterA, selectedFighterB, onFighterClick) => {
    let buttonClass;
    if (selectedFighterA === fighter) {
      buttonClass = 'selected-fighter-button fighter-a-button';
    } else if (selectedFighterB === fighter) {
      buttonClass = 'selected-fighter-button fighter-b-button';
    } else {
      buttonClass = 'fighter-button';
    }
    return(
      <span
        className={buttonClass}
        onClick={() => onFighterClick(fighter)}
      >
        <img
          src={fighter.icon}
          alt={fighter.name}
          height={50}
          width={50}
        />
      </span>
    );
  }

  const fighterButtons = fighterData.map(fighter => {
    return fighterButtonGenerator(fighter, selectedFighterA, selectedFighterB, onFighterClick);
  })

  return(
    <Fragment>
      <PlayerButtons
        selectedPlayer={selectedPlayer}
        onPlayerChange={(player) => onPlayerChange(player)}
      />
      {fighterButtons}
    </Fragment>

  )
}

export default Comparator;
