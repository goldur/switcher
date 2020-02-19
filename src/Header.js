import React from 'react';
import './header.scss';

const Header = props => {
  let title = '';
  let linkText = '';
  let clickFunction;
  switch (props.gamestate) {
    case 'running':
      title = 'TAP A SWITCH';
      linkText = 'ABORT'
      clickFunction = props.handleAbort;
      break;
    case 'finished':
      title = 'VICTORY';
      linkText = 'RESTART'
      clickFunction = props.handleReset;
      break;
    default:
      title = 'SWITCHES';
      linkText = 'CHEAT'
      clickFunction = props.handleCheat;
      break;
  }
  return (
    <div className='header'>
      <h2>{title}</h2>
      <span className='pseudoLink' onClick={clickFunction}>
        {linkText}
      </span>
    </div>
  );
};

export default Header;
