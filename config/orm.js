const conn = require("./connection");
const Burger = require("../models/Burger");

const orm = {
  connect: cb => conn.connect(cb),
  end: cb => conn.end(cb),

  selectAll: devoured =>
    new Promise((resolve, reject) => {
      conn.query(
        "select * from `burgers`" + (devoured === undefined ? "" : " where ?"),
        { devoured: devoured === undefined ? undefined : devoured === true },
        (err, results, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(results.map(i => new Burger(i)));
          }
        }
      );
    }),

  selectOne: id =>
    new Promise((resolve, reject) => {
      conn.query(
        "SELECT * FROM `burgers` WHERE ?",
        { id },
        (err, results, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(results.map(i => new Burger(i)).pop());
          }
        }
      );
    }),

  insertOne: burger =>
    new Promise((resolve, reject) => {
      conn.query(
        "INSERT INTO `burgers` SET ?",
        burger,
        (err, results, fields) => {
          if (err) {
            reject(err);
          } else {
            orm
              .selectOne(results.insertId)
              .then(resolve)
              .catch(reject);
          }
        }
      );
    }),

  updateOne: (id, burger) =>
    new Promise((resolve, reject) => {
      conn.query(
        "UPDATE `burgers` SET ?  WHERE ? LIMIT 1",
        [burger, { id }],
        (err, results, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    }),

  deleteOne: id =>
    new Promise((resolve, reject) => {
      conn.query(
        "DELETE FROM `burgers` WHERE ? LIMIT 1",
        { id },
        (err, results, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    }),

  burgerCount: () =>
    new Promise((resolve, reject) => {
      conn.query(
        "SELECT `AUTO_INCREMENT` FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'burger' AND TABLE_NAME = 'burgers'",
        (err, results, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    })
};

module.exports = orm;
