const reverseString = require("../src/reverseString");

describe("reverseString", () => {
  describe("with undefined", () => {
    it("returns undefined", () => {
      const result = reverseString();

      expect(result).toBe(undefined);
    });
  });

  describe("with empty string", () => {
    it("returns empty string", () => {
      const result = reverseString([""]);

      expect(result).toEqual([""]);
    });
  });

  describe("with `foobar`", () => {
    it("returns `raboof`", () => {
      const result = reverseString(["f", "o", "o", "b", "a", "r"]);

      expect(result).toEqual(["r", "a", "b", "o", "o", "f"]);
    });
  });

  describe("with `foo bar`", () => {
    it("returns `rab oof`", () => {
      const result = reverseString(["f", "o", "o", " ", "b", "a", "r"]);

      expect(result).toEqual(["r", "a", "b", " ", "o", "o", "f"]);
    });
  });
});
