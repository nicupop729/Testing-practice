const capitalize = require("./task4");

it("capitalize it not working", () => {
  expect(capitalize("santa claus it's coming to town")).toBe(
    "Santa Claus It's Coming To Town"
  );
});
