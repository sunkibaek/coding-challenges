const Stack = require("../../src/stacksAndQueues/02stackMin");

describe("Stack", () => {
  describe("#push", () => {
    describe("with empty stack", () => {
      it("pushes on stack", () => {
        const stack = new Stack();

        stack.push(1);
        const result = stack.toArray();

        expect(result).toEqual([1]);
      });
    });

    describe("with non-empty stack", () => {
      it("pushes on stack", () => {
        const stack = new Stack([1, 2, 3]);

        stack.push(4);
        const result = stack.toArray();

        expect(result).toEqual([1, 2, 3, 4]);
      });
    });
  });

  describe("#pop", () => {
    describe("with empty stack", () => {
      it("throws an error", () => {
        const stack = new Stack();

        expect(() => {
          stack.pop();
        }).toThrow();
      });
    });

    describe("with non-empty stack", () => {
      it("returns the last value and removes it from the stack", () => {
        const stack = new Stack([1, 2, 3]);

        const lastValue = stack.pop();
        const data = stack.toArray();

        expect(lastValue).toBe(3);
        expect(data).toEqual([1, 2]);
      });
    });
  });

  describe("#min", () => {
    describe("with empty stack", () => {
      it("returns undefined", () => {
        const stack = new Stack();

        const result = stack.min();

        expect(result).toBe(undefined);
      });
    });

    describe("with non-empty stack", () => {
      it("returns the min value", () => {
        const stack = new Stack([3, 2, 1, 4]);

        const result = stack.min();

        expect(result).toBe(1);
      });
    });
  });
});
