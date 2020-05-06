/* eslint-disable*/

var models = require("../models");

module.exports = {
  messages: {
    get: async function (req, res) {
      await models.msg.get().then((data) => {
        res.status(200).send(JSON.stringify(data));
      });
    },
    post: async function (req, res) {
      await models.msg.post(req.body).then((data) => {
        res.status(200).send(JSON.stringify(data));
      });
    },
  },

  users: {
    get: async function (req, res) {
      await models.usr.get().then((data) => {
        res.status(200).send(JSON.stringify(data));
      });
    },
    post: async function (req, res) {
      await models.usr.post(req.body).then((data) => {
        res.status(200).send(JSON.stringify(data));
      });
    },
  },
};
