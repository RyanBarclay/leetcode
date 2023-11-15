// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

function permuteUnique(nums: number[]): number[][] {
  const result: Set<string> = new Set();

  function backtrack(nums: number[], start: number) {
    if (start === nums.length) {
      result.add([...nums].toString());
      return;
    }

    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(nums, start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  backtrack(nums, 0);

  return [...result].map((str) => str.split(",").map((num) => parseInt(num)));
}
