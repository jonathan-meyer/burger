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
    Promise.all([orm.selectAll(), orm.burgerCount()]).then(data => {
      console.log(data);
      res.render("index", {
        toeat: data[0].filter(i => !i.devoured),
        eaten: data[0].filter(i => i.devoured),
        burgerCount: data[1].pop().AUTO_INCREMENT
      });
    });
  })

  .use(express.static(path.resolve("public")));

module.exports = router;
