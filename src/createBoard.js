/** lets you create a board of rows and cols with a special pattern with 0s and 1s like '11101010100111'
 *  the number of digits of the string hast to match the dimension of the playing field
 *  without arguments an empty board will be produced
 */
function createBoard(rows, cols) {
  let split;
  if (arguments[2]) {
    split = arguments[2].split('');
    console.log(split);
    if (split.length !== cols * rows) {
      console.log('Wrong length of pattern');
      return;
    }
  } else {
    split = [];
    for (let i = 0; i < rows * cols; i++) {
      split.push('0');
    }
  }
  let pointer = 0;
  let board = [];
  for (let y = 0; y < rows; y++) {
    let row = [];
    for (let x = 0; x < cols; x++) {
      row.push(parseInt(split[pointer]));
      pointer++;
    }
    board.push(row);
  }
  return board;
}

export default createBoard;
