import React from 'react';
import StatTable from '../statTable/StatTable';

const UnofficialStatTables = ({dannyRanking, jackRanking, selectedStat, selectedAttribute}) => {
return (
  <section className='unofficial-stat-tables'>
    <div className='unofficial-stat-table danny-table'>
      <h2>Danny's Rankings</h2>
      <StatTable
        statType='danny'
        ranking={dannyRanking}
        selectedStat={selectedStat}
        selectedAttribute={selectedAttribute}
      />
    </div>
    <div className='unofficial-stat-table jack-table'>
      <h2>Jack's Rankings</h2>
      <StatTable
        statType='jack'
        ranking={jackRanking}
        selectedStat={selectedStat}
        selectedAttribute={selectedAttribute}
      />
    </div>
  </section>
)
}


export default UnofficialStatTables;
