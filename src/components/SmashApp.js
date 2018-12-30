import React, { Fragment } from 'react';
import camelCase from 'lodash.camelcase';
import getStatType from '../helpers/getStatType';

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
  getOfficialFighterTable(rankings[selectedStat], selectedStat, selectedAttribute) :
  getUnofficialFighterTable([ rankings[camelCase(`danny ${selectedStat}`)], rankings[camelCase(`jack ${selectedStat}`)] ]);
}

  const getOfficialFighterTable = (ranking, selectedStat, selectedAttribute) => {
    return(
      <div className='ranking-table'>
        <span className='table-header'></span>
        <span className='table-header'>Fighter</span>
        <span className='table-header'>Series</span>
        <span className='table-header'>{selectedAttribute}</span>
          {ranking.map(fighter => {
            return(
                <Fragment>
                  <img className='ranking-item-picture' src={fighter.picture} alt={fighter.name} height={50} width={50}/>
                  <span className='ranking-item-name'>{fighter.name}</span>
                  <img className='ranking-item-series' src={fighter.series.icon} alt={fighter.series.name} height={50} width={50}/>
                  <span className='ranking-item-selected-stat'>{fighter.stats.official[selectedStat]}</span>

                </Fragment>
            )
          })}
      </div>
    )
};

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
