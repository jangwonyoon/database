/* eslint-disable*/

var models = require("../models");

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((error, data) => {
        if (error) {
          res.send(error);
        }
        res.status(200).send(JSON.stringify(data));
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, (error, data) => {
        if (error) {
          res.send(error);
        }
        res.status(200).send(JSON.stringify(data));
      });
    },
  },

  users: {
    get: function (req, res) {
      models.users.get((error, data) => {
        if (error) {
          res.send(error);
        }
        res.status(200).send(JSON.stringify(data));
      });
    },
    post: function (req, res) {
      models.users.post(req.body, (error, data) => {
        if (error) {
          res.send(error);
        }
        res.status(200).send(JSON.stringify(data));
      });
    },
  },
};
