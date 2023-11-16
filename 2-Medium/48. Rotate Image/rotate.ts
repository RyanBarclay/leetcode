/**
 Do not return anything, modify matrix in-place instead.
 */

//  You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  const half = Math.floor(n / 2);
  for (let i = 0; i < half; i++) {
    for (let j = i; j < n - i - 1; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i]; // left to top
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]; // bottom to left
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]; // right to bottom
      matrix[j][n - i - 1] = temp; // top to right
    }
  }
}
