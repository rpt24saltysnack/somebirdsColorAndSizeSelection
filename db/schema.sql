CREATE DATABASE fec;

USE fec;

-- Create Main Tables (shoes, colors, sizes & quantities)
CREATE TABLE shoes (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  model INT NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE colors (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  shoe_color VARCHAR(40) NOT NULL,
  sole_color VARCHAR(40) NOT NULL,
  shoe_hex VARCHAR(7) NOT NULL,
  sole_hex VARCHAR(7) NOT NULL,
  limited BOOLEAN DEFAULT FALSE,

  PRIMARY KEY (id)
);

CREATE TABLE sizes (
  id INT NOT NULL AUTO_INCREMENT,
  size VARCHAR(5),

  PRIMARY KEY (id)
);

CREATE TABLE quantities (
  id INT NOT NULL AUTO_INCREMENT,
  shoe_id INT NOT NULL,
  color_id INT NOT NULL,
  size_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 0,

  PRIMARY KEY (id),
  FOREIGN KEY (shoe_id) REFERENCES shoes(id),
  FOREIGN KEY (color_id) REFERENCES colors(id),
  FOREIGN KEY (size_id) REFERENCES sizes(id)
);

-- Create Join Tables
CREATE TABLE shoecolors (
  id INT NOT NULL AUTO_INCREMENT,
  shoe_id INT NOT NULL,
  color_id INT NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (shoe_id) REFERENCES shoes(id),
  FOREIGN KEY (color_id) REFERENCES colors(id)
);

CREATE TABLE shoesizes (
  id INT NOT NULL AUTO_INCREMENT,
  shoe_id INT NOT NULL,
  size_id INT NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (shoe_id) REFERENCES shoes(id),
  FOREIGN KEY (size_id) REFERENCES sizes(id)
);
