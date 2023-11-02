// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

function searchRange(nums: number[], target: number): number[] {
  let rIndex = 0;
  let lIndex = nums.length - 1;
  let output = [-1, -1];
  while (rIndex <= lIndex) {
    // walk right
    if (nums[rIndex] != target) {
      rIndex++;
    } else {
      // out right index is pointing to a target so we walk left
      if (nums[lIndex] != target) {
        lIndex--;
      } else {
        output = [rIndex, lIndex];
        break;
      }
    }
  }
  return output;
}
