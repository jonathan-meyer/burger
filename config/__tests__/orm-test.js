const mysql = require("mysql");

jest.mock("mysql");

const conn = {
  on: jest.fn((event, cb) => {})
};

mysql.createConnection.mockReturnValue(conn);

const orm = require("../orm");
const Burger = require("../../models/Burger");

describe("orm", () => {
  it("selectAll()", () => {
    const burger1 = new Burger({ name: "one", devoured: true });
    const burger2 = new Burger({ name: "two", devoured: false });

    conn.query = jest.fn((query, opts, cb) => {
      let data = [];

      if (!opts.devoured || opts.devoured === true) {
        data.push(burger1);
      }

      if (!opts.devoured || opts.devoured === false) {
        data.push(burger2);
      }

      cb(null, data);
    });

    return Promise.all([
      expect(orm.selectAll()).resolves.toEqual(
        expect.arrayContaining([burger1, burger2])
      ),
      expect(orm.selectAll(true)).resolves.toEqual(
        expect.arrayContaining([burger1])
      ),
      expect(orm.selectAll(false)).resolves.toEqual(
        expect.arrayContaining([burger2])
      )
    ]);
  });

  it("insertOne()", () => {
    conn.query = jest.fn((query, opts, cb) => {
      console.log(opts);
      cb(null, [{ insertId: 1, name: "fred" }]);
    });

    return expect(orm.insertOne({ name: "fred" })).resolves.toEqual(
      new Burger({ name: "fred" })
    );
  });

  it("updateOne()", () => {
    conn.query = jest.fn((query, data, cb) => {
      cb(null, [data]);
    });

    return expect(orm.updateOne(1, { devoured: true })).resolves.toEqual(
      new Burger({ devoured: true })
    );
  });
});
