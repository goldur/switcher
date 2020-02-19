import React from 'react';
import initialBoards from './initialBoards';
import createBoard from './createBoard';
import Header from './Header';
import Footer from './Footer';
import PlayBoard from './PlayBoard';
import './switcherBoard.scss';

class SwitcherBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      board: createBoard(5, 5),
      gamestate: 'initial',
      turns: 0,
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleCellTap = this.handleCellTap.bind(this);
    this.handleAbort = this.handleAbort.bind(this);
    this.handleCheat = this.handleCheat.bind(this);
  }

  createNewBoard() {
    return initialBoards[
      Math.floor(Math.random() * initialBoards.length)
    ].map(row => row.map(cell => cell));
  }

  handleReset() {
    this.setState({
      board: this.createNewBoard(),
      gamestate: 'running',
      turns: 0,
    });
  }

  handleCellTap(coords) {
    let { board, turns } = this.state;
    let [i, j] = coords.split('-').map(Number);

    function switchCell(i, j) {
      // when the cell is on the board - switch it
      if (
        i >= 0 &&
        i < board[0].length &&
        j >= 0 &&
        j < board.length
      ) {
        board[i][j] = !board[i][j];
      }
    }
    // change current cell and those around it
    switchCell(j, i);
    switchCell(j, i - 1);
    switchCell(j, i + 1);
    switchCell(j - 1, i);
    switchCell(j + 1, i);

    const finished = this.state.board.every(row => row.every(cell => !!cell));

    this.setState({
      board: board,
      gamestate: finished ? 'finished' : 'running',
      turns: turns + 1,
    });
  }

  handleAbort() {
    this.setState({
      board: createBoard(5,5),
      gamestate: 'initial',
      turns: 0,
    });
  }

  handleCheat() {
    this.setState({
      board: createBoard(5,5,'1111111111111111111111111'),
      gamestate: 'finished',
      turns: 999,
    });
  }

  render() {
    return (
      <div className='switcherBoard'>
        <Header
          gamestate={this.state.gamestate}
          handleAbort={this.handleAbort}
          handleReset={this.handleReset}
          handleCheat={this.handleCheat}></Header>
        <PlayBoard
          gamestate={this.state.gamestate}
          board={this.state.board}
          handleCellTap={this.handleCellTap}></PlayBoard>
        <Footer
          gamestate={this.state.gamestate}
          turns={this.state.turns}
          handleReset={this.handleReset}></Footer>
      </div>
    );
  }
}
export default SwitcherBoard;
