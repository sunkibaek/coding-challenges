const HashMap = require("../../src/arraysAndStrings/08hashMap.js");

// Constraints
// For simplicity, are the keys integers only?
// Yes
// For collision resolution, can we use chaining?
// Yes
// Do we have to worry about load factors?
// No
// Do we have to validate inputs?
// No
// Can we assume this fits memory?
// Yes

describe("hashMap", () => {
  describe("#get", () => {
    describe("without matching key", () => {
      it("throws an type error", () => {
        expect(() => {
          const hashMap = new HashMap();

          hashMap.get("random-key");
        }).toThrowError(TypeError);
      });
    });

    describe("with matching key", () => {
      it("returns the value", () => {
        const hashMap = new HashMap();
        hashMap.set("matching-key", "matching-key-value");

        const result = hashMap.get("matching-key");

        expect(result).toBe("matching-key-value");
      });
    });
  });

  describe("#set", () => {
    describe("without matching key", () => {
      it("sets the value", () => {
        const hashMap = new HashMap();

        hashMap.set("matching-key", "matching-key-value");

        const result = hashMap.get("matching-key");
        expect(result).toBe("matching-key-value");
      });
    });

    describe("with matching key", () => {
      it("updates the value", () => {
        const hashMap = new HashMap();

        hashMap.set("matching-key", "first-value");
        hashMap.set("matching-key", "second-value");

        const result = hashMap.get("matching-key");
        expect(result).toBe("second-value");
      });
    });
  });

  describe("#remove", () => {
    describe("without matching key", () => {
      it("throws an type error", () => {
        expect(() => {
          const hashMap = new HashMap();

          hashMap.remove("random-key");
        }).toThrowError(TypeError);
      });
    });

    describe("with matching key", () => {
      it("removes the key and value", () => {
        const hashMap = new HashMap();
        hashMap.set("matching-key", "matching-key-value");
        hashMap.remove("matching-key");

        expect(() => {
          hashMap.get("matching-key");
        }).toThrowError(TypeError);
      });
    });
  });
});
