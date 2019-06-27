const conn = require("../connection");

describe("MqSQL Connection", () => {
  beforeEach(done => {
    conn.connect(done);
  });

  afterEach(done => {
    conn.end(done);
  });

  it("should work", () => {
    expect(conn.state).toEqual("authenticated");
  });
});
