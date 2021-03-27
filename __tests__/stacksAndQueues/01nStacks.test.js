const Stacks = require("../../src/stacksAndQueues/01nStacks");

describe("Stacks", () => {
  describe("#push", () => {
    describe("with pushing on full stack", () => {
      it("throws an error", () => {
        const stacks = new Stacks(3, 3);
        stacks.push(2, 1);
        stacks.push(2, 2);
        stacks.push(2, 3);

        expect(() => {
          stacks.push(2, 4);
        }).toThrow();
      });
    });

    describe("with pushing on non-full stack", () => {
      it("pushes the value", () => {
        const stacks = new Stacks(3, 5);
        stacks.push(2, 1);
        stacks.push(2, 2);
        stacks.push(2, 3);

        stacks.push(2, 4);

        expect(stacks.toArray()).toEqual([
          [undefined, undefined, undefined, undefined, undefined],
          [undefined, undefined, undefined, undefined, undefined],
          [1, 2, 3, 4],
        ]);
      });
    });
  });

  describe("#pop", () => {
    describe("with poping on empty stack", () => {
      it("throws an error", () => {
        const stacks = new Stacks(3, 3);

        expect(() => {
          stacks.pop(2);
        }).toThrow();
      });
    });

    describe("with pop on non-empty stack", () => {
      it("pops the value", () => {
        const stacks = new Stacks(3, 5);
        stacks.push(2, 1);
        stacks.push(2, 2);
        stacks.push(2, 3);

        stacks.pop(2);
        const result = stacks.pop(2);

        expect(result).toBe(2);
      });
    });
  });
});
