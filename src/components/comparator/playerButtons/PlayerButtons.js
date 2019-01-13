import React from 'react';

const PlayerButtons = ({ selectedPlayer, onPlayerChange }) => {
  return(
    <div className="custom-radios">
      <div>
        <input type="radio" id="player-a" name="player" value="player-a" checked={selectedPlayer === 'A'} onChange={() => onPlayerChange('A')}/>
        <label for="player-a">
          <span>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
          </span>
        </label>
      </div>

      <div>
        <input type="radio" id="player-b" name="player" value="player-b" checked={selectedPlayer === 'B'} onChange={() => onPlayerChange('B')}/>
        <label for="player-b">
          <span>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
          </span>
        </label>
      </div>

      <div>
        <input type="radio" id="player-c" name="player" value="player-c" checked={selectedPlayer === 'C'} onChange={() => onPlayerChange('C')}/>
        <label for="player-c">
          <span>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
          </span>
        </label>
      </div>

      <div>
        <input type="radio" id="player-d" name="player" value="player-d" checked={selectedPlayer === 'D'} onChange={() => onPlayerChange('D')}/>
        <label for="player-d">
          <span>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
          </span>
        </label>
      </div>
    </div>
  )
}

export default PlayerButtons;
