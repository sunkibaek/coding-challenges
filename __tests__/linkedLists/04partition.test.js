const LinkedList = require("../../src/linkedLists/04partition");

describe("partition", () => {
  describe("with empty list", () => {
    it("returns an empty array", () => {
      const list = new LinkedList();

      list.partition(0);
      const result = list.toArray();

      expect(result).toEqual([]);
    });
  });

  describe("with single-element list", () => {
    it("returns the element", () => {
      const list = new LinkedList([1]);

      list.partition(0);
      const result = list.toArray();

      expect(result).toEqual([1]);
    });
  });

  describe("with right part empty", () => {
    it("returns all the elements on left", () => {
      const list = new LinkedList([2, 1, 3]);

      list.partition(3);
      const result = list.toArray();

      expect(result).toEqual([2, 1, 3]);
    });
  });

  describe("with left part empty", () => {
    it("returns all the elements on right", () => {
      const list = new LinkedList([2, 4, 3]);

      list.partition(2);
      const result = list.toArray();

      expect(result).toEqual([2, 4, 3]);
    });
  });

  describe("with a smaller number on right", () => {
    it("moves the smaller number to the left of k", () => {
      const list = new LinkedList([4, 3, 7, 8, 10, 11, 2, 12]);

      list.partition(10);
      const result = list.toArray();

      expect(result).toEqual([4, 3, 7, 8, 2, 10, 11, 12]);
    });
  });

  describe("with a larger number on left", () => {
    it("moves the larger number to the right of k", () => {
      const list = new LinkedList([4, 3, 7, 11, 8, 10, 12]);

      list.partition(10);
      const result = list.toArray();

      expect(result).toEqual([4, 3, 7, 8, 10, 11, 12]);
    });
  });

  describe("with a general case", () => {
    it("returns smaller values on left larger number on right of 10", () => {
      const list = new LinkedList([4, 3, 14, 7, 8, 10, 1, 10, 12]);

      list.partition(10);
      const result = list.toArray();

      expect(result).toEqual([4, 3, 7, 8, 1, 10, 14, 10, 12]);
    });
  });
});
