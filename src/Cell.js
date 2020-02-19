import React from 'react';
import './cell.scss';

const Cell = props => {
  let handleCLick = event => {
    return;
  };
  let cellClass = 'cell';
  if (props.gamestate === 'running') {
    handleCLick = event => {
      props.handleCellTap(props.id);
    };
    cellClass = cellClass + (props.isOn ? ' cell-on' : ' cell-off');
  } else if (props.gamestate === 'finished') {
    cellClass = cellClass + ' cell-finished';
  }
  return <td className={cellClass} onClick={handleCLick}></td>;
};

export default Cell;
