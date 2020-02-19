import React from 'react';
import './footer.scss';

const Footer = props => {
  let content;
  if (props.gamestate === 'initial') {
    content = 
      <button className='newButton' onClick={props.handleReset}>NEW GAME</button>
  } else {
    content = <h2>{props.turns.toString()} BUTTONS PRESSED</h2>;
  }
  return <div className='footer'>{content}</div>;
};

export default Footer;
