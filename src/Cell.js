import React from 'react';
import './cell.scss'

const Cell = props => {
  let cellClass = "cell" + (props.isOn ? " cell-on" : " cell-off");
  return (
      <td className={cellClass} onClick={props.handleClick}></td>
  );
};

export default Cell;
