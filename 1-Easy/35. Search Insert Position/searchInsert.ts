// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

function searchInsert(nums: number[], target: number): number {
  let rIndex = 0;
  let lIndex = nums.length - 1;
  let output = -1;
  while (rIndex <= lIndex) {
    const mid = Math.floor((rIndex + lIndex) / 2);
    if (nums[mid] == target) {
      output = mid;
      break;
    } else if (nums[mid] < target) {
      rIndex = mid + 1;
    } else {
      lIndex = mid - 1;
    }
  }
  return output == -1 ? rIndex : output;
}
