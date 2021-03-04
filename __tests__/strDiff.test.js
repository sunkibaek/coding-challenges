const strDiff = require("../src/strDiff");

describe("strDiff", () => {
  describe("with undefined", () => {
    it("throws an error", () => {
      expect(() => {
        strDiff();
      }).toThrowError("Needs two strings as input");
    });
  });

  [
    ["ab", "aab", "a"],
    ["aab", "ab", "a"],
    ["abcd", "abcde", "e"],
    ["aaabbcdd", "abdbacade", "e"],
  ].forEach(([s1, s2, output]) => {
    describe(`with ${s1}, ${s2}`, () => {
      it(`returns ${output}`, () => {
        const result = strDiff(s1, s2);

        expect(result).toBe(output);
      });
    });
  });
});
