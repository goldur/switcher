import React from 'react';
import Cell from './Cell';
import './playBoard.scss';

const PlayBoard = props => {
  let tableBoard = [];
  for (let y = 0; y < props.board.length; y++) {
    let row = [];
    for (let x = 0; x < props.board[0].length; x++) {
      let coord = `${y}-${x}`;
      row.push(
        <Cell
          key={coord}
          id={coord}
          isOn={props.board[y][x]}
          handleCellTap={props.handleCellTap}
          gamestate={props.gamestate}
        />
      );
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
