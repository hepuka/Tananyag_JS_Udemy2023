const add = require("./unitTest");

describe("added numbers", () => {
  it("are positive", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("are negative", () => {
    expect(add(-1, -2)).toBe(-3);
  });
  it("one of them is flooting", () => {
    expect(add(3, 0.2)).toBe(3.2);
  });
  it("arguments are strings", () => {
    expect(add("Hello", "World")).toBe("Hello World");
  });
  it("first argument is negative", () => {
    expect(add(-3, 1)).toBe(-2);
  });
  it("second argument is negative", () => {
    expect(add(4, -2)).toBe(2);
  });
  it("missing argument", () => {
    let [a, b] = [2, undefined];

    expect(add()).toBe(NaN);
    expect(add(a, b)).toBe(NaN);
  });
});
