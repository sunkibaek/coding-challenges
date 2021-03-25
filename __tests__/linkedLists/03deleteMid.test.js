const LinkedList = require("../../src/linkedLists/03deleteMid");

// Delete on empty list -> None
// Delete None -> None
// Delete on one node -> [None]
// Delete on multiple nodes

describe("delete", () => {
  describe("with empty list", () => {
    it("returns undefined", () => {
      const list = new LinkedList();

      list.delete("one");
      const result = list.toArray();

      expect(result).toEqual([]);
    });
  });

  describe("with delete value undefined", () => {
    it("returns undefined", () => {
      const list = new LinkedList(["one"]);

      list.delete();
      const result = list.toArray();

      expect(result).toEqual(["one"]);
    });
  });

  describe("with single-element list", () => {
    it("leaves the list with one element with undefined value", () => {
      const list = new LinkedList(["one"]);

      list.delete("one");
      const result = list.toArray();

      expect(result).toEqual([undefined]);
    });
  });

  describe("with multiple-element list", () => {
    it("deletes the element from the list", () => {
      const list = new LinkedList(["one", "two", "three"]);

      list.delete("two");
      const result = list.toArray();

      expect(result).toEqual(["one", "three"]);
    });
  });
});
