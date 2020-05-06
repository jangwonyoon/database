/* eslint-disable no-console */
var db = require("../db");

module.exports = {
  messages: {
    get: function () {
      return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM messages";
        db.query(sql, (err, data) => {
          if (err) reject(err);
          resolve(data);
        });
      });
    },
    post: function ({ username, text, roomname }) {
      let sql = `INSERT INTO messages(username, text, roomname) VALUES (?,?,?)`;
      let params = [username, text, roomname];
      return new Promise((resolve, reject) => {
        db.query(sql, params, (err) => {
          if (err) reject(err);
          db.query("SELECT * FROM messages", (err, data) => {
            if (err) reject(err);
            resolve(data);
          });
        });
      });
    },
  },

  users: {
    // Ditto as above.
    get: function () {
      return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM users";
        db.query(sql, (err, data) => {
          if (err) reject(err);
          resolve(data);
        });
      });
    },
    post: function ({ username }) {
      let sql = `INSERT INTO users(username) VALUES (?)`;
      let params = [username];
      return new Promise((resolve, reject) => {
        db.query(sql, params, (err) => {
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
