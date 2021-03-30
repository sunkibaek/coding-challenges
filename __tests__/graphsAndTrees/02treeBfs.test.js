const Tree = require("../../src/graphsAndTrees/02treeBfs");

describe("Tree", () => {
  describe("#breadthFirstTraversal", () => {
    describe("with 5, 2, 8, 1, 3", () => {
      it("returns 5, 2, 8, 1, 3", () => {
        const tree = new Tree();
        tree.insert(5);
        tree.insert(2);
        tree.insert(8);
        tree.insert(1);
        tree.insert(3);

        const result = tree.breadthFirstTraversal();

        expect(result).toEqual([5, 2, 8, 1, 3]);
      });
    });
  });
});
