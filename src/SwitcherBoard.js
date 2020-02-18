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
      finished: false,
      turns: 0,
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleCellTap = this.handleCellTap.bind(this);
  }

  createNewBoard() {
    return initialBoards[
      Math.floor(Math.random() * initialBoards.length)
    ].map(row => row.map(cell => cell));
  }

  handleReset() {
    this.setState({ board: this.createNewBoard(), finished: false, turns: 0 });
  }

  handleCellTap(coords) {
    let { board, turns } = this.state;
    let [j,i] = coords.split("-").map(Number)
    console.log(coords)
    // change current cell and those around it
    board[i][j] = !board[i][j];
    if (i !== 0) board[i - 1][j] = !board[i - 1][j];
    if (i !== board[i].length - 1) board[i + 1][j] = !board[i + 1][j];
    if (j !== 0) board[i][j - 1] = !board[i][j - 1];
    if (j !== board.length - 1) board[i][j + 1] = !board[i][j + 1];
    
    const finished = this.state.board.every(row => row.every(cell => !!cell));

    this.setState({
      board: board,
      finished: finished,
      turns: turns + 1,
    });
  }

  render() {
    return (
      <div className='switcherBoard'>
        <Header></Header>
        <PlayBoard board={this.state.board} handleCellTap={this.handleCellTap}></PlayBoard>
        <Footer handleReset={this.handleReset}></Footer>
      </div>
    );
  }
}
export default SwitcherBoard;
