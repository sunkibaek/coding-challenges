const SetOfStacks = require("../../src/stacksAndQueues/03setOfStacks");

describe("SetOfStacks", () => {
  describe("#push", () => {
    describe("with empty stack", () => {
      it("pushes the value on stack", () => {
        const setOfStacks = new SetOfStacks(2);

        setOfStacks.push(1);
        const result = setOfStacks.toArray();

        expect(result).toEqual([[1]]);
      });
    });

    describe("with non-empty stack", () => {
      it("pushes the value on stack", () => {
        const setOfStacks = new SetOfStacks(2);

        setOfStacks.push(1);
        setOfStacks.push(2);
        const result = setOfStacks.toArray();

        expect(result).toEqual([[1, 2]]);
      });
    });

    describe("with pushing over the capacity", () => {
      it("creates a new stack and pushes the value", () => {
        const setOfStacks = new SetOfStacks(2);
        setOfStacks.push(1);
        setOfStacks.push(2);

        setOfStacks.push(3);
        const result = setOfStacks.toArray();

        expect(result).toEqual([[1, 2], [3]]);
      });
    });
  });

  describe("#pop", () => {
    describe("with empty stack", () => {
      it("throws an error", () => {
        const setOfStacks = new SetOfStacks(2);

        expect(() => {
          setOfStacks.pop();
        }).toThrow();
      });
    });

    describe("with non-empty stack", () => {
      it("returns the last value and removes it from the stack", () => {
        const setOfStacks = new SetOfStacks(2);
        setOfStacks.push(1);
        setOfStacks.push(2);

        const lastValue = setOfStacks.pop();
        const result = setOfStacks.toArray();

        expect(lastValue).toBe(2);
        expect(result).toEqual([[1]]);
      });
    });

    describe("with the last element of the stack", () => {
      it("returns the value and destroys the stack", () => {
        const setOfStacks = new SetOfStacks(2);
        setOfStacks.push(1);

        const lastValue = setOfStacks.pop();
        const result = setOfStacks.toArray();

        expect(lastValue).toBe(1);
        expect(result).toEqual([]);
      });
    });
  });
});
