import React, { Component, Fragment } from 'react';

const officialAttributes = ['Weight', 'Air Speed', 'Fall Speed', 'Run Speed', 'Dash Speed'];
const unofficialAttributes = ['Fun', 'Power', 'Nostalgia', 'Recovery', 'Final Smash'];

const attributeLinkMapper = (attribute, selectedAttribute, onClick) => {
  const buttonClass = selectedAttribute === attribute ? 'selected-attribute-button' : 'attribute-button';
  return(
    <div className='attribute-name'>
      <button
        className={buttonClass}
        onClick={() => onClick(attribute)}
      >
        {attribute}
      </button>
    </div>
  );
}

class Attributtons extends Component {
  render() {
    const { selectedAttribute, onClick } = this.props;
    const officialButtons = officialAttributes.map(attribute => {
      return attributeLinkMapper(attribute, selectedAttribute, onClick);
    });

    const unofficialButtons = unofficialAttributes.map(attribute => {
      return attributeLinkMapper(attribute, selectedAttribute, onClick);
    });
    return (
      <Fragment>
        <span className='attribute-title'>Official Stats</span>
        <div className='attribute-flexbox'>
          {officialButtons}
        </div>
        <span className='attribute-title'>Unofficial Stats</span>
        <div className='attribute-flexbox'>
          {unofficialButtons}
        </div>
      </Fragment>
    )
  }
}

export default Attributtons;
