const twoSum = require("../../src/arraysAndStrings/07twoSum");

describe("twoSum", () => {
  describe("with undefined", () => {
    it("throws an error", () => {
      expect(() => {
        twoSum();
      }).toThrowError("Nums are not given");
    });
  });

  describe("with an empty array", () => {
    it("throws an error", () => {
      expect(() => {
        twoSum([]);
      }).toThrowError("Nums cannot be empty");
    });
  });

  describe("with [1, 3, 2, -7, 5], 7", () => {
    it("returns [2, 4]", () => {
      const result = twoSum([1, 3, 2, -7, 5], 7);

      expect(result).toEqual([2, 4]);
    });
  });
});
