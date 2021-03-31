const Tree = require("../../src/graphsAndTrees/04bstMin");

describe("Tree", () => {
  describe("#insert", () => {
    describe("with 0, 1, 2, 3, 4, 5, 6", () => {
      it("returns 3", () => {
        const tree = new Tree();
        tree.createMinBst([0, 1, 2, 3, 4, 5, 6]);

        const result = tree.height();

        expect(result).toBe(3);
      });
    });

    describe("with 0, 1, 2, 3, 4, 5, 6, 7", () => {
      it("returns 3", () => {
        const tree = new Tree();
        tree.createMinBst([0, 1, 2, 3, 4, 5, 6, 7]);

        const result = tree.height();

        expect(result).toBe(4);
      });
    });
  });
});
