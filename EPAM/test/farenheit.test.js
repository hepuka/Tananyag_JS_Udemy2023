const farenheitToCelsius = require("./farenheit");

describe("check the datas", () => {
  it("check if the data is number", () => {
    expect(farenheitToCelsius(23)).toBe(-5);
    expect(farenheitToCelsius([23, 140, 212, 41])).toEqual([-5, 60, 100, 5]);
    expect(farenheitToCelsius(!typeof number)).toBe(1);
    expect(farenheitToCelsius(!typeof object)).toBe(1);
  });
});
