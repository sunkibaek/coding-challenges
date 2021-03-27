const Stack = require("../../src/stacksAndQueues/05sortStack");

describe("Stack", () => {
  describe("#sort", () => {
    describe("with an empty stack", () => {
      it("sorts nothing", () => {
        const stack = new Stack();

        stack.sort();
        const result = stack.toArray();

        expect(result).toEqual([]);
      });
    });

    describe("with single-element stack", () => {
      it("sorts nothing", () => {
        const stack = new Stack();
        stack.push(1);

        stack.sort();
        const result = stack.toArray();

        expect(result).toEqual([1]);
      });
    });

    describe("with multiple-element stack", () => {
      it("sorts values putting largest on top", () => {
        const stack = new Stack();
        stack.push(2);
        stack.push(4);
        stack.push(3);
        stack.push(1);

        stack.sort();
        const result = stack.toArray();

        expect(result).toEqual([1, 2, 3, 4]);
      });
    });
  });
});
