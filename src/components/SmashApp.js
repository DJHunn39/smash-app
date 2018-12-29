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
  const statRankings = statType === 'official' ?
  [ rankings[selectedStat] ] :
  [ rankings[camelCase(`danny ${selectedStat}`)], rankings[camelCase(`jack ${selectedStat}`)] ];
  console.log(rankings);
  return statRankings.map(ranking => {
    return(
      <div className='ranking-flexbox'>
          {ranking.map(fighter => {
            return(
              <div className='fighter-flexbox'>
                  <span className='fighter-name fighter-text'>{fighter}</span>
              </div>
            )
          })}
      </div>
    )
  })
}

const SmashApp = ({ fighterData, rankings, selectedAttribute }) => {
  const fighterTable = getFighterTable(selectedAttribute, rankings, fighterData)


//   fighterData.map(fighter => {
//     return(
//   <div className='fighter-flexbox'>
//       <img src={fighter.picture} alt={fighter.name} height={50} width={50}/>
//       <span className='fighter-name fighter-text'>{fighter.name}</span>
//       <span className='fighter-text'>Weight ranking: {fighter.ranking.weight}</span>
//   </div>
// )
// });

return(
  <Fragment>
    {fighterTable}
  </Fragment>
)
}

export default SmashApp;
