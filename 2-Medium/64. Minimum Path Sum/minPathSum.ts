// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

function minPathSum(grid: number[][]): number {
  if (grid.length === 0) return 0;

  // Iterate through the grid
  for (let i = 0; i < grid.length; i++) {
    // Iterate through each row
    for (let j = 0; j < grid[i].length; j++) {
      // If we are not at the top left
      if (i !== 0 || j !== 0) {
        // If we are at the top row
        if (i === 0) {
          // Add the value to the left
          grid[i][j] += grid[i][j - 1];
        } else if (j === 0) {
          // If we are at the left column
          // Add the value above
          grid[i][j] += grid[i - 1][j];
        } else {
          // If we are anywhere else
          // Add the value above or to the left
          grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
      }
    }
  }

  // Return the bottom right value
  return grid[grid.length - 1][grid[0].length - 1];
}
