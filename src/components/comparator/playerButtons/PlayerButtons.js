import React, { Fragment } from 'react';

const PlayerButtons = ({ selectedPlayer, onPlayerChange }) => {
  return(
  <Fragment>
    <p>Please select your preferred contact method:</p>
    <div>
      <input
        type="radio"
        id="playerA"
        name="fighter"
        value="A"
        checked={selectedPlayer === 'A'}
        onChange={() => onPlayerChange('A')}
      />
      <label for="playerA">Fighter 1</label>

      <input
        type="radio"
        id="playerB"
        name="fighter"
        value="B"
        checked={selectedPlayer === 'B'}
        onChange={() => onPlayerChange('B')}
      />
      <label for="playerB">Fighter 2</label>
    </div>
  </Fragment>
  )
}

export default PlayerButtons;
