// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(nums: number[], start: number) {
    if (start === nums.length) {
      result.push([...nums]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(nums, start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  backtrack(nums, 0);

  return result;
}
