const orm = require("../orm");

describe("orm", () => {
  it("selectAll()", () => {
    return expect(orm.selectAll()).resolves.toEqual(
      expect.arrayContaining([expect.anything()])
    );
  });

  it("insertOne()", () => {
    return expect(orm.insertOne({ name: "fred" })).resolves.toEqual(
      expect.objectContaining({})
    );
  });

  it("updateOne()", () => {
    return expect(orm.updateOne(1, { devoured: true })).resolves.toEqual(
      expect.objectContaining({})
    );
  });
});
