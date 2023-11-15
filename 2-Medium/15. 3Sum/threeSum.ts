function threeSum(nums: number[]): number[][] {
  // Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that:
  // i != j,
  // i != k
  // j != k
  // nums[i] + nums[j] + nums[k] == 0
  // Notice that the solution set must not contain duplicate triplets.

  const result: number[][] = [];

  if (nums.length < 3) return result;

  nums.sort((a, b) => a - b); // sort the array in ascending order

  for (let i = 0; i < nums.length; i++) {
    // if the current number is greater than 0, we can stop the loop
    if (nums[i] > 0) break;

    // if the current number is the same as the previous number, skip it
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // skip the same numbers
        while (left < right && nums[left] === nums[left + 1]) left++;

        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
