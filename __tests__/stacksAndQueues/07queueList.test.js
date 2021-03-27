const Queue = require("../../src/stacksAndQueues/07queueList");

describe("Queue", () => {
  describe("#enqueue", () => {
    describe("with an empty queue", () => {
      it("enqueues the value", () => {
        const queue = new Queue();

        queue.enqueue(1);
        const result = queue.toArray();

        expect(result).toEqual([1]);
      });
    });

    describe("with non-empty queue", () => {
      it("enqueues the value to the top", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);

        queue.enqueue(3);
        const result = queue.toArray();

        expect(result).toEqual([1, 2, 3]);
      });
    });
  });

  describe("#dequeue", () => {
    describe("with an empty queue", () => {
      it("returns undefined", () => {
        const queue = new Queue();

        const result = queue.dequeue();

        expect(result).toEqual(undefined);
        expect(queue.toArray()).toEqual([]);
      });
    });

    describe("with single-element queue", () => {
      it("returns the value and empty the queue", () => {
        const queue = new Queue();
        queue.enqueue(1);

        const result = queue.dequeue();

        expect(result).toEqual(1);
        expect(queue.toArray()).toEqual([]);
      });
    });

    describe("with multiple-element queue", () => {
      it("returns the bottom value and removes it from the queue", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        const result = queue.dequeue();

        expect(result).toEqual(1);
        expect(queue.toArray()).toEqual([2, 3]);
      });
    });
  });
});
