const conn = require("./connection");
const Burger = require("../models/Burger");

const orm = {
  connect: cb => conn.connect(cb),
  end: cb => conn.end(cb),

  selectAll: () =>
    new Promise((resolve, reject) => {
      conn.query("select * from `burgers`", (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.map(i => new Burger(i)));
        }
      });
    }),

  selectOne: id =>
    new Promise((resolve, reject) => {
      conn.query(
        "select * from `burgers` where ?",
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
        "insert into `burgers` set ?",
        { burger_name: burger.name },
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
      resolve(burger);
    }),

  deleteOne: id =>
    new Promise((resolve, reject) => {
      resolve();
    })
};

module.exports = orm;
