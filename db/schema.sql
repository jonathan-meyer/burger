
CREATE TABLE IF NOT EXISTS `burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(255) NOT NULL,
  `devoured` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);
