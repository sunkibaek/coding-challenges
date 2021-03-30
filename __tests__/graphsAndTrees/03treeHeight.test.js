const Tree = require("../../src/graphsAndTrees/03treeHeight");

describe("Tree", () => {
  describe("#height", () => {
    describe("with 5", () => {
      it("returns 1", () => {
        const tree = new Tree();
        tree.insert(5);

        const result = tree.height();

        expect(result).toEqual(1);
      });
    });

    describe("with 5, 2, 8, 1, 3", () => {
      it("returns 3", () => {
        const tree = new Tree();
        tree.insert(5);
        tree.insert(2);
        tree.insert(8);
        tree.insert(1);
        tree.insert(3);

        const result = tree.height();

        expect(result).toEqual(3);
      });
    });
  });
});
