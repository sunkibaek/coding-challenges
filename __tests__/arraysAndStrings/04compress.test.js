const compress = require("../../src/arraysAndStrings/04compress");

describe("compress", () => {
  describe("with undefined", () => {
    it("returns undefined", () => {
      const result = compress();

      expect(result).toBe(undefined);
    });
  });

  describe("with empty string", () => {
    it("returns an empty string", () => {
      const result = compress("");

      expect(result).toBe("");
    });
  });

  describe("with potentially longer compressed string", () => {
    it("returns the original string", () => {
      const result = compress("AABBCC");

      expect(result).toBe("AABBCC");
    });
  });

  describe("with compressable string", () => {
    it("returns compressed string", () => {
      const result = compress("AAABCCDDDD");

      expect(result).toBe("A3BC2D4");
    });
  });
});
