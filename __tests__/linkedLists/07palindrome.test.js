const LinkedList = require("../../src/linkedLists/07palindrome");

// Empty list -> False
// Single element list -> False
// Two or more element list, not a palindrome -> False
// General case: Palindrome with even length -> True
// General case: Palindrome with odd length -> True

describe("isPalindrome", () => {
  describe("with empty list", () => {
    it("returns false", () => {
      const list = new LinkedList();

      const result = list.isPalindrome();

      expect(result).toBe(false);
    });
  });

  describe("with a single element", () => {
    it("returns false", () => {
      const list = new LinkedList([1]);

      const result = list.isPalindrome();

      expect(result).toBe(false);
    });
  });

  describe("with multiple elements, non palindrome", () => {
    it("returns false", () => {
      const list = new LinkedList([1, 2, 3]);

      const result = list.isPalindrome();

      expect(result).toBe(false);
    });
  });

  describe("with even length palindrome", () => {
    it("returns true", () => {
      const list = new LinkedList([1, 2, 2, 1]);

      const result = list.isPalindrome();

      expect(result).toBe(true);
    });
  });

  describe("with odd length palindrome", () => {
    it("returns true", () => {
      const list = new LinkedList([1, 2, 3, 2, 1]);

      const result = list.isPalindrome();

      expect(result).toBe(true);
    });
  });
});
