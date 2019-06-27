const path = require("path");
const express = require("express");

const router = express.Router();

router
  .use("/bootstrap", express.static(path.resolve("node_modules", "bootstrap")))
  .use("/jquery", express.static(path.resolve("node_modules", "jquery")))
  .use(
    "/jquery-validation",
    express.static(path.resolve("node_modules", "jquery-validation"))
  )
  .use(
    "/",
    express.static(path.resolve("app", "public"), {
      index: "index.html"
    })
  );

module.exports = router;
