function pairSum(nums, target) {
  if(nums.length <= 1)
	throw new Error('Length is < 1');
  let p1 = 0;
  let p2 = nums.length - 1;
  for(let i = 0; i < nums.length; i++){
	if((nums[p1] + nums[p2]) > target)
		p2--;
	else if((nums[p1] + nums[p2]) < target)
		p1++;
	else
		return true;
  }
 return false;
}

// Do not edit this line;
module.exports = pairSum;
