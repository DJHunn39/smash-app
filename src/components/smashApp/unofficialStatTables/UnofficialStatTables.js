import React from 'react';
import OfficialStatTable from '../officialStatTable/OfficialStatTable';

const UnofficialStatTables = ({dannyRanking, jackRanking, selectedStat, selectedAttribute}) =>
  <section className='unofficial-stat-tables'>
    <div className='unofficial-stat-table danny-table'>
      <h2>Danny's Rankings</h2>
      <OfficialStatTable
        ranking={dannyRanking}
        selectedStat={selectedStat}
        selectedAttribute={selectedAttribute}
      />
    </div>
    <div className='unofficial-stat-table jack-table'>
      <h2>Jack's Rankings</h2>
      <OfficialStatTable
        ranking={jackRanking}
        selectedStat={selectedStat}
        selectedAttribute={selectedAttribute}
      />
    </div>
  </section>


export default UnofficialStatTables;
