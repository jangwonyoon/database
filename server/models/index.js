/* eslint-disable no-console */
var db = require("../db");

module.exports = {
  messages: {
    get: function (callback) {
      db.query("SELECT * FROM messages", (error, data) => {
        if (error) {
          callback(error);
        }
        console.log(data);
        callback(null, data);
      });
    },
    post: function ({ username, text, roomname }, callback) {
      let sql = `INSERT INTO messages(username, text, roomname) VALUES (?,?,?)`;
      let params = [username, text, roomname];
      db.query(sql, params, (error) => {
        if (error) {
          callback(error);
        }
        db.query("SELECT * FROM messages", params, (err, data) => {
          if (err) {
            callback(err);
          }
          callback(null, data);
        });
      });
    },
  },
  // 잔디 확인

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query("SELECT * FROM users", (error, data) => {
        if (error) {
          callback(error);
        }
        callback(null, data);
      });
    },
    post: function ({ username }, callback) {
      let sql = `INSERT INTO users(username) VALUES(?)`;
      let params = [username];
      db.query(sql, params, (error) => {
        if (error) {
          callback(error);
        }
        db.query("SELECT * FROM users", params, (err, data) => {
          if (err) {
            callback(err);
          }
          callback(null, data);
        });
      });
    },
  },
};
