function setUnionOfAnyAmountOfSets(...args) {
  let s = new Set();
  for(let i of args)
	for(let j of i)
		s.add(j);
  return s;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
