const sum = require("./sum");

test("Add two numbers", () => {
  expect(sum(2, 3)).toBe(5);
});
