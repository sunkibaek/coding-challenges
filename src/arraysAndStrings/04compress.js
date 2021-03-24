const buildCompressedWord = (compressed, lastLetter, lastLetterCount) => {
  let result = compressed;

  if (lastLetterCount === 1) {
    result += lastLetter;
  }

  if (lastLetterCount > 1) {
    result += `${lastLetter}${lastLetterCount}`;
  }

  return result;
};

const compress = (word) => {
  if (word === undefined) {
    return;
  }

  if (word === "") {
    return "";
  }

  let lastLetter = "";
  let lastLetterCount = 0;
  let compressed = "";

  for (let i = 0; i < word.length; i += 1) {
    const letter = word[i];

    if (letter === lastLetter) {
      lastLetterCount += 1;
      continue;
    }

    if (lastLetterCount === 0) {
      lastLetter = letter;
      lastLetterCount = 1;
      continue;
    }

    compressed = buildCompressedWord(compressed, lastLetter, lastLetterCount);
    lastLetter = letter;
    lastLetterCount = 1;
  }

  compressed = buildCompressedWord(compressed, lastLetter, lastLetterCount);

  if (word.length <= compressed.length) {
    return word;
  }

  return compressed;
};

module.exports = compress;
