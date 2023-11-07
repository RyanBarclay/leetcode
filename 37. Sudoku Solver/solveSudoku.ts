/**
 Do not return anything, modify board in-place instead.
 */

// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// 1. Each of the digits 1-9 must occur exactly once in each row.
// 2. Each of the digits 1-9 must occur exactly once in each column.
// 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.

// The '.' character indicates empty cells.

function solveSudoku(board: string[][]): void {
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
      }
    }
  }

  function backtrack(row: number, col: number): boolean {
    if (row === 9) return true;
    if (col === 9) return backtrack(row + 1, 0);
    if (board[row][col] !== ".") return backtrack(row, col + 1);

    const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
    for (let i = 0; i < 9; i++) {
      if (
        rows[row][i] === 0 &&
        cols[col][i] === 0 &&
        boxes[boxIndex][i] === 0
      ) {
        rows[row][i]++;
        cols[col][i]++;
        boxes[boxIndex][i]++;
        board[row][col] = (i + 1).toString();
        if (backtrack(row, col + 1)) return true;
        board[row][col] = ".";
        rows[row][i]--;
        cols[col][i]--;
        boxes[boxIndex][i]--;
      }
    }
    return false;
  }

  backtrack(0, 0);
}

// Tests
const boards = {
  "1": [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ],
  "2": [
    [
      [".", ".", "9", "7", "4", "8", ".", ".", "."],
      ["7", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", "2", ".", "1", ".", "9", ".", ".", "."],
      [".", ".", "7", ".", ".", ".", "2", "4", "."],
      [".", "6", "4", ".", "1", ".", "5", "9", "."],
      [".", "9", "8", ".", ".", ".", "3", ".", "."],
      [".", ".", ".", "8", ".", "3", ".", "2", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "6"],
      [".", ".", ".", "2", "7", "5", "9", ".", "."],
    ],
  ],
};
