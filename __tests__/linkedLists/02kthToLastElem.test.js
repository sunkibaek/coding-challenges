const LinkedList = require("../../src/linkedLists/02kthToLastElem.js");

// Empty list -> None
// k is >= the length of the linked list -> None
// One element, k = 0 -> element
// General case with many elements, k < length of linked list

describe("getFromLast", () => {
  describe("with an empty list", () => {
    it("returns undefined", () => {
      const k = 3;
      const list = new LinkedList();

      const result = list.getFromLast(k);

      expect(result).toBe(undefined);
    });
  });

  describe("with k >= length of linked list", () => {
    it("returns undefined", () => {
      const k = 3;
      const list = new LinkedList(["one", "two"]);

      const result = list.getFromLast(k);

      expect(result).toBe(undefined);
    });
  });

  describe("with k = 0 and linked list having one element", () => {
    it("returns the element", () => {
      const k = 0;
      const list = new LinkedList(["one"]);

      const result = list.getFromLast(k);

      expect(result).toBe("one");
    });
  });

  describe("with k = 3 and linked list having 5 element", () => {
    it("returns the 2th element", () => {
      const k = 3;
      const list = new LinkedList(["one", "two", "three", "four", "five"]);

      const result = list.getFromLast(k);

      expect(result).toBe("two");
    });
  });
});
