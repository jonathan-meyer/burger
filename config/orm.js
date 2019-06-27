const conn = require("./connection");

const orm = {
  selectAll: () => {
    return [{}];
  },

  insertOne: model => {
    return model;
  },

  updateOne: model => {
    return model;
  }
};

module.exports = orm;
