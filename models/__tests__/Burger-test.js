const Burger = require("../Burger");

describe("Burger", () => {
  it("instantiates without errors", () => {
    expect(new Burger({})).toEqual(expect.any(Burger));
  });
});
