const twoSum = (nums, sum) => {
  if (nums === undefined) {
    throw new Error("Nums are not given");
  }

  if (nums.length === 0) {
    throw new Error("Nums cannot be empty");
  }

  const numIndexes = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    numIndexes.set(num, i);
    const diff = sum - num;

    if (numIndexes.has(diff)) {
      return [numIndexes.get(diff), i];
    }
  }

  throw new Error("Could not find the indexes of the two sum");
};

module.exports = twoSum;
