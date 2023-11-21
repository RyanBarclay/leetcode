// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

function solveNQueens(n: number): string[][] {
  let board: string[][] = Array(n)
    .fill(".")
    .map(() => Array(n).fill(".")); // n x n board

  // init helper functions
  const result: string[][] = [];

  const checkDiagonal = (row: number, col: number, board: string[][]) => {
    for (let x = row, y = col; x >= 0 && y >= 0; x--, y--) {
      if (board[x][y] === "Q") return false;
    } // check upper left diagonal

    for (let x = row, y = col; x < board.length && y >= 0; x++, y--) {
      if (board[x][y] === "Q") return false;
    } // check lower left diagonal

    for (let x = row, y = col; x >= 0 && y < board.length; x--, y++) {
      if (board[x][y] === "Q") return false;
    } // check upper right diagonal

    for (let x = row, y = col; x < board.length && y < board.length; x++, y++) {
      if (board[x][y] === "Q") return false;
    } // check lower right diagonal

    return true;
  };

  const isValid = (row: number, col: number, board: string[][]) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === "Q") return false; // check col
      if (board[row][i] === "Q") return false; // check row
    }

    return checkDiagonal(row, col, board);
  };

  const backtrack = (row: number, board: string[][]) => {
    if (row === board.length) {
      // base case: all queens possible placed has been explored
      result.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < board.length; col++) {
      if (isValid(row, col, board)) {
        board[row][col] = "Q"; // place queen
        backtrack(row + 1, board); // explore options with queen placed
        board[row][col] = "."; // remove queen
      }
    }
  };

  backtrack(0, board);
  return result;
}
