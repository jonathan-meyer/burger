const mysql = require("mysql");

mysql.createConnection.mockReturnValue({
  on: (event, cb) => {
    console.log("mock:", event);
  },
  query: jest.fn((query, data, cb) => {
    console.log({ query });

    if (typeof data === "function") {
      cb = data;
    }

    cb && cb(null, [{}]);
  })
});

const orm = require("../orm");

jest.mock("mysql");

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
