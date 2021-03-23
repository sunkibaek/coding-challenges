const isPermutation = (word1, word2) => {
  if (word1 === undefined || word2 === undefined) {
    return false;
  }

  if (word1.length !== word2.length) {
    return false;
  }

  for (let i = 0; i < word1.length; i += 1) {
    const letter1 = word1[i];
    const letter2 = word2[word2.length - 1 - i];

    if (letter1 !== letter2) {
      return false;
    }
  }

  return true;
};

module.exports = isPermutation;
