const LinkedList = require("../../src/linkedLists/05addReverse");

describe(".addReverse", () => {
  describe("with an empty list", () => {
    it("returns undefined ", () => {
      const list = new LinkedList();

      expect(LinkedList.addReverse()).toBe(undefined);
      expect(LinkedList.addReverse(list)).toBe(undefined);
      expect(LinkedList.addReverse(undefined, list)).toBe(undefined);
    });
  });

  describe("with different length lists", () => {
    it("returns a list with the sum", () => {
      const list1 = new LinkedList([6, 5]);
      const list2 = new LinkedList([9, 8, 7]);

      const result = LinkedList.addReverse(list1, list2).toArray();

      expect(result).toEqual([5, 4, 8]);
    });
  });

  describe("with the same length lists", () => {
    it("returns a list with the sum", () => {
      const list1 = new LinkedList([6, 5, 4]);
      const list2 = new LinkedList([9, 8, 7]);

      const result = LinkedList.addReverse(list1, list2).toArray();

      expect(result).toEqual([5, 4, 2, 1]);
    });
  });
});
