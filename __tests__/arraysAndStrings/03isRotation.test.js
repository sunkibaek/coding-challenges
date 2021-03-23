const isRotation = require("../../src/arraysAndStrings/03isRotation.js");

describe("isRotation", () => {
  describe("with any strings with different sizes", () => {
    it("returns false", () => {
      const result = isRotation("abc", "ab");

      expect(result).toBe(false);
    });
  });

  describe("with any undefined in inputs", () => {
    it("returns false", () => {
      const result1 = isRotation(undefined, "foo");
      const result2 = isRotation("foo");
      const result3 = isRotation();

      expect(result1).toBe(false);
      expect(result2).toBe(false);
      expect(result3).toBe(false);
    });
  });

  describe("with non-rotated strings", () => {
    it("returns false", () => {
      const result = isRotation(" ", "foo");

      expect(result).toBe(false);
    });
  });

  describe("with two empty strings", () => {
    it("returns true", () => {
      const result = isRotation(" ", " ");

      expect(result).toBe(true);
    });
  });

  describe("with rotated strings", () => {
    it("returns true", () => {
      const result = isRotation("foobarbaz", "barbazfoo");

      expect(result).toBe(true);
    });
  });
});
