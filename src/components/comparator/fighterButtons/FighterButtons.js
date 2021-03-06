import React from 'react';

const FighterButtons = ({
  fighterData,
  selectedFighterA,
  selectedFighterB,
  selectedFighterC,
  selectedFighterD,
  onFighterClick
}) => {
  return fighterData.map(fighter => {
    return fighterButtonGenerator(
      fighter,
      selectedFighterA,
      selectedFighterB,
      selectedFighterC,
      selectedFighterD,
      onFighterClick
    );
  })
};

const fighterButtonGenerator = (
  fighter,
  selectedFighterA,
  selectedFighterB,
  selectedFighterC,
  selectedFighterD,
  onFighterClick
) => {
  let buttonClass;
  if (selectedFighterA === fighter) {
    buttonClass = 'selected-fighter-button fighter-a-button';
  } else if (selectedFighterB === fighter) {
    buttonClass = 'selected-fighter-button fighter-b-button';
  } else if (selectedFighterC === fighter) {
    buttonClass = 'selected-fighter-button fighter-c-button';
  } else if (selectedFighterD === fighter) {
    buttonClass = 'selected-fighter-button fighter-d-button';
  } else {
    buttonClass = 'fighter-button';
  }
  return(
    <span
      className={buttonClass}
      onClick={() => onFighterClick(fighter)}
    >
      <img
        src={fighter.icon}
        alt={fighter.name}
        height={50}
        width={50}
      />
    </span>
  );
};

export default FighterButtons;
