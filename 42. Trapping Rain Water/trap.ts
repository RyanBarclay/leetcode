// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
function trap(height: number[]): number {
  let l = 0;
  let r = height.length - 1;
  let lMax = 0;
  let rMax = 0;
  let ans = 0;
  while (l < r) {
    lMax = lMax < height[l] ? height[l] : lMax;
    rMax = rMax < height[r] ? height[r] : rMax;
    ans += lMax < rMax ? lMax - height[l++] : rMax - height[r--];
  }
  return ans;
}
