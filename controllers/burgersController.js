const express = require("express");
const router = express.Router();

router
  // get all burgers
  .get("/burger", (req, res) => {
    res.json([{}]);
  })

  // get a burger
  .get("/burger/:id", (req, res) => {
    res.json({ id: req.params.id });
  })

  // create a burger
  .post("/burger", (req, res) => {
    res.json({});
  })

  // update a burger
  .put("/burger/:id", (req, res) => {
    res.json({ id: req.params.id });
  })

  // delete a burger
  .delete("/burgeer/:id", (req, res) => {
    res.json({ id: req.params.id });
  });

module.exports = router;
