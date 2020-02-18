import React from 'react';
import './cell.scss';

const Cell = props => {
  let handleCLick = event => {
    return;
  };
  let cellClass = 'cell';
  switch (props.gamestate) {
    case 'running':
      handleCLick = event => {
        props.handleCellTap(props.id);
      };
      cellClass = cellClass + (props.isOn ? ' cell-on' : ' cell-off');
      break;
    case 'finished':
      cellClass = cellClass + ' cell-finished';
      break;
    default:
      break;
  }
  return <td className={cellClass} onClick={handleCLick}></td>;
};

export default Cell;
