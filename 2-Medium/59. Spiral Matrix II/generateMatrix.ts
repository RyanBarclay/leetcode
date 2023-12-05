// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
function generateMatrix(n: number): number[][] {
  const matrix: number[][] = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
  }

  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;
  let counter = 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // Top Row
    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = counter++;
    }
    rowStart++;

    // Right Column
    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = counter++;
    }
    colEnd--;

    // Bottom Row
    for (let i = colEnd; i >= colStart; i--) {
      matrix[rowEnd][i] = counter++;
    }
    rowEnd--;

    // Left Column
    for (let i = rowEnd; i >= rowStart; i--) {
      matrix[i][colStart] = counter++;
    }
    colStart++;
  }

  return matrix;
}
