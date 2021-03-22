const uniqChars = require("../../src/arraysAndStrings/uniqChars");

describe("uniqChars", () => {
  describe("with undefined", () => {
    it("returns false", () => {
      const result = uniqChars();

      expect(result).toBe(false);
    });
  });

  describe("with empty string", () => {
    it("returns true", () => {
      const result = uniqChars("");

      expect(result).toBe(true);
    });
  });

  describe("with foo", () => {
    it("returns false", () => {
      const result = uniqChars("foo");

      expect(result).toBe(false);
    });
  });

  describe("with bar", () => {
    it("returns true", () => {
      const result = uniqChars("bar");

      expect(result).toBe(true);
    });
  });
});
