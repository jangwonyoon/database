/* eslint-disable*/

var models = require("../models");

module.exports = {
  messages: {
    get: async function (req, res) {
      await models.messages.get().then((data) => {
        res.status(200).send(data);
      });
    },
    post: async function (req, res) {
      await models.messages.post(req.body).then((data) => {
        res.status(200).send(data);
      });
    },
  },

  users: {
    get: async function (req, res) {
      await models.messages.get().then((data) => {
        res.status(200).send(data);
      });
    },
    post: async function (req, res) {
      await models.messages.post(req.body).then((data) => {
        res.status(200).send(data);
      });
    },
  },
};
