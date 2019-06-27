const orm = require("../orm");

describe("orm", () => {
  it("selectAll()", () => {
    expect(orm.selectAll()).toEqual(
      expect.arrayContaining([expect.anything()])
    );
  });

  it("insertOne()", () => {
    expect(orm.insertOne()).toEqual(expect.objectContaining({}));
  });

  it("updateOne()", () => {
    expect(orm.updateOne()).toEqual(expect.objectContaining({}));
  });
});
