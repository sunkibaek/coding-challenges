const isSubstring = (base, compare) => {
  return base.includes(compare);
};

const isRotation = (word1, word2) => {
  if (word1 === undefined || word2 === undefined) {
    return false;
  }

  if (word1.length !== word2.length) {
    return false;
  }

  const combined = `${word1}${word1}`;

  return isSubstring(combined, word2);
};

module.exports = isRotation;
