// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// - '?' Matches any single character.
// - '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

function isMatch(s: string, p: string): boolean {
  const dp: boolean[][] = Array.from({ length: s.length + 1 }, () =>
    Array.from({ length: p.length + 1 }, () => false)
  );

  dp[0][0] = true;

  for (let i = 1; i <= p.length; i++) {
    if (p[i - 1] === "*") dp[0][i] = dp[0][i - 1];
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      const charS = s[i - 1];
      const charP = p[j - 1];

      if (charS === charP || charP === "?") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (charP === "*") {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      }
    }
  }

  return dp[s.length][p.length];
}
