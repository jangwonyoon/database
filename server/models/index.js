/* eslint-disable no-console */
var db = require("../db");

module.exports = {
  messages: {
    get: function () {
      return new Promise((resolve, reject) => {
        db.query("SELECT * FROM messages", (error, data) => {
          if (error) {
            reject(error);
          }
          resolve(data);
        });
      });
    },
    post: function ({ username, text, roomname }) {
      let sql = `INSERT INTO messages(username, text, roomname) VALUES (?,?,?)`;
      let params = [username, text, roomname];
      return new Promise((resolve, reject) => {
        db.query(sql, params, (error) => {
          if (error) reject(error);
          db.query("SELECT * FROM messages", params, (err, data) => {
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
        db.query("SELECT * FROM users", (error, data) => {
          if (error) reject(error);
          resolve(data);
        });
      });
    },
    post: function ({ username }) {
      let sql = `INSERT INTO users(username) VALUES(?)`;
      let params = [username];
      return new Promise((resolve, reject) => {
        db.query(sql, params, (error) => {
          if (error) reject(error);
          db.query("SELECT * FROM users", params, (err, data) => {
            if (err) reject(err);
            resolve(data);
          });
        });
      });
    },
  },
};
