function sumOfMinimumAndMaximum(nums) {
    if(nums.length === 0)
        return -1;
    if(nums.length <= 1)
        return nums[0];
    return nums[0] + nums[nums.length - 1];
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
