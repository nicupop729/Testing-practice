// const stringLength = require("./task1");
// const reverseString = require("./task1");
// const Calculator = require("./task1");
const capitalize = require("./task1");

// test("length not as expected", () => {
//   expect(stringLength("my length")).toBe("my length".length);
// });

// test("countchar does not meet the creteria", () => {
//   expect(stringLength("my length")).toBe("my length".length);
// });

// test("wrong reverse string", () => {
//   expect(reverseString("reverse this")).toBe(
//     "reverse this".split("").reverse().join("")
//   );
// });

// describe("my calculator", () => {
//   it("adding/substracting went wrong", () => {
//     expect(Calculator.add()).toBe(12);
//     expect(Calculator.substract()).toBe(8);
//   });
//   it("multiplaing/dividing went wrong", () => {
//     expect(Calculator.multiply()).toBe(20);
//     expect(Calculator.divide()).toBe(5);
//   });
// });

it("capitalize it not working", () => {
  expect(capitalize("santa claus it's coming to town")).toBe(
    "Santa Claus It's Coming To Town"
  );
});
