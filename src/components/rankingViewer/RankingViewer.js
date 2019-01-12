import React, { Fragment } from 'react';
import Attributtons from './attributtons/Attributtons';
import SmashApp from './smashApp/SmashApp';

const RankingViewer = ({
  selectedAttribute,
  onClick,
  fighterData,
  rankings
}) => {

  return(
    <Fragment>
      <Attributtons
        selectedAttribute={selectedAttribute}
        onClick={(attribute) => onClick(attribute)}
      />
      {
        selectedAttribute &&
        <SmashApp
          fighterData={fighterData}
          rankings={rankings}
          selectedAttribute={selectedAttribute}
        />
      }
    </Fragment>
  )
}

export default RankingViewer;
