import React, { Fragment } from 'react';
import camelCase from 'lodash.camelcase';
import getStatType from '../../../helpers/getStatType';
import StatTable from './statTable/StatTable';
import UnofficialStatTables from './unofficialStatTables/UnofficialStatTables';


const mapAttributeToStat = selectedAttribute => {
  if(selectedAttribute === 'Final Smash') {
    return 'final';
  }
  return camelCase(selectedAttribute);
}

const getFighterTable = (selectedAttribute, rankings, fighterData) => {
  const selectedStat = mapAttributeToStat(selectedAttribute);
  const statType = getStatType(selectedStat);
  return statType === 'official' ?
  <Fragment>
    <h2>Official Rankings</h2>
    <StatTable
      statType={statType}
      ranking={rankings[selectedStat]}
      selectedStat={selectedStat}
      selectedAttribute={selectedAttribute}
    />
  </Fragment> :
  <UnofficialStatTables
    dannyRanking={rankings[camelCase(`danny ${selectedStat}`)]}
    jackRanking={rankings[camelCase(`jack ${selectedStat}`)]}
    selectedStat={selectedStat}
    selectedAttribute={selectedAttribute}
  />;
}

const SmashApp = ({ fighterData, rankings, selectedAttribute = '' }) => {
  const fighterTable = getFighterTable(selectedAttribute, rankings, fighterData);
  return(
    <div className="ranking-viewer">
      {fighterTable}
    </div>
  )
};

export default SmashApp;
