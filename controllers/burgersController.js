const express = require("express");

const orm = require("../config/orm");
const Burger = require("../models/Burger");

const router = express
  .Router()

  // get all burgers
  .get("/", (req, res) => {
    orm
      .selectAll()
      .then(data => res.json(data))
      .catch(err => res.status(500).end());
  })

  // get a burger
  .get("/:id", (req, res) => {
    orm
      .selectOne(req.params.id)
      .then(data => (data ? res.json(data) : res.status(404).end()))
      .catch(err => res.status(500).end());
  })

  // create a burger
  .post("/", (req, res) => {
    const { name } = req.body;

    orm
      .insertOne(new Burger({ name }))
      .then(data => res.json(data))
      .catch(err => res.status(500).end());
  })

  // update a burger
  .put("/:id", (req, res) => {
    const {
      params: { id },
      body
    } = req;

    orm.selectOne(id).then(burger => {
      burger
        ? orm
            .updateOne(id, burger.update(body))
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
        : res.status(404).end();
    });
  })

  // delete a burger
  .delete("/:id", (req, res) => {
    const {
      params: { id }
    } = req;

    orm.selectOne(id).then(burger => {
      burger
        ? orm
            .deleteOne(id)
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
        : res.status(404).end();
    });
  });

module.exports = router;
