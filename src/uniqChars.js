const uniqChars = (chars) => {
  const charSet = new Set();

  if (chars === undefined) {
    return false;
  }

  for (let i = 0; i < chars.length; i += 1) {
    const char = chars[i];

    if (charSet.has(char)) {
      return false;
    }

    charSet.add(char);
  }

  return true;
};

module.exports = uniqChars;
