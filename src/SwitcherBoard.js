import React from 'react';
import initialBoards from './initialBoards';
import Header from './Header';
import Footer from './Footer';
import PlayBoard from './PlayBoard';
import './switcherBoard.scss';

class SwitcherBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
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
    let [j, i] = coords.split('-').map(Number);
    // change current cell and those around it
    board[i][j] = !board[i][j];
    if (i !== 0) board[i - 1][j] = !board[i - 1][j];
    if (i !== board[i].length - 1) board[i + 1][j] = !board[i + 1][j];
    if (j !== 0) board[i][j - 1] = !board[i][j - 1];
    if (j !== board.length - 1) board[i][j + 1] = !board[i][j + 1];

    const finished = this.state.board.every(row => row.every(cell => !!cell));

    this.setState({
      board: board,
      gamestate: finished ? 'finished' : 'running',
      turns: turns + 1,
    });
  }

  handleAbort() {
    this.setState({
      board: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      gamestate: 'initial',
      turns: 0,
    });
  }

  handleCheat() {
    this.setState({
      board: [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
      ],
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
