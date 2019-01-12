import React, { Component, Fragment } from 'react';

const appNames = ['Stat Rankings', 'Comparator',];

const appLinkMapper = (appName, selectedApp, onClick) => {
  const buttonClass = selectedApp === appName ? 'selected-app-button' : 'app-selector-button';
  return(
    <div className='app-selector-name'>
      <button
        className={buttonClass}
        onClick={() => onClick(appName)}
      >
        {appName}
      </button>
    </div>
  );
}

class AppSelector extends Component {
  render() {
    const { selectedApp, onClick } = this.props;
    const appButtons = appNames.map(appName => {
      return appLinkMapper(appName, selectedApp, onClick);
    });

    return (
      <Fragment>
        <span className='app-title'>Select an option</span>
      <div className='app-selector-flexbox'>
          {appButtons}
        </div>
      </Fragment>
    )
  }
}

export default AppSelector;
