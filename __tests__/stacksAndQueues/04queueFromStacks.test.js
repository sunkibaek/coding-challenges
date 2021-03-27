const Queue = require("../../src/stacksAndQueues/04queueFromStacks");

describe("Queue", () => {
  describe("#enqueue", () => {
    describe("with an empty stack", () => {
      it("enqueues the value", () => {
        const queue = new Queue();

        queue.enqueue(1);
        const result = queue.toArray();

        expect(result).toEqual([1]);
      });
    });

    describe("with a non-empty stack", () => {
      it("enqueues the value", () => {
        const queue = new Queue();
        queue.enqueue(1);

        queue.enqueue(2);
        const result = queue.toArray();

        expect(result).toEqual([2, 1]);
      });
    });

    describe("with multiple operations", () => {
      it("enqueues the values properly", () => {
        const queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        const result = queue.toArray();

        expect(result).toEqual([3, 2, 1]);
      });
    });

    describe("after dequeue", () => {
      it("enqueues the value properly", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();

        queue.enqueue(3);
        const result = queue.toArray();

        expect(result).toEqual([3, 2]);
      });
    });
  });

  describe("#dequeue", () => {
    describe("with an empty stack", () => {
      it("returns undefined", () => {
        const queue = new Queue();

        const result = queue.dequeue();

        expect(result).toBe(undefined);
      });
    });

    describe("with a non-empty stack", () => {
      it("removes the foremost value and returns it", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);

        const result = queue.dequeue();

        expect(result).toBe(1);
        expect(queue.toArray()).toEqual([2]);
      });
    });

    describe("with multiple operations", () => {
      it("dequeus the values properly", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        const result1 = queue.dequeue();
        const result2 = queue.dequeue();
        const result3 = queue.dequeue();
        const rest = queue.toArray();

        expect(result1).toEqual(1);
        expect(result2).toEqual(2);
        expect(result3).toEqual(3);
        expect(rest).toEqual([]);
      });
    });

    describe("after enqueue", () => {
      it("dequeues the value properly", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        queue.dequeue();
        const result = queue.toArray();

        expect(result).toEqual([3, 2]);
      });
    });
  });
});
