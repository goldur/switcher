import React from 'react';
import initialBoards from './initialBoards';
import Header from './Header';
import Footer from './Footer';
import PlayBoard from './PlayBoard';
import './switcherBoard.scss'

class SwitcherBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
      ]
    }
    this.handleReset = this.handleReset.bind(this);
  }

  createNewBoard() {
    console.log('new board created')
    return initialBoards[
      Math.floor(Math.random() * initialBoards.length)
    ].map(row => row.map(cell => cell));
  }

  handleReset() {
    console.log('reset board');
    this.setState({board: this.createNewBoard()}); 
  }

  render() {
    return (
      <div class="switcherBoard">
        <Header></Header>
        <PlayBoard board={this.state.board}></PlayBoard>
        <Footer handleReset={this.handleReset}></Footer>
      </div>
    );
  }
}
export default SwitcherBoard;
