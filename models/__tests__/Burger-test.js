const Burger = require("../Burger");

describe("Burger", () => {
  describe("instantiates without errors", () => {
    it("with out a name", () => {
      expect(new Burger({})).toEqual(expect.any(Burger));
    });

    it("with name of Fred", () => {
      expect(new Burger({ name: "fred" })).toEqual(
        expect.objectContaining({ burger_name: "fred" })
      );
    });

    it("with burger_name of Fred", () => {
      expect(new Burger({ burger_name: "fred" })).toEqual(
        expect.objectContaining({ burger_name: "fred" })
      );
    });
  });
});
