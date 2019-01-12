import React from 'react';
import get from 'lodash.get';

const StatTable = ({ statType, ranking, selectedStat, selectedAttribute }) => {
const fighterStatPath = statType === 'official' ?
  `stats.official.${selectedStat}`:
  `stats.unofficial.${statType}.${selectedStat}`;
return(
    <table className='ranking-table'>
      <thead>
        <tr>
          <th/>
          <th>Fighter</th>
          <th>Series</th>
          <th>{selectedAttribute}</th>
        </tr>
      </thead>
      <tbody>
        {ranking.map(fighter => {
          const fighterStat = get(fighter,fighterStatPath, 'Ah shit');
          return(
            <tr>
              <td>
                <img
                  className='ranking-item-picture'
                  src={fighter.picture}
                  alt={fighter.name}
                  height={50}
                  width={50}
                />
              </td>
              <td><span className='ranking-item-name'>{fighter.name}</span></td>
              <td><img className='ranking-item-series' src={fighter.series.icon} alt={fighter.series.name} height={50} width={50}/></td>
            <td><span className='ranking-item-selected-stat'>{fighterStat}</span></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};

export default StatTable;
