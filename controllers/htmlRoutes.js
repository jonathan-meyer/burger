const path = require("path");
const express = require("express");

const router = express.Router();

const orm = require("../config/orm");

router
  .use("/bootstrap", express.static(path.resolve("node_modules", "bootstrap")))
  .use("/jquery", express.static(path.resolve("node_modules", "jquery")))
  .use(
    "/jquery-validation",
    express.static(path.resolve("node_modules", "jquery-validation"))
  )

  .get("/", (req, res) => {
    orm.selectAll().then(data => {
      res.render("index", {
        toeat: data.filter(i => !i.devoured),
        eaten: data.filter(i => i.devoured)
      });
    });
  })

  .use(express.static(path.resolve("public")));

module.exports = router;
