
CREATE TABLE IF NOT EXISTS `ecommercedb`.`types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `ecommercedb`.`genders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `gender` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `ecommercedb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `vouchers` INT NULL,
  `is_banned` TINYINT NULL,
  `profile_picture` VARCHAR(255) NULL,
  `types_id` INT NOT NULL,
  `genders_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) ,
  INDEX `fk_users_users_types1_idx` (`types_id` ASC) ,
  INDEX `fk_users_genders1_idx` (`genders_id` ASC) ,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) ,
  CONSTRAINT `fk_users_users_types1`
    FOREIGN KEY (`types_id`)
    REFERENCES `ecommercedb`.`types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_genders1`
    FOREIGN KEY (`genders_id`)
    REFERENCES `ecommercedb`.`genders` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `ecommercedb`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `ecommercedb`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NULL,
  `viewed` INT NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_categories1_idx` (`categories_id` ASC) ,
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `ecommercedb`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `ecommercedb`.`clients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_has_products_products1_idx` (`products_id` ASC) ,
  INDEX `fk_users_has_products_users1_idx` (`users_id` ASC) ,
  CONSTRAINT `fk_users_has_products_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `ecommercedb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_products_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `ecommercedb`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `ecommercedb`.`sellers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  `categories_id` INT NOT NULL,
  `revenue` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_has_products1_products1_idx` (`products_id` ASC) ,
  INDEX `fk_users_has_products1_users1_idx` (`users_id` ASC) ,
  INDEX `fk_sellers_categories1_idx` (`categories_id` ASC) ,
  CONSTRAINT `fk_users_has_products1_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `ecommercedb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_products1_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `ecommercedb`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sellers_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `ecommercedb`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `ecommercedb`.`modify` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `users_id1` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_has_users_users2_idx` (`users_id1` ASC) ,
  INDEX `fk_users_has_users_users1_idx` (`users_id` ASC) ,
  CONSTRAINT `fk_users_has_users_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `ecommercedb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_users_users2`
    FOREIGN KEY (`users_id1`)
    REFERENCES `ecommercedb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `ecommercedb`.`interacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(255) NULL,
  `users_id` INT NOT NULL,
  `users_id1` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_has_users_users6_idx` (`users_id1` ASC) ,
  INDEX `fk_users_has_users_users5_idx` (`users_id` ASC) ,
  CONSTRAINT `fk_users_has_users_users5`
    FOREIGN KEY (`users_id`)
    REFERENCES `ecommercedb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_users_users6`
    FOREIGN KEY (`users_id1`)
    REFERENCES `ecommercedb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `ecommercedb`.`wish_lists` (
  `clients_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  PRIMARY KEY (`clients_id`, `products_id`),
  INDEX `fk_clients_has_products_products1_idx` (`products_id` ASC) ,
  INDEX `fk_clients_has_products_clients1_idx` (`clients_id` ASC) ,
  CONSTRAINT `fk_clients_has_products_clients1`
    FOREIGN KEY (`clients_id`)
    REFERENCES `ecommercedb`.`clients` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clients_has_products_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `ecommercedb`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `ecommercedb`.`likes` (
  `clients_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  PRIMARY KEY (`clients_id`, `products_id`),
  INDEX `fk_clients_has_products_products2_idx` (`products_id` ASC) ,
  INDEX `fk_clients_has_products_clients2_idx` (`clients_id` ASC) ,
  CONSTRAINT `fk_clients_has_products_clients2`
    FOREIGN KEY (`clients_id`)
    REFERENCES `ecommercedb`.`clients` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clients_has_products_products2`
    FOREIGN KEY (`products_id`)
    REFERENCES `ecommercedb`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `ecommercedb`.`discounts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `discount_code` VARCHAR(255) NULL,
  `discount_percentage` FLOAT NULL,
  `products_id` INT NOT NULL,
  `client_id` INT NOT NULL,
  `seller_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sellers_has_products_products1_idx` (`products_id` ASC) ,
  INDEX `fk_discounts_users1_idx` (`client_id` ASC) ,
  INDEX `fk_discounts_users2_idx` (`seller_id` ASC) ,
  CONSTRAINT `fk_sellers_has_products_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `ecommercedb`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_discounts_users1`
    FOREIGN KEY (`client_id`)
    REFERENCES `ecommercedb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_discounts_users2`
    FOREIGN KEY (`seller_id`)
    REFERENCES `ecommercedb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `ecommercedb`.`ads` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  `sellers_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  INDEX `fk_sellers_has_products_products2_idx` (`products_id` ASC) ,
  INDEX `fk_sellers_has_products_sellers2_idx` (`sellers_id` ASC) ,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_sellers_has_products_sellers2`
    FOREIGN KEY (`sellers_id`)
    REFERENCES `ecommercedb`.`sellers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sellers_has_products_products2`
    FOREIGN KEY (`products_id`)
    REFERENCES `ecommercedb`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

