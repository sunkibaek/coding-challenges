const reverseString = (s1) => {
  if (s1 === undefined) {
    return undefined;
  }

  // calculate middle index (round down)
  const middle = s1.length / 2;
  const middleIndex = Math.floor(middle);

  // loop until it reaches the middle while swapping numbers
  for (let i = 0; i < middle; i += 1) {
    // if the middle is one number do not do anything
    if (i === middleIndex) {
      continue;
    }

    // 0, 1, 2, 3, 4
    // 4, 3
    const head = s1[i];
    const tailIndex = s1.length - 1 - i;
    s1[i] = s1[tailIndex];
    s1[tailIndex] = head;
  }

  return s1;
};

module.exports = reverseString;
