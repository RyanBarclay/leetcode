function twoSum(nums, target) {
    for (var i1 = 0; i1 < nums.length - 1; i1++) {
        var e1 = nums[i1];
        var delta = target - e1;
        for (var i2 = i1 + 1; i2 < nums.length; i2++) {
            var e2 = nums[i2];
            if (e2 == delta) {
                return [i1, i2];
            }
        }
    }
    return [-1, -1]; //Bad if got here
}
// ex1
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
console.log(twoSum([2, 7, 11, 15], 9));
// ex2
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
console.log(twoSum([3, 2, 4], 6));
// ex3
// Input: nums = [3,3], target = 6
// Output: [0,1]
console.log(twoSum([3, 3], 6));
