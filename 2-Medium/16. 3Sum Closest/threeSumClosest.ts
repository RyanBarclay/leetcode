function threeSumClosest(nums: number[], target: number): number {
  // Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
  // Return the sum of the three integers.
  // You may assume that each input would have exactly one solution.

  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > target) {
        right--;
      } else {
        left++;
      }

      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
    }
  }

  return result;
}
