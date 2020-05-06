DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE messages
(
  id INT NOT NULL
  AUTO_INCREMENT,
 username VARCHAR
  (20) NOT NULL,
  text VARCHAR
  (100) NOT NULL,
  roomname varchar
  (20),
  PRIMARY KEY
  (id)
);

  CREATE TABLE users
  (
    id int NOT NULL
    AUTO_INCREMENT,
  username varchar
    (255),
  PRIMARY KEY
    (id)
)



/*
CREATE TABLE messages (
  //  remove here and create your message table
);
*/
/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/