const express = require("express");
const moment = require("moment");

const router = express.Router();

router
  .use("/burgers", require("../controllers/burgersController"))
  .get("/", (req, res) => {
    res.json({ now: moment() });
  });

module.exports = router;
