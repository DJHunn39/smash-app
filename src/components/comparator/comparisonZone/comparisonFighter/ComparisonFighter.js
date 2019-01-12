import React from 'react';

const ComparisonFighter = ({ fighter }) => {
  const {
    picture,
    name,
    series,
    icon,
    stats,
  } = fighter;

  return(
    <div className="comparison-fighter">
      <img src={picture} alt={name} width={300} height={300} />

    </div>
  )
}

export default ComparisonFighter;
