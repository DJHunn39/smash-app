import React, {Fragment} from 'react';


const SmashApp = ({ fighterData }) => {
  const fighterTable = fighterData.map(fighter => {
    return(
  <div className='fighter-flexbox'>
      <img src={fighter.picture} alt={fighter.name} height={50} width={50}/>
      <span className='fighter-name fighter-text'>{fighter.name}</span>
      <span className='fighter-text'>Weight ranking: {fighter.ranking.weight}</span>
  </div>
)
});
return(
  <Fragment>
    {fighterTable}
  </Fragment>
)
}

export default SmashApp;
