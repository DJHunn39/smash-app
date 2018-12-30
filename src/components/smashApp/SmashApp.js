import React, { Fragment } from 'react';
import camelCase from 'lodash.camelcase';
import getStatType from '../../helpers/getStatType';
import OfficialStatTable from './officialStatTable/OfficialStatTable';
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
  <OfficialStatTable
    ranking={rankings[selectedStat]}
    selectedStat={selectedStat}
    selectedAttribute={selectedAttribute}
  /> :
  <UnofficialStatTables
    dannyRanking={rankings[camelCase(`danny ${selectedStat}`)]}
    jackRanking={rankings[camelCase(`jack ${selectedStat}`)]}
    selectedStat={selectedStat}
    selectedAttribute={selectedAttribute}
  />;
}

const getUnofficialFighterTable = (rankings) => {
  return(
    <div className='fighter-flexbox'>
      Gotta finish this bit
    </div>
  )
};

const SmashApp = ({ fighterData, rankings, selectedAttribute }) => {
  const fighterTable = getFighterTable(selectedAttribute, rankings, fighterData);
  return(
    <Fragment>
      {fighterTable}
    </Fragment>
  )
};

export default SmashApp;
