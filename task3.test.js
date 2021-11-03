const Calculator = require("./task3");

describe("my calculator", () => {
    it("adding/substracting went wrong", () => {
      expect(Calculator.add()).toBe(12);
      expect(Calculator.substract()).toBe(8);
    });
    it("multiplaing/dividing went wrong", () => {
      expect(Calculator.multiply()).toBe(20);
      expect(Calculator.divide()).toBe(5);
    });
  });
