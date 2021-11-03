const reverseString = require("./task2");

test("wrong reverse string", () => {
  expect(reverseString("reverse this")).toBe(
    "reverse this".split("").reverse().join("")
  );
});
