DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE
  users(
    userID int NOT NULL,
    username varchar(255) NOT NULL,
    PRIMARY KEY (userID)
);


CREATE TABLE
  rooms(
    roomID int NOT NULL,
    roomname varchar(255) NOT NULL,
    PRIMARY KEY (roomID)
);


CREATE TABLE
  messages(
    message_id int NOT NULL AUTO_INCREMENT,
    text varchar(255) NOT NULL,
    userID int NOT NULL,
    roomID int NOT NULL,
    PRIMARY KEY (message_id),
    FOREIGN KEY (userID) REFERENCES users(userID),
    FOREIGN KEY (roomID) REFERENCES rooms(roomID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


SHOW TABLES;

DESCRIBE users;
DESCRIBE rooms;
DESCRIBE messages;