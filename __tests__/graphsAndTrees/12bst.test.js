const BinarySearchTree = require("../../src/graphsAndTrees/12bst");

describe("BinarySearchTree", () => {
  describe("#insert", () => {
    describe("with 5, 2, 8, 1, 3", () => {
      it("inserts as 1, 2, 3, 5, 8", () => {
        const bst = new BinarySearchTree();

        bst.insert(5);
        bst.insert(2);
        bst.insert(8);
        bst.insert(1);
        bst.insert(3);
        const result = bst.toArray();

        expect(result).toEqual([1, 2, 3, 5, 8]);
      });
    });

    describe("with 1, 2, 3, 4, 5", () => {
      it("inserts as 1, 2, 3, 4, 5", () => {
        const bst = new BinarySearchTree();

        bst.insert(1);
        bst.insert(2);
        bst.insert(3);
        bst.insert(4);
        bst.insert(5);
        const result = bst.toArray();

        expect(result).toEqual([1, 2, 3, 4, 5]);
      });
    });
  });
});
