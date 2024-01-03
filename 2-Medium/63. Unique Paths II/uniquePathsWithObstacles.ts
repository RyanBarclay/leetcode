// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 10^9.

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp: number[][] = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  );
  dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1;
  for (let i = 1; i < m; i++) {
    dp[i][0] = obstacleGrid[i][0] === 1 ? 0 : dp[i - 1][0];
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = obstacleGrid[0][j] === 1 ? 0 : dp[0][j - 1];
  }
  for (let k = 1; k < m; k++) {
    for (let l = 1; l < n; l++) {
      dp[k][l] = obstacleGrid[k][l] === 1 ? 0 : dp[k - 1][l] + dp[k][l - 1];
    }
  }
  return dp[m - 1][n - 1];
}
