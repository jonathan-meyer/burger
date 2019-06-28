const express = require("express");

const router = express.Router();

router
  .use("/", require("../controllers/burgersController"))
  .get("/", (req, res) => {
    res.json({ routes: ["/burger"] });
  });

module.exports = router;
