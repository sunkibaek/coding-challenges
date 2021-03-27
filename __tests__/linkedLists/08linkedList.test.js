const LinkedList = require("../../src/linkedLists/08linkedList");

describe("LinkedList", () => {
  describe("#insertToFront", () => {
    describe("with inserting undefined", () => {
      it("inserts nothing", () => {
        const list = new LinkedList([1, 2, 3]);

        list.insertToFront();
        const result = list.toArray();

        expect(result).toEqual([1, 2, 3]);
      });
    });

    describe("with an empty list", () => {
      it("inserts the value", () => {
        const list = new LinkedList();

        list.insertToFront(1);
        const result = list.toArray();

        expect(result).toEqual([1]);
      });
    });

    describe("with single-element list", () => {
      it("inserts the value", () => {
        const list = new LinkedList([2]);

        list.insertToFront(1);
        const result = list.toArray();

        expect(result).toEqual([1, 2]);
      });
    });

    describe("with multiple-element list", () => {
      it("inserts the value", () => {
        const list = new LinkedList([2, 3, 4]);

        list.insertToFront(1);
        const result = list.toArray();

        expect(result).toEqual([1, 2, 3, 4]);
      });
    });
  });

  describe("#append", () => {
    describe("with appending undefined", () => {
      it("appends nothing", () => {
        const list = new LinkedList([1, 2, 3]);

        list.append();
        const result = list.toArray();

        expect(result).toEqual([1, 2, 3]);
      });
    });

    describe("with an empty list", () => {
      it("appends the value", () => {
        const list = new LinkedList();

        list.append(1);
        const result = list.toArray();

        expect(result).toEqual([1]);
      });
    });

    describe("with elements in the list", () => {
      it("appends the value", () => {
        const list = new LinkedList([1, 2, 3]);

        list.append(4);
        const result = list.toArray();

        expect(result).toEqual([1, 2, 3, 4]);
      });
    });
  });

  describe("#find", () => {
    describe("with undefined value", () => {
      it("returns undefined", () => {
        const list = new LinkedList([1, 2, 3]);

        const result = list.find(undefined);

        expect(result).toBe(undefined);
      });
    });

    describe("with empty list", () => {
      it("returns undefined", () => {
        const list = new LinkedList();

        const result = list.find(1);

        expect(result).toBe(undefined);
      });
    });

    describe("with a match", () => {
      it("returns the node", () => {
        const list = new LinkedList([1, 2, 3]);

        const result = list.find(2);

        expect(result.value).toBe(2);
      });
    });

    describe("with no matches", () => {
      it("returns undefined", () => {
        const list = new LinkedList([1, 2, 3]);

        const result = list.find(4);

        expect(result).toBe(undefined);
      });
    });
  });

  describe("#delete", () => {
    describe("with undefined", () => {
      it("deletes nothing", () => {
        const list = new LinkedList([1, 2, 3]);

        list.delete();
        const result = list.toArray();

        expect(result).toEqual([1, 2, 3]);
      });
    });

    describe("with an empty list", () => {
      it("deletes nothing", () => {
        const list = new LinkedList();

        list.delete(2);
        const result = list.toArray();

        expect(result).toEqual([]);
      });
    });

    describe("with a match", () => {
      it("deletes the node", () => {
        const list = new LinkedList([1, 2, 3]);

        list.delete(2);
        const result = list.toArray();

        expect(result).toEqual([1, 3]);
      });
    });

    describe("with no matches", () => {
      it("deletes nothing", () => {
        const list = new LinkedList([1, 2, 3]);

        list.delete(4);
        const result = list.toArray();

        expect(result).toEqual([1, 2, 3]);
      });
    });
  });

  describe("#length", () => {
    describe("with empty list", () => {
      it("returns zero", () => {
        const list = new LinkedList();

        const result = list.length();

        expect(result).toBe(0);
      });
    });

    describe("with mutiple elements", () => {
      it("returns the length", () => {
        const list = new LinkedList([1, 2, 3]);

        const result = list.length();

        expect(result).toBe(3);
      });
    });
  });

  describe("#toArray", () => {
    describe("with empty list", () => {
      it("returns empty array", () => {
        const list = new LinkedList();

        const result = list.toArray();

        expect(result).toEqual([]);
      });
    });

    describe("with multiple elements", () => {
      it("returns an array with the elements", () => {
        const list = new LinkedList([1, 2, 3]);

        const result = list.toArray();

        expect(result).toEqual([1, 2, 3]);
      });
    });
  });
});
