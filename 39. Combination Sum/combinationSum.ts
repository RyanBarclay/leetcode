// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

function combinationSum(candidates: number[], target: number): number[][] {
  //sort candidates
  candidates.sort();

  //create result array
  const result: number[][] = [];

  //create recursive function
  const acc = (arr: number[], sum: number, index: number) => {
    //base case
    if (sum === target) {
      result.push(arr);
      return;
    }

    //recursive case
    for (let i = index; i < candidates.length; i++) {
      if (sum + candidates[i] <= target) {
        acc([...arr, candidates[i]], sum + candidates[i], i);
      }
    }
  };

  //call recursive function
  acc([], 0, 0);
  return result;
}
