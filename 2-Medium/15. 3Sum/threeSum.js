function threeSum(nums) {
    // Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that:
    // i != j,
    // i != k
    // j != k
    // nums[i] + nums[j] + nums[k] == 0
    // Notice that the solution set must not contain duplicate triplets.
    var output = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; i < nums.length - 1; j++) {
            for (var k = j + 1; i < nums.length - 2; k++) {
                if (i != j && i != k && j != k && nums[i] + nums[j] + nums[k] == 0) {
                    var potentialTriplet = [nums[i], nums[j], nums[k]].sort();
                    if (!isIn2dArray(output, potentialTriplet)) {
                        // if conditions are met and no duplicate is present, store it
                        output.push(potentialTriplet);
                    }
                }
            }
        }
    }
    return output;
}
var isIn2dArray = function (arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return true;
        }
    }
    return false;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
