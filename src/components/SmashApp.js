import React from 'react';


const SmashApp = ({ fighterData }) => {

  return(
    <div>
      <p>{fighterData[0].name}</p>
      <img src={fighterData[0].icon} alt={fighterData[0].name} />
    <p>Weight ranking: {fighterData[0].ranking.weight}</p>
    </div>
  )
}

export default SmashApp;
