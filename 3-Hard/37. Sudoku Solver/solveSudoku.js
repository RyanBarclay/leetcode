/**
 Do not return anything, modify board in-place instead.
 */
// Write a program to solve a Sudoku puzzle by filling the empty cells.
// A sudoku solution must satisfy all of the following rules:
// 1. Each of the digits 1-9 must occur exactly once in each row.
// 2. Each of the digits 1-9 must occur exactly once in each column.
// 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.
function solveSudoku(board) {
    // crooks algorithm
    // make a 3d array of numbers, init to a single number if the cell is filled with number, 1-9 if empty
    var boardState = [];
    // init boardState
    for (var row = 0; row < 9; row++) {
        boardState.push([]);
        for (var column = 0; column < 9; column++) {
            boardState[row].push([]);
            if (board[row][column] === ".") {
                for (var k = 0; k < 9; k++) {
                    boardState[row][column].push(k + 1);
                }
            }
            else {
                boardState[row][column].push(parseInt(board[row][column]));
            }
        }
    }
    var reduceBoard = function () {
        // reduce boardState
        var _loop_1 = function (row) {
            var _loop_4 = function (column) {
                if (boardState[row][column].length === 1) {
                    // remove number from row
                    for (var k = 0; k < 9; k++) {
                        if (k !== column) {
                            boardState[row][k] = boardState[row][k].filter(function (num) { return num !== boardState[row][column][0]; });
                        }
                    }
                }
            };
            for (var column = 0; column < 9; column++) {
                _loop_4(column);
            }
        };
        // reduce rows
        for (var row = 0; row < 9; row++) {
            _loop_1(row);
        }
        var _loop_2 = function (column) {
            var _loop_5 = function (row) {
                if (boardState[row][column].length === 1) {
                    // remove number from column
                    for (var k = 0; k < 9; k++) {
                        if (k !== row) {
                            boardState[k][column] = boardState[k][column].filter(function (num) { return num !== boardState[row][column][0]; });
                        }
                    }
                }
            };
            for (var row = 0; row < 9; row++) {
                _loop_5(row);
            }
        };
        // reduce columns
        for (var column = 0; column < 9; column++) {
            _loop_2(column);
        }
        var _loop_3 = function (row) {
            var _loop_6 = function (column) {
                var _loop_7 = function (k) {
                    if (boardState[row + Math.floor(k / 3)][column + (k % 3)].length === 1) {
                        // remove number from box
                        for (var l = 0; l < 9; l++) {
                            if (l !== k) {
                                boardState[row + Math.floor(l / 3)][column + (l % 3)] =
                                    boardState[row + Math.floor(l / 3)][column + (l % 3)].filter(function (num) {
                                        return num !==
                                            boardState[row + Math.floor(k / 3)][column + (k % 3)][0];
                                    });
                            }
                        }
                    }
                };
                for (var k = 0; k < 9; k++) {
                    _loop_7(k);
                }
            };
            for (var column = 0; column < 9; column += 3) {
                _loop_6(column);
            }
        };
        // reduce boxes
        for (var row = 0; row < 9; row += 3) {
            _loop_3(row);
        }
    };
    // reduce boardState until it stops changing
    var oldBoardState = JSON.stringify(boardState);
    var newBoardState = "";
    while (oldBoardState !== newBoardState) {
        oldBoardState = JSON.stringify(boardState);
        reduceBoard();
        newBoardState = JSON.stringify(boardState);
    }
    console.log(boardState);
    // update board with boardState
    for (var row = 0; row < 9; row++) {
        for (var column = 0; column < 9; column++) {
            if (boardState[row][column].length === 1) {
                board[row][column] = boardState[row][column][0].toString();
            }
        }
    }
    return;
}
// Example 1:
var board1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// solveSudoku(board1);
// Example 2:
var board2 = [
    [".", ".", "9", "7", "4", "8", ".", ".", "."],
    ["7", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "2", ".", "1", ".", "9", ".", ".", "."],
    [".", ".", "7", ".", ".", ".", "2", "4", "."],
    [".", "6", "4", ".", "1", ".", "5", "9", "."],
    [".", "9", "8", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", "8", ".", "3", ".", "2", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", "2", "7", "5", "9", ".", "."],
];
solveSudoku(board2);
