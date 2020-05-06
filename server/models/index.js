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
      db.query(
        `INSERT INTO messages(username, text, roomname) VALUES ('${username}', "${text}", '${roomname}')`,
        (error) => {
          if (error) {
            callback(error);
          }
          db.query("SELECT MAX(id) AS id FROM messages", (err, data) => {
            if (err) {
              callback(err);
            }
            callback(null, data);
          });
        }
      );
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
      db.query(`INSERT INTO users(username) VALUES('${username}')`, (error) => {
        if (error) {
          callback(error);
        }
        db.query("SELECT MAX(id) AS id FROM users", (err, data) => {
          if (err) {
            callback(err);
          }
          callback(null, data);
        });
      });
    },
  },
};
