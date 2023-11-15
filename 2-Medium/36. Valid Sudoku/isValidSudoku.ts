// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// 1. Each row must contain the digits 1-9 without repetition.
// 2. Each column must contain the digits 1-9 without repetition.
// 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// * Only the filled cells need to be validated according to the mentioned rules.

function isValidSudoku(board: string[][]): boolean {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const boxes = new Array(9).fill(0).map(() => new Array(9).fill(0));

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== ".") {
        const num = parseInt(board[row][col]);
        const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        rows[row][num - 1]++;
        cols[col][num - 1]++;
        boxes[boxIndex][num - 1]++;
        if (
          rows[row][num - 1] > 1 ||
          cols[col][num - 1] > 1 ||
          boxes[boxIndex][num - 1] > 1
        ) {
          return false;
        }
      }
    }
  }
  return true;
}
