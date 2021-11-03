const stringLength = require("./task1");

test("length not as expected", () => {
  expect(stringLength("my length")).toBe("my length".length);
});

test("countchar does not meet the creteria", () => {
  expect(stringLength("my length")).toBe("my length".length);
});
