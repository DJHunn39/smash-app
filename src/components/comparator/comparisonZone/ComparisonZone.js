import React from 'react';
import ComparisonFighter from './comparisonFighter/ComparisonFighter';

const ComparisonZone = ({ selectedFighterA, selectedFighterB }) =>
  <div className="comparison-zone">
    { selectedFighterA && <ComparisonFighter fighter={selectedFighterA} /> }
    { selectedFighterB && <ComparisonFighter fighter={selectedFighterB} /> }
  </div>

export default ComparisonZone;
