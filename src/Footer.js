import React from 'react';
import './footer.scss'

const Footer = props => {
  console.log(props.handleReset);
  return (
    <div className='footer'>
      <button onClick={props.handleReset}>New Game</button>
    </div>
  );
};

export default Footer;
