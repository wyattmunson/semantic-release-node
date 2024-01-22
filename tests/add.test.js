const add = require("../add");

describe("add", () => {
  test("should sum two numbers", () => {
    expect(add(10, 10)).toBe(20);
  });
});
