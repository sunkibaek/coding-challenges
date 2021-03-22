const strDiff = (s1, s2) => {
  if (s1 === undefined || s2 === undefined) {
    throw new Error("Needs two strings as input");
  }

  const charsCount = new Map();

  for (const char of s1) {
    const newCount = (charsCount.get(char) || 0) + 1;

    charsCount.set(char, newCount);
  }

  for (const char of s2) {
    const newCount = (charsCount.get(char) || 0) - 1;

    charsCount.set(char, newCount);
  }

  for (const [char, count] of charsCount) {
    if (count > 0) {
      return char;
    }

    if (count < 0) {
      return char;
    }
  }

  throw new Error("Could not find extra char");
};

module.exports = strDiff;
