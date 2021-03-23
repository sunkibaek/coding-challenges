const isPermutation = require("../../src/arraysAndStrings/02isPermutation");

describe("isPermutation", () => {
  describe("with one or more undefined inputs", () => {
    it("returns false", () => {
      const result1 = isPermutation("abc");
      const result2 = isPermutation(undefined, "abc");
      const result3 = isPermutation();

      expect(result1).toBe(false);
      expect(result2).toBe(false);
      expect(result3).toBe(false);
    });
  });

  describe("with one or more empty strings", () => {
    it("returns false", () => {
      const result1 = isPermutation("", "abc");
      const result2 = isPermutation("abc", "");

      expect(result1).toBe(false);
      expect(result2).toBe(false);
    });
  });

  describe("with non permutaiton words", () => {
    it("returns false", () => {
      const result = isPermutation("Nib", "bin");

      expect(result).toBe(false);
    });
  });

  describe("with permutaiton words", () => {
    it("returns true", () => {
      const result = isPermutation("cat", "tac");

      expect(result).toBe(true);
    });
  });

  describe("with permutaiton words with spaces", () => {
    it("returns true", () => {
      const result = isPermutation("c at", "ta c");

      expect(result).toBe(true);
    });
  });
});
