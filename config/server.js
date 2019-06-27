const express = require("express");
const exphbs = require("express-handlebars");

const server = {
  start: port =>
    express()
      .engine("handlebars", exphbs())
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
        console.log(`Listening to port ${port}`);
      })
};

module.exports = server;
