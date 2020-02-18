import React from 'react';
import './footer.scss';

const Footer = props => {
  if (props.gamestate === 'initial') {
    return (
      <div className='footer'>
        <button className='newButton' onClick={props.handleReset}>
          New Game
        </button>
      </div>
    );
  } else {
    return (
      <div className='footer'>
        <h2>{props.turns.toString()} BUTTONS PRESSED</h2>
      </div>
    );
  }
};

export default Footer;
