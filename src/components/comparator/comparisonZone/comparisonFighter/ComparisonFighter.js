import React, { Fragment } from 'react';

const ComparisonFighter = ({ fighter = null }) => {
  const {
    picture,
    name,
    series,
    icon,
    stats,
  } = fighter;

  return(
    <Fragment>
      {
        fighter &&
        <div className="comparison-fighter">
          <img src={picture} alt={name} width={300} height={300} />
          <div className="comparison-stats-container">
            <div className="comparison-stats-official">
              Weight: {stats.official.weight}
            </div>
            <div className="comparison-stats-official">
              Air Speed: {stats.official.airSpeed}
            </div>
            <div className="comparison-stats-official">
              Fall Speed: {stats.official.fallSpeed}
            </div>
            <div className="comparison-stats-official">
              Run Speed: {stats.official.runSpeed}
            </div>
            <div className="comparison-stats-official">
              Dash Speed: {stats.official.dashSpeed}
            </div>
          </div>
        </div>
      }
    </Fragment>
  )
}

export default ComparisonFighter;
