const Stack = require("../../src/stacksAndQueues/06stack");

describe("Stack", () => {
  describe("#push", () => {
    describe("with an empty stack", () => {
      it("pushes the value", () => {
        const stack = new Stack();

        stack.push(1);
        const result = stack.toArray();

        expect(result).toEqual([1]);
      });
    });

    describe("with non-empty stack", () => {
      it("pushes the value", () => {
        const stack = new Stack();
        stack.push(1);

        stack.push(2);
        const result = stack.toArray();

        expect(result).toEqual([1, 2]);
      });
    });
  });

  describe("#pop", () => {
    describe("with an empty stack", () => {
      it("returns undefined", () => {
        const stack = new Stack();

        const result = stack.pop();

        expect(result).toEqual(undefined);
        expect(stack.toArray()).toEqual([]);
      });
    });

    describe("with single-element stack", () => {
      it("returns the element and removes it from the stack", () => {
        const stack = new Stack();
        stack.push(1);

        const result = stack.pop();

        expect(result).toEqual(1);
        expect(stack.toArray()).toEqual([]);
      });
    });

    describe("with multiple-element stack", () => {
      it("returns the last element and removes it from the stack", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        const result = stack.pop();

        expect(result).toEqual(3);
        expect(stack.toArray()).toEqual([1, 2]);
      });
    });
  });

  describe("#peek", () => {
    describe("with an empty stack", () => {
      it("returns undefined", () => {
        const stack = new Stack();

        const result = stack.peek();

        expect(result).toEqual(undefined);
      });
    });

    describe("with multiple-element stack", () => {
      it("returns the top element", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        const result = stack.peek();

        expect(result).toEqual(3);
      });
    });
  });

  describe("#isEmpty", () => {
    describe("with an empty stack", () => {
      it("returns true", () => {
        const stack = new Stack();

        const result = stack.isEmpty();

        expect(result).toBe(true);
      });
    });

    describe("with single-element stack", () => {
      it("returns false", () => {
        const stack = new Stack();
        stack.push(1);

        const result = stack.isEmpty();

        expect(result).toBe(false);
      });
    });

    describe("with multiple-element stack", () => {
      it("returns false", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        const result = stack.isEmpty();

        expect(result).toBe(false);
      });
    });
  });
});
