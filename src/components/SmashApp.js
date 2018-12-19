import React from 'react';


const SmashApp = ({ fighterData }) => {
  return(
    <div>
      {fighterData[0].name}
      <img src={fighterData[0].icon} alt={fighterData[0].name} />
    </div>
  )
}

export default SmashApp;
