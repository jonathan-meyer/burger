const orm = require("../config/orm");

const Burger = function({ id, burger_name, name, devoured }) {
  this.id = id;
  this.name = burger_name || name;
  this.devoured = [1, "1", "yes", true, "true", "on"].includes(devoured);
};

module.exports = Burger;
