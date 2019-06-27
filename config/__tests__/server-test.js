const request = require("supertest");

describe("server", () => {
  var server;

  beforeEach(() => {
    server = require("../server").start(8080);
  });

  afterEach(done => {
    server.close(done);
  });

  it("responds to `/` with html", done => {
    request(server)
      .get("/")
      .expect("Content-Type", /text\/html/i)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("responds to `/api` with json", done => {
    request(server)
      .get("/api")
      .expect(200)
      .expect("Content-Type", /application\/json/i)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("404 for everything else", done => {
    request(server)
      .get("/foo/bar")
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
