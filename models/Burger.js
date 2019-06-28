const orm = require("../config/orm");

const Burger = function(type) {
  this.type = type;
};

Burger.prototype.insert = function() {
  orm.insertOne(this);
};

Burger.prototype.update = function() {
  orm.updateOne(this);
};

module.exports = Burger;
