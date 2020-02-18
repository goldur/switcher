import React from 'react';
import Cell from './Cell';
import './playBoard.scss'

const PlayBoard = props => {
  let tableBoard = [];
  for (let y = 0; y < 5; y++) {
    let row = [];
    for (let x = 0; x < 5; x++) {
      let coord = `${y}-${x}`;
      row.push(<Cell key={coord} isOn={props.board[x][y]} />);
    }
    tableBoard.push(<tr key={y}>{row}</tr>);
  }

  return (
    <div className='playBoard'>
      <table>
        <tbody>{tableBoard}</tbody>
      </table>
    </div>
  );
};

export default PlayBoard;
