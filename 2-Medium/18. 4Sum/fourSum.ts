function fourSum(nums: number[], target: number): number[][] {
  // Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

  // 0 <= a, b, c, d < n
  // a, b, c, and d are distinct.
  // nums[a] + nums[b] + nums[c] + nums[d] == target
  // You may return the answer in any order.

  let output: number[][] = [];

  for (let a = 0; a < nums.length - 3; a++) {
    for (let b = a + 1; b < nums.length - 2; b++) {
      for (let c = b + 1; c < nums.length - 1; c++) {
        for (let d = c + 1; d < nums.length; d++) {
          if (nums[a] + nums[b] + nums[c] + nums[d] === target) {
            let tuple = [nums[a], nums[b], nums[c], nums[d]].sort();
            if (
              !output.some((arr) => arr.every((num, i) => num === tuple[i]))
            ) {
              output.push(tuple);
            }
          }
        }
      }
    }
  }
  return output;
}
