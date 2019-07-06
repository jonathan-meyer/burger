const Burger = function({ id, burger_name, name, devoured }) {
  this.id = id;
  this.burger_name = burger_name || name;
  this.devoured = [1, "1", "yes", true, "true", "on"].includes(devoured);
};

Burger.prototype.update = function({ id, burger_name, name, devoured }) {
  this.id = id || this.id;
  this.burger_name = burger_name || name || this.burger_name;
  this.devoured =
    [1, "1", "yes", true, "true", "on"].includes(devoured) || this.devoured;

  return this;
};

module.exports = Burger;
