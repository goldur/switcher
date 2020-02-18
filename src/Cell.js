import React from 'react';
import './cell.scss';

const Cell = props => {
  let cellClass = 'cell' + (props.isOn ? ' cell-on' : ' cell-off');
  function handleCLick(event) {
      props.handleCellTap(props.id);
  }
  return (
    <td className={cellClass} onClick={handleCLick}></td>
  );
};

export default Cell;
