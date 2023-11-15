function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = nums.length;
  const mid = Math.floor(len / 2);
  return len % 2 === 0 ? (nums[mid - 1] + nums[mid]) / 2 : nums[mid];
}
