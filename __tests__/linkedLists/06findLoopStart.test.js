const LinkedList = require("../../src/linkedLists/06findLoopStart");

describe("#findLoopStart", () => {
  describe("with an empty list", () => {
    it("returns undefined ", () => {
      const list = new LinkedList();

      const result = list.findLoopStart();

      expect(result).toBe(undefined);
    });
  });

  describe("with not a circular list - one element", () => {
    it("returns undefined ", () => {
      const list = new LinkedList([1]);

      const result = list.findLoopStart();

      expect(result).toBe(undefined);
    });
  });

  describe("with not a circular list - two elements", () => {
    it("returns undefined ", () => {
      const list = new LinkedList([1, 2, 3, 4, 5]);

      const result = list.findLoopStart();

      expect(result).toBe(undefined);
    });
  });

  describe("with a circular list", () => {
    it("returns the loop start node", () => {
      const list = new LinkedList([1, 2, 3, 4, 5]);
      const thirdNode = list.getByIndex(2);
      const lastNode = list.getByIndex(4);
      lastNode.next = thirdNode;

      const result = list.findLoopStart();

      expect(result).toEqual(thirdNode);
    });
  });
});
