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
  getOfficialFighterTable(rankings[selectedStat], fighterData) :
  getUnofficialFighterTable([ rankings[camelCase(`danny ${selectedStat}`)], rankings[camelCase(`jack ${selectedStat}`)] ]);
}

  const getOfficialFighterTable = (ranking, fighterData) => {
    return(
      <div className='ranking-table'>
          {ranking.map(fighter => {
            return(
                <Fragment>
                    <img className='ranking-item-picture' src={fighter.picture} alt={fighter.name} height={50} width={50}/>
                    <span className='ranking-item-name fighter-text'>{fighter.name}</span>
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
}

const SmashApp = ({ fighterData, rankings, selectedAttribute }) => {
  const fighterTable = getFighterTable(selectedAttribute, rankings, fighterData)


//   fighterData.map(fighter => {
//     return(
  // <div className='fighter-flexbox'>
  //     <img src={fighter.picture} alt={fighter.name} height={50} width={50}/>
  //     <span className='fighter-name fighter-text'>{fighter.name}</span>
  //     <span className='fighter-text'>Weight ranking: {fighter.ranking.weight}</span>
  // </div>
// )
// });

return(
  <Fragment>
    {fighterTable}
  </Fragment>
)
}

export default SmashApp;
