const Tree = require("../../src/graphsAndTrees/05treeLevelLists");

describe("Tree", () => {
  describe("#buildLevelLists", () => {
    describe("with 5, 3, 8, 2, 4, 1, 7, 6, 9, 10, 11", () => {
      it("returns [[5], [3, 8], [2, 4, 7, 9], [1, 6, 10], [11]]", () => {
        const tree = new Tree();
        tree.insert(5);
        tree.insert(3);
        tree.insert(8);
        tree.insert(2);
        tree.insert(4);
        tree.insert(1);
        tree.insert(7);
        tree.insert(6);
        tree.insert(9);
        tree.insert(10);
        tree.insert(11);

        const result = tree.buildLevelLists();

        expect(result).toEqual([[5], [3, 8], [2, 4, 7, 9], [1, 6, 10], [11]]);
      });
    });
  });
});
