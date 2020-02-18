import React from 'react';
import './header.scss';

const Header = props => {
  switch (props.gamestate) {
    case 'running':
      return (
        <div className='header withLink'>
          <h2>TAP A SWITCH</h2>
          <span className='pseudoLink' onClick={props.handleAbort}>ABORT</span>
        </div>
      );
    case 'finished':
      return (
        <div className='header withLink'>
          <h2>VICTORY</h2>
          <span className='pseudoLink' onClick={props.handleReset}>RESTART</span>
        </div>
      );
    default:
      return <div className='header'>
          <h2>SWITCHES</h2>
          <span className='pseudoLink' onClick={props.handleCheat}>CHEAT</span>
      </div>;
  }
};

export default Header;
