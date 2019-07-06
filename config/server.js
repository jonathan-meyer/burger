const express = require("express");
const exphbs = require("express-handlebars");

const orm = require("../config/orm");

const handlebars = exphbs.create({
  helpers: {
    gtOne: (value, opts) => (value > 1 ? opts.fn() : undefined),
    json: (value, opts) => JSON.stringify(value)
  }
});

const server = {
  start: port =>
    express()
      .engine("handlebars", handlebars.engine)
      .set("view engine", "handlebars")

      .use(express.urlencoded({ extended: true }))
      .use(express.json())

      .use((req, res, next) => {
        console.log(
          `${req.method} ${req.url} ${req.headers["content-type"] || ""}`
        );
        next();
      })

      .use("/api", require("../controllers/apiRoutes"))
      .use("/", require("../controllers/htmlRoutes"))

      .listen(port, err => {
        console.log(`[Listening to port ${port}]`);
      })

      .on("close", () => {
        console.log(`[Stopped listening to port ${port}]`);

        orm.end(() => {
          console.log("[Disconnected from DB]");
        });
      })
};

module.exports = server;
