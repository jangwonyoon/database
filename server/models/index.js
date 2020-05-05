/* eslint-disable no-console */
var db = require("../db");

module.exports = {
  messages: {
    get: async function () {
      return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM messages";
        db.query(sql, (err, data) => {
          if (err) reject(err);
          resolve(data);
        });
      });
    }, // a function which produces all the messages
    post: async function ({ username, text, roomname }) {
      return new Promise((resolve, reject) => {
        let sql = `INSERT INTO messages (username, text, roomname) VALUES(${JSON.stringify(
          username
        )},${JSON.stringify(text)} ,${JSON.stringify(roomname)})`;
        db.query(sql, (err) => {
          if (err) reject(err);
          db.query("SELECT * FROM messages", (err, data) => {
            if (err) reject(err);
            resolve(data);
          });
        });
      });
    }, // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: async function () {
      return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM users";
        db.query(sql, (err, data) => {
          if (err) reject(err);
          resolve(data);
        });
      });
    },
    post: async function ({ username, text, roomname }) {
      return new Promise((resolve, reject) => {
        let sql = `INSERT INTO users (username, text, roomname) VALUES(${JSON.stringify(
          username
        )},${JSON.stringify(text)} ,${JSON.stringify(roomname)})`;
        db.query(sql, (err) => {
          if (err) reject(err);
          db.query("SELECT * FROM users", (err, data) => {
            if (err) reject(err);
            resolve(data);
          });
        });
      });
    },
  },
};
