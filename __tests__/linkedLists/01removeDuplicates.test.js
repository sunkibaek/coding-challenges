const LinkedList = require("../../src/linkedLists/01removeDuplicates");

describe("removeDuplicates", () => {
  describe("with an empty linked list", () => {
    it("returns emtpy list", () => {
      const list = new LinkedList();

      list.removeDuplicates();
      const result = list.toArray();

      expect(result).toEqual([]);
    });
  });

  describe("with one element", () => {
    it("returns the element", () => {
      const list = new LinkedList(["one"]);

      list.removeDuplicates();
      const result = list.toArray();

      expect(result).toEqual(["one"]);
    });
  });

  describe("without duplicated elements", () => {
    it("returns all elements", () => {
      const list = new LinkedList(["one", "two", "three"]);

      list.removeDuplicates();
      const result = list.toArray();

      expect(result).toEqual(["one", "two", "three"]);
    });
  });

  describe("with duplicated elements", () => {
    it("returns elements without duplication", () => {
      const list = new LinkedList(["one", "two", "two", "three"]);

      list.removeDuplicates();
      const result = list.toArray();

      expect(result).toEqual(["one", "two", "three"]);
    });
  });
});
