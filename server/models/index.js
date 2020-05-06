/* eslint-disable no-console */
var db = require("../db");
var Sequelize = require("sequelize");

var messages = db.define(
  "messages",
  {
    username: Sequelize.STRING,
    text: Sequelize.STRING,
    roomname: Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

var users = db.define(
  "users",
  {
    username: Sequelize.STRING,
  },
  { timestamps: false }
);

const msg = {
  get: async function () {
    return new Promise((resolve, reject) => {
      messages
        .findAll()
        .catch((err) => {
          reject(err);
        })
        .then((data) => {
          resolve(data);
        });
    });
  },
  post: function ({ username, text, roomname }) {
    return new Promise((resolve, reject) => {
      messages
        .create({ username: username, text: text, roomname: roomname })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

const usr = {
  // Ditto as above.
  get: function () {
    return new Promise((resolve, reject) => {
      users
        .findAll()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post: function ({ username }) {
    return new Promise((resolve, reject) => {
      users
        .create({ username: username })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = { usr, msg };
