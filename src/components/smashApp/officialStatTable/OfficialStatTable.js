import React from 'react';

const OfficialStatTable = ({ranking, selectedStat, selectedAttribute}) =>
    <table className='ranking-table'>
      <tr>
        <th/>
        <th>Fighter</th>
        <th>Series</th>
        <th>{selectedAttribute}</th>
      </tr>
    {ranking.map(fighter => {
      return(
        <tr>
          <td><img className='ranking-item-picture' src={fighter.picture} alt={fighter.name} height={50} width={50}/></td>
          <td><span className='ranking-item-name'>{fighter.name}</span></td>
          <td><img className='ranking-item-series' src={fighter.series.icon} alt={fighter.series.name} height={50} width={50}/></td>
          <td><span className='ranking-item-selected-stat'>{fighter.stats.official[selectedStat]}</span></td>
        </tr>
      )
      })}
</table>;

export default OfficialStatTable;
