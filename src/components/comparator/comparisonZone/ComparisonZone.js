import React from 'react';
import ComparisonFighter from './comparisonFighter/ComparisonFighter';

const ComparisonZone = ({ selectedFighterA, selectedFighterB, selectedFighterC, selectedFighterD }) =>
  <div className="comparison-zone">
    { selectedFighterA && <ComparisonFighter fighter={selectedFighterA} /> }
    { selectedFighterB && <ComparisonFighter fighter={selectedFighterB} /> }
    { selectedFighterC && <ComparisonFighter fighter={selectedFighterC} /> }
    { selectedFighterD && <ComparisonFighter fighter={selectedFighterD} /> }
  </div>

export default ComparisonZone;
