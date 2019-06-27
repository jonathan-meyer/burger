const express = require("express");

const server = {
  start: port =>
    express()
      .use(express.urlencoded({ extended: true }))
      .use(express.json())

      .use((req, res, next) => {
        console.log(
          `${req.method} ${req.url} ${req.headers["content-type"] || ""}`
        );
        next();
      })

      .use("/api", require("./apiRoutes"))
      .use("/", require("./htmlRoutes"))

      .listen(port, err => {
        console.log(`Listening to port ${port}`);
      })
};

module.exports = server;
