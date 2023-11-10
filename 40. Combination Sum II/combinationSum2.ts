// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.
function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  candidates.sort((a, b) => a - b);
  const helper = (
    candidates: number[],
    target: number,
    result: number[][],
    current: number[],
    start: number
  ) => {
    if (target < 0) return;
    if (target === 0) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      current.push(candidates[i]);
      helper(candidates, target - candidates[i], result, current, i + 1);
      current.pop();
    }
  };

  helper(candidates, target, result, [], 0);
  return result;
}
