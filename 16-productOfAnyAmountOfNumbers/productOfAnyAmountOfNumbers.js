function productOfAnyAmountOfNumbers(...args) {
  if(args.length === 0)
	return 0;
  let ans = 1;
  for(let i = 0; i < args.length; i++)
	ans *= args[i];
  return ans;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
