CREATE DATABASE booklog;

USE booklog;


CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  id_user INT NOT NULL,
  message VARCHAR(100) NOT NULL,
  username VARCHAR(20) NOT NULL,
  FOREIGN KEY fk1 (id_user) REFERENCES users(id),
  PRIMARY KEY (id)
);




