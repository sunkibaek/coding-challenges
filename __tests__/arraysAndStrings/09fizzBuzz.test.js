const fizzBuzz = require("../../src/arraysAndStrings/09fizzBuzz");

describe("fizzBuzz", () => {
  describe("with undefined", () => {
    it("throws a type error", () => {
      expect(() => {
        fizzBuzz();
      }).toThrowError(TypeError);
    });
  });

  describe("with a number smaller than 1", () => {
    it("throws a type error", () => {
      expect(() => {
        fizzBuzz(0);
      }).toThrowError(TypeError);
    });
  });

  describe("with 15", () => {
    it("returns 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz", () => {
      const result = fizzBuzz(15);

      expect(result).toEqual([
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz",
      ]);
    });
  });
});
