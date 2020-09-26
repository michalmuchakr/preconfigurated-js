import sum from "./sum";

test("Add two numbers", () => {
  expect(sum(2, 3)).toBe(5);
});