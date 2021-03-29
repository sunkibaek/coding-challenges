const Tree = require("../../src/graphsAndTrees/01treeDfs");

describe("Tree", () => {
  describe("#inOrderTraversal", () => {
    describe("with 5, 2, 8, 1, 3", () => {
      it("returns 1, 2, 3, 5, 8", () => {
        const tree = new Tree();
        tree.insert(5);
        tree.insert(2);
        tree.insert(8);
        tree.insert(1);
        tree.insert(3);

        const result = tree.inOrderTraversal();

        expect(result).toEqual([1, 2, 3, 5, 8]);
      });
    });

    describe("with 1, 2, 3, 4, 5", () => {
      it("returns 1, 2, 3, 4, 5", () => {
        const tree = new Tree();
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        tree.insert(5);

        const result = tree.inOrderTraversal();

        expect(result).toEqual([1, 2, 3, 4, 5]);
      });
    });
  });

  describe("#preOrderTraversal", () => {
    describe("with 5, 2, 8, 1, 3", () => {
      it("returns 5, 2, 1, 3, 8", () => {
        const tree = new Tree();
        tree.insert(5);
        tree.insert(2);
        tree.insert(8);
        tree.insert(1);
        tree.insert(3);

        const result = tree.preOrderTraversal();

        expect(result).toEqual([5, 2, 1, 3, 8]);
      });
    });

    describe("with 1, 2, 3, 4, 5", () => {
      it("returns 1, 2, 3, 4, 5", () => {
        const tree = new Tree();
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        tree.insert(5);

        const result = tree.preOrderTraversal();

        expect(result).toEqual([1, 2, 3, 4, 5]);
      });
    });
  });

  describe("#postOrderTraversal", () => {
    describe("with 5, 2, 8, 1, 3", () => {
      it("returns 1, 3, 2, 8, 5", () => {
        const tree = new Tree();
        tree.insert(5);
        tree.insert(2);
        tree.insert(8);
        tree.insert(1);
        tree.insert(3);

        const result = tree.postOrderTraversal();

        expect(result).toEqual([1, 3, 2, 8, 5]);
      });
    });

    describe("with 1, 2, 3, 4, 5", () => {
      it("returns 5, 4, 3, 2, 1", () => {
        const tree = new Tree();
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        tree.insert(5);

        const result = tree.postOrderTraversal();

        expect(result).toEqual([5, 4, 3, 2, 1]);
      });
    });
  });
});
